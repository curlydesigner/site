#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const root = path.resolve(__dirname, '..');
const tracked = new Set(
    childProcess.execFileSync(
        'git',
        ['ls-files', '--cached', '--others', '--exclude-standard'],
        { cwd: root, encoding: 'utf8' }
    )
        .split('\n')
        .filter(Boolean)
);
const htmlFiles = Array.from(tracked).filter((file) => file.endsWith('.html'));
const findings = [];

function candidateFiles(targetPath, sourceFile) {
    const cleanPath = decodeURIComponent(targetPath.split('?')[0].split('#')[0]);
    const sourceDirectory = path.posix.dirname(sourceFile);
    const relative = cleanPath.startsWith('/')
        ? cleanPath.slice(1)
        : path.posix.normalize(path.posix.join(sourceDirectory, cleanPath));
    const normalized = relative.replace(/\/+$/, '');

    if (!normalized) return ['index.html'];

    return [
        normalized,
        normalized + '.html',
        path.posix.join(normalized, 'index.html')
    ];
}

htmlFiles.forEach((sourceFile) => {
    const html = fs.readFileSync(path.join(root, sourceFile), 'utf8');
    const attributePattern = /\b(?:href|src)=["']([^"']+)["']/gi;
    let match;

    while ((match = attributePattern.exec(html))) {
        const raw = match[1].trim();
        if (
            !raw ||
            raw.startsWith('#') ||
            raw.startsWith('//') ||
            raw.startsWith('/portfolio/drafts/') ||
            /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(raw) ||
            raw.includes('{{') ||
            raw.includes('{%')
        ) continue;

        const candidates = candidateFiles(raw, sourceFile);
        if (!candidates.some((candidate) => tracked.has(candidate))) {
            findings.push({ source: sourceFile, target: raw });
        }
    }
});

if (findings.length) {
    console.log(JSON.stringify({ broken: findings.length, findings }, null, 2));
    process.exitCode = 1;
} else {
    console.log(JSON.stringify({ broken: 0, checkedFiles: htmlFiles.length }, null, 2));
}
