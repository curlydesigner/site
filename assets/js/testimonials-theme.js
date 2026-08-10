/*
 * SHARED TESTIMONIALS THEME
 * Change only the word below to "light" or "dark".
 * The Home and Design Educator pages will always use the same theme.
 */
(function () {
    var testimonialsTheme = "light";
    var selectedTheme = testimonialsTheme === "light" ? "light" : "dark";

    document.documentElement.classList.add("testimonials-theme-" + selectedTheme);
}());
