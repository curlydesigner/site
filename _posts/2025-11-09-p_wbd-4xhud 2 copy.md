---
layout: portfolio-post
title: HUD Navigation Architecture | Design System | Accessibility - for WB Game
published: False
tags: 
  - UX/UI Product Design
  - Gaming & IxD
  - Design System
  - Data Visualization
  - Info Architecture
  - UX Research
  
categories:
  - blog
  - portfolio
  - portfolio-featured
    
permalink: /wbd-4xhud
featured_image: /assets/posts/2023-06-31-p_wb-4x/wb-feaut-img.png
---


<style>
  .flex-container {
    display: flex;              /* Enables flexbox */
    justify-content: space-between; /* Positions items on opposite ends */
    align-items: stretch;       /* Stretches items to fill the container */
  }
  .flex-box {
    width: 50%;                 /* Sets width for each box */
    background-color: #f7f7f7;
    border: 0px solid black;
    padding: 15px;
    margin: 5px;
    border-radius: 5px;
    color: black;
    text-align: center; 
  }
</style>



![ixd user flow](/assets/posts/2023-06-31-p_wb-4x/P_WB-hGOT.png "ixd user flow") 

### 🎮 Warner Bros Discovery — Game HUD Navigation Redesign

<br>


[Overview](#overview) • 
[Research](#research) • 
[IA / HUD Structure](#hud-information-architecture) • 
[UX Challenges](#ux-challenges) • 
[User Flow](#user-flow) • 
[Prototype](#prototype) • 
[Design System](#design-system) • 
[Accessibility](#accessibility)

<br>

_______________________________________________

<!-- 4 Cards  -->


 <div class="info-cards">

  <div class="info-card">
  <h3>My Role</h3>
  Senior UX/UI Product Designer specializing in systems design, complex HUDs, and scalable information architecture. 
  Defined UX strategy, structure, and interaction patterns for a multi-layer strategy game.
</div>

  <div class="info-card">
  <h3>Industry Experience</h3>
  AAA Game UX & Systems Design.
  <br>Building high-density interfaces and decision-support tools within the Game of Thrones / House of the Dragon strategy ecosystem.
</div>

  <div class="info-card">
  <h3>Project Overview</h3>
  Designed onboarding, navigation and core interaction model for a large-scale mobile, tablet and desktop screens. 
  Delivered user flows, IA frameworks, wireframes, prototypes, and UX patterns to support fast, strategic player decision-making.
</div>

  <div class="info-card">
  <h3>Research & Insights</h3>
  Analyzed interaction patterns, and assessed complexity challenges. 
  Partnered with Game Design, UI Art, and Production to validate concepts, refine usability, and align the HUD with player needs and gameplay depth.
 </div>
</div>
______________________________________________

#### Moodboard
Collaborated with Art to build a mood board that established visual direction through fantasy storytelling, medieval references, and character iconography. Synthesized textures, maps, and motifs into a cohesive system that balances immersion, clarity, and scalable UI patterns.
![moodboard](/assets/posts/2025-12-09-p_wbd-4xhud/MoodBoard.png "moodboard") 

#### Persona
These are examples of  two  different types of players. My challenge as a designer was to balance these very different expectations: making the experience intuitive and inviting for the narrative lover, while still keeping the rich puzzle quest for the strategy expert. 

![observation](/assets/posts/2025-12-09-p_wbd-4xhud/Persona.png "observation") 

#### Journey
When Excitement Meets a Dead End
These are User research insights from playtest sessions
To better understand how players evolve through the game, I mapped their journey using five distinct phases — Explore, Expand, Exploit, Exterminate, and Endgame.
Each phase reflects a different player mindset, goal, and emotional state.

![observation](/assets/posts/2025-12-09-p_wbd-4xhud/Journey.png "observation") 

#### Journey Map
![moodboard](/assets/posts/2025-12-09-p_wbd-4xhud/journeymapa.png "moodboard") 

#### Testing
The common challenges in such complex games is the need to present a vast amount of information. Making it difficult for players to find the specific data they need getting lost in irrelevant details. 
![ixd user-test](/assets/posts/2025-12-09-p_wbd-4xhud/LOR2-videopl.gif "ixd user-test") 

#### Not Accessible 
As part of the accessibility review, I discovered many issues like touch targets that were too small, buttons placed too close together, or critical actions pushed to screen edges where they were harder to reach. 
![ixd user-test](/assets/posts/2025-12-09-p_wbd-4xhud/G_tilemap_dont2.png "ixd user-test") 

#### Not Accessible 

![ixd user-test](/assets/posts/2025-12-09-p_wbd-4xhud/touch.png "ixd user-test") 

#### Accessability
 scalable template that defined safe touch zones, margins, and spacing rules for both thumb reach and visibility.

![observation](/assets/posts/2025-12-09-p_wbd-4xhud/accessabilty.png "observation") 

#### Information Architecture
Info Architecture that will be simplified for players & intuitive - mapping it into clear HUD zones. 
![observation](/assets/posts/2025-12-09-p_wbd-4xhud/IA.png "observation") 

#### Layout Recommendations
![observation](/assets/posts/2025-12-09-p_wbd-4xhud/tiletype.png "observation") 
![observation](/assets/posts/2025-12-09-p_wbd-4xhud/TileMap_Hud.png "observation") 

#### MAP INFO PANELS Analysis & Understand common patterns

![observation](/assets/posts/2025-12-09-p_wbd-4xhud/ResearchAna.png "observation") 

#### Observation Clean-up

![observation](/assets/posts/2025-12-09-p_wbd-4xhud/tiletype.png "observation")

| Main MAP | Tile Ownership 
![observation](/assets/posts/2025-12-09-p_wbd-4xhud/wb-tile-ownership.gif "observation") 
Building on the previous analysis, I designed a visual framework that defines how each tile type should appear on the map — focusing on clarity, accessibility, and instant recognition. Every tile state was assigned a specific color and each panel followed consistent interaction patterns and placement rules, so players could quickly recognize and act on tiles without confusion. 
Each tile state was assigned a distinct color for quick scanning:
Grey for empty tiles — neutral and inactive.


Red for enemy tiles — indicating threat and action potential.


Green for my tiles — a sense of control and safety.


Blue for alliance tiles — friendly collaboration.


Purple for faction-owned tiles — global or special ownership.


However, color alone isn’t always accessible — particularly for players with color vision deficiencies. To address this, I added iconography and shape indicators that mirror the color meaning, such as shield or flag icons for ownership and border styles for threat levels.
This color-coded system is also designed to scale — meaning the same logic applies from zoomed-out map views to close-up tile detail screens, ensuring consistent user orientation.

![observation](/assets/posts/2025-12-09-p_wbd-4xhud/tiles.png "observation") 
| Main MAP | Tile Ownership - My City
layout for the player’s own city — While most tiles  follow a generic structure - ‘My City’ requires a distinct  pattern
The idea is the player can see relevant info one at a time 
. This area serves as the player’s home base — the center of strategic decisions, upgrades, and management actions. 

![observation](/assets/posts/2025-12-09-p_wbd-4xhud/Tileown.png "observation") 

#### Grayscale Design System 
What you see here is just a small glimpse of the larger design system. While I was working on the main HUD and overall game architecture, Most of the  screens were built in grayscale  to focus purely on structure, clarity, and interaction. As the experience evolved, I started building consistency & reusable components in parallel, so engineers & the team could test & iterate. We needed to move quickly for testing and experimentation — so the system had to be flexible, scalable, and easy to adapt as new ideas emerged.

A living system that evolved with the product - balancing speed, clarity, and collaboration.

![observation](/assets/posts/2025-12-09-p_wbd-4xhud/designsystem.png "observation") 

As the design system started to take shape and the engineering team began developing the core game architecture, I moved into exploring textures, visual balance, and environmental context.
Testing how textures, icons, labels, and transparency interact together without cluttering the screen. 

![textures](/assets/posts/2025-12-09-p_wbd-4xhud/texturesd.png "textures") 


<div class="row">
  <div class="col-sm-6" markdown="1">

#### Complexity
 
  - Tackled the challenge of cluttered, complex interfaces due to the vast amount of data and actions required for empire management.
  - Players can easily become overwhelmed by excessive information, making it difficult to make informed decisions.
  - Navigating through multiple layers of features and interactions
  - Ensuring clarity while maintaining the richness of a 4X strategy game with thoughtful information hierarchy.

<br>

</div>

  <div class="col-sm-6" markdown="1">

#### Visual Aesthetic & Accessibility 

 - Identified key visual challenges in the game where aesthetics lacked clarity and readability.
 - The visual overload made critical information hard to distinguish, impacting decision-making and gameplay flow.
 - Highlighted the need for improved visual hierarchy and clarity,reducing visual complexity to improve gameplay flow.

  </div>
</div>

____________________________________

<br>

#### Impact
![observation](/assets/posts/2025-12-09-p_wbd-4xhud/G-Play.png "observation") 

______________________________________________

#### My Reflection as a Mentor and What This Taught Me 

Being a designer is more than solving problems—it’s about how I approach them, who I collaborate with, and how I bring people together along the journey.
My work is always rooted in strategy and empathy to deliver solutions that feel intuitive and meaningful. While I am deep in user research and prototyping, something equally important happening in parallel 

- a technical collaboration with engineers for testing 
- a creative collaboration with game artists for storytelling. 

Every visual and interactive element is part of a bigger narrative, crafted with intent. Whether it’s mapping a complex system, simplifying flows, or designing micro-interactions that reduce friction. I approach each project with a systems mindset and a collaborative spirit. I’m often the bridge between business objectives, user needs, and creative execution.

From large-scale mobile applications to admin platforms and internal tools, I’ve worked across disciplines to build experiences that are not only visually engaging but strategically aligned and accessible.

If you’re building a product that demands clarity, creativity, and thoughtful execution—and looking for someone who brings structure to ambiguity and energy to collaboration—I’d love to connect.

______________________________________________

### My Reflection 

In this project, I needed to consider how the entire system should behave. Collaborating closely with engineers to align on data structures and interactions, while advocating for accessibility and inclusive design.

For me, design begins with curiosity and empathy - understanding the people behind the data, their challenges, and what clarity means to them. I believe great design happens through collaboration, iteration, and a shared vision. My work is rooted in strategy and empathy to deliver solutions that feel intuitive and meaningful. 



_______________________


<div class="row">
  <div class="col-sm-6" markdown="1">

- **Simplifying Complexity**
 
  4X games present unique challenges with complex systems while managing many features and data simultaneously. I’ve come to understand that one of the common challenges in such complex games is the need to present a vast amount of information within the constraints of a small mobile screen. 

<br>

  </div>
  <div class="col-sm-6" markdown="1">

  **Solution**

  Working with a team to prioritize essential information. Use collapsible menus, tooltips, and context-sensitive UI elements to manage information efficiently with visual hierarchy to ensure critical details stand out.

  </div>
</div>


<br>


<div class="row">
  <div class="col-sm-6" markdown="1">

- **Progressive Complexity** 
 
  Another challenge is how to delicate balance to gradually introduce game mechanics and features, especially in the early stages of the game. 
  Avoid overwhelming the player with too much information all at once. 

<br>

  </div>
  <div class="col-sm-6" markdown="1">

  **Solution**

  I supported the UX/UI exploration for a well-crafted system that introduces concepts progressively. 
  By offering interactive tutorials and tooltips to educate players as they play. And provide optional complexity levels for experienced and beginner players.

  </div>
</div>


<br>


<div class="row">
  <div class="col-sm-6" markdown="1">

- **Aiming to all Levels**  
 
  Striking to engage different player knowledge and levels. This balance becomes even more critical as it aims to both players who appreciate the complexity and those who prefer a more straightforward puzzle gaming experience.

<br>

  </div>
  <div class="col-sm-6" markdown="1">

  **Solution**

  Learning from user tests, the pain points, and uncertain areas of complexity. Working to simplify the navigation, combining elements, and with intuitive HUD navigation and consideration for a future proof design that can incorporate dificulty level settings and progressive discovery of information. 

  </div>
</div>

<br>

<div class="row">
  <div class="col-sm-6" markdown="1">

- **Intuitive Data and straightforward User interface (UI)**   
 
  How to organized UI that organizes information about each of the screens and offers easy Navigation throughout the game. 
  With UI that allows players to explore and guides players in understanding key game element, like: what is a tile on a map? Who is the owner, and how do you own a tile? How to manage their resources and City/Castle?

<br>

  </div>
  <div class="col-sm-6" markdown="1">

  **Solution**

  I was experimenting and sharing my recommendation with the team to develop an intuitive and visually appealing UI that provides clear information, organized HUD and easy navigation through the Map. To find solutions that work, I was hands-on in creating wireframes and interactive prototypes to test the experience. Experiment with components, tooltips, icons, and color-coding elements for quick comprehension. Incorporating guides and documentation to explain core concepts.

  </div>
</div>

<br>

<div class="row">
  <div class="col-sm-6" markdown="1">

- **Explore and test accessibility**  
 
  The challenge of displaying a large amount of information that needs to appear on a small mobile map, gameplay. Readability, text size, icons, touch target for actions, and spacing can all affect the accessibility and usability of an interface. 

<br>

  </div>
  <div class="col-sm-6" markdown="1">

  **Solution**

  I took the time to create guidelines and templates that can be followed to ensure optimal touch target usability. Text, images, icons, and other elements are clear and straightforward with considerable leveraging and ‘white space.’ With information that effectively convey critical details and exciting messages to engage the player.

  </div>
</div>

<br>

_____________________________________________

### User Flow 

<a id="user-flow"></a>

<br>

![user-flow](/assets/posts/2023-06-31-p_wb-4x/User-Flow-Map.png "user-flow") 

_______________________________________________

<br>

### Some of the Design System Breakdown
#### Main Header Navigation - Top Bar
<br>

The HUD consists of a top bar with elements that are persistent. 
While the location of the top bar remains static, its content is customizable and will change slightly based on the specific screen or section the player interacts with.

The header (top bar) on the Tile Map will include the below links and information:

- Link to Player’s Profile
- Link to choose a Planet from a Galaxy map
- Search options 
- The Game Settings 


![topbar](assets/posts/2023-06-31-p_wb-4x/topbar.png "topbar")


The components of the Topp-Bar header - sub-section:

- Go Back to the map to provide a straightforward and intuitive way for users to return to the previous screen they were viewing.

- Page Title: the header should indicate the current location or purpose of the local navigation panel. 
It should provide a clear and descriptive label to help players understand where they are within the overall navigation structure.


![topbar](assets/posts/2023-06-31-p_wb-4x/topbar-1.png "topbar")


#### Close Button and Go Back Arrow: 
<br>

**Back Arrow** - to allow easy Navigation for players and consistency - the back arrow should appear in any full-screen layout to provide a simple and intuitive behavior for players to go back.

**Close Button or Tap Outside** - should be used to dismiss or close a specific element, small pop-outs, overly screens, or information panels.
By incorporating these basic navigation rules, we ensure clear and intuitive Navigation between the different screens. And provide users with the necessary means to navigate, interact, and recover from potential navigational challenges.



### Accessibility 

<br>

Accessibility has a significant impact on the user experience of players. Readability, text size, icons, touch target for actions, and spacing can affect the accessibility and usability of an interface. The challenge of displaying a large amount of information that needs to appear on a small mobile map, gameplay, means Navigation needs to be simplified and clear from their layout and assessability. Therefore, I took the time to create guidelines and templates that can be followed to ensure optimal touch target usability. Text, images, icons, and other elements are clear and straightforward with considerable leveraging and ‘white space.’


![touch target](assets/posts/2023-06-31-p_wb-4x/DALL-E-TOUCHTARGET.png "touch target")
###### Educational diagram for the optimal touch target size on a screen interface. Representing different touch target sizes.

<br> 
The ideal target size for most users is around 48-50px in width and height. The minimum target size for a mobile screen button (for players using an index finger) should be at least 45x45px in width and height. But for some, this size might cover the visibility of the entire target. For players who are using their Thumb, 72px is the target area.
<br>

![touch target](assets/posts/2023-06-31-p_wb-4x/wb-feaut-img2.png "touch target")

<br>

______________________

#### Not Accessible 

**Don’t** create actions and icons that are too small or close to each other. The distance and spacing between targets depend on the designed area, but consider the largest finger size to prevent accidental touch. By using smaller icons, consider more spacing to avoid accidental touch.

Elements that need to touch each other need to take into consideration the surrounding touch area. 

Elements have to be placed within the safety-marked area.

![dont](assets/posts/2023-06-31-p_wb-4x/G_tilemap_dont1.png "dont")
###### Not accessible example; don't create actions and icons that are too small or too close to each other.

<br>


#### Good Examples

The design should be adapted for optimal screen size. Make sure actions are large enough and spaced out for reliable interaction. Different screen sizes may have convenient and hard-to-reach areas for tapping.
This is why bottom side buttons should be adapted for maximum thumb-finger size tap.
Targets that are frequently used or critical to the functionality should be placed within easy reach and should be larger than less important targets.

<br>

![dont](assets/posts/2023-06-31-p_wb-4x/G_tilemap_THUMBS.png "dont")
###### Elements on the side of the screen should be considered as a larger tappable area for thumb-sized fingers and placed within the safety-marked area.

![dont](assets/posts/2023-06-31-p_wb-4x/G_tilemap_bf2.png "dont")
###### Icons in the middle of the screen could be designed smaller for index-size finger.

![dont](assets/posts/2023-06-31-p_wb-4x/G_tilemap_bf1.png "dont")
###### Bottom side buttons should be adapted for maximum thumb-finger size tap.

<br>


The ideal tappable action menu size is 48px plus 24px (minimum) space to get a 72px finger target area. The essential actions are located on the side adapted for thumb size 72x72px. 

Bottom menu action items on a tile map should display not more than 3-4 most important actions, plus two larger side actions.
Calculation of maximum elements that could fit into the screen and its placement.


![safety](assets/posts/2023-06-31-p_wb-4x/size-guide.png "safety")
###### Elements on the side of the screen should be considered as a larger tappable area for thumb-sized fingers and placed within the safety-marked area.

<br>

But of course, it is also all about being smart about the implementation of code to ensure a responsive design that can adapt to different screen sizes and optimize its layout, text, and icons dynamically based on the screen size and orientation of the device being used. Taking the time to talk with developers about the technical solutions for Utilizing flexible layouts and considering elements to be inside the visual area of the screen.

<br>


<div class="row">
  <div class="col-sm-6" markdown="1">

#### Labels - How important are they !?


 Labels help organize content, making it easier for users to locate specific information or navigate through. Consistent Navigation with labels may be helpful. With easy-to-read and clear-to-understand   contextual visualization, cues can help users understand where they are and where they can go next.

 Labels next to buttons and icons describe their functions explicitly. This is beneficial for all users, including those with cognitive impairments or those who are not familiar with certain symbols or iconography.

 Also, labels provide essential information to screen readers and assistive technologies, enabling users with visual impairments to understand and interact with digital content. When elements are appropriately labeled, screen readers can announce the labels aloud, allowing users to navigate and access the content effectively.
 
 Without labels, users may struggle to understand what information is expected in each field, leading to errors and frustration.
 
 Labels play a role in providing clear error messages when something goes wrong. This is crucial for users to identify the problem and take appropriate action to correct it.

 I learned that incorporating labels is an essential aspect of accessible design, regardless of the user's abilities or disabilities. Labels contribute to a more inclusive and user-friendly experience, making it easier for everyone to access and engage with digital interfaces and information.

  </div>
  <div class="col-sm-6" markdown="1">

#### Textures and Accessibility

 It’s important to strike a balance between aesthetics and usability.

 When designing for Map territories, Textures can indeed play a crucial role in accessibility and easy identification, especially when it comes to color blindness. 
 
 Using textures with the right visual contrast, patterns, or gradients can provide tactile feedback to users with visual impairments. On a map, it can help identify different territories or regions. 
 
 For example, a rough texture could represent mountains, while a smooth texture could represent plains.
 
 Also, consistent textures can represent different types of territories across various screens or components. 
 
 Users can quickly learn to associate specific textures with specific regions, making the map more intuitive and familiar to navigate. 
 
  </div>
</div>

<br>
 
_______________________________________________

#### Tools Used 
   - Figma 
   - Adobe Illustrator
   - QuickTime Player 
   - Confluence 

_______________________________________________


#### Other projects:

- [SecuSuite Design System and UI Guidelines](/design-guidelines)
- [Onboarding screens](/empty-data)
- [BlackBerry Brand Packaging Guidelines](/bb-brand) 
- [BlackBerry Dark Theme Guidelines and Accessibility](/colour-accessibility) 

_________________________________________________

#### Other Pages

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Link</title>
    <style>
        .oval-link {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50; /* Background color */
            color: white; /* Text color */
            border: 2px solid #4CAF50; /* Border color */
            border-radius: 30px; /* Rounded corners */
            text-decoration: none; /* Remove underline */
             }
  .oval-link:hover {
            background-color: white; /* Hover background color */
            color: #4CAF50; /* Hover text color */
        }
    </style>
</head>
<body>
    <a href="https://curlydesigner.com/about" class="oval-link">About Me</a>
</body>
</html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Link</title>
    <style>
        .oval-link {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50; /* Background color */
            color: white; /* Text color */
            border: 2px solid #4CAF50; /* Border color */
            border-radius: 30px; /* Rounded corners */
            text-decoration: none; /* Remove underline */
             }
  .oval-link:hover {
            background-color: white; /* Hover background color */
            color: #4CAF50; /* Hover text color */
        }
    </style>
</head>
<body>
    <a href="https://curlydesigner.com/category/portfolio" class="oval-link">Portfolio</a>
</body>
</html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Link</title>
    <style>
        .oval-link {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50; /* Background color */
            color: white; /* Text color */
            border: 2px solid #4CAF50; /* Border color */
            border-radius: 30px; /* Rounded corners */
            text-decoration: none; /* Remove underline */
             }
  .oval-link:hover {
            background-color: white; /* Hover background color */
            color: #4CAF50; /* Hover text color */
        }
    </style>
</head>
<body>
    <a href="https://curlydesigner.com/#testimonials" class="oval-link">Testimonials</a>
</body>
</html>