---
layout: portfolio-post
title: Accessibility Size Guide
published: true
tags: 
    - UX/UI Design
    - Human Behaviour
    - Gaming & IxD
categories:
    - portfolio
    - portfolio-featured
    
permalink: /wb-accessibility
featured_image: /assets/posts/2023-06-31-p_wb-4x/featureimage2.png

---


### UX Size Guide and Accessibility in Gaming
  

<br>

Accessibility plays a crucial role in enhancing the overall user experience for gamers. Elements such as readability, text size, icon design, touch targets for in-game actions, and spacing have a direct impact on the accessibility and usability of a gaming interface. 
<br>
I've come to understand that one of the common challenges in game design is presenting a vast amount of information within the constraints of a small mobile screen. To address this challenge, I dedicated time to develop comprehensive guidelines and templates that can be followed to ensure the optimal usability of touch targets. This includes ensuring that text, images, icons, and other elements are presented clearly and intuitively, while making effective use of "white space" to provide a visually balanced and user-friendly experience for all gamers. 
<br>
<br> 


![touch target](assets/posts/2023-06-31-p_wb-4x/wb_target.png "touch target")
###### The ideal target size for most users is around 48-50px in width and height. The minimum target size for a mobile screen button (for players using an index finger) should be at least 45x45px in width and height. But for some, this size might cover the visibility of the entire target. For players who are using their Thumb, 72px is the target area.
<br>


The ideal target size for most users is around 48-50px in width and height.
The minimum target size for a mobile screen button (for players using an index finger) should be at least 45x45px in width and height. But for some, this size might cover the visibility of the entire target.
For players who are using their Thumb, 72px is the target area.
<br>

______________________

#### NOT ACCESSIBLE EXAMPLES

I've noticed that many strategy mobile games have very small touch targets and actions that are placed too close to each other. 
<br>
Remember! <br>
**Don't** create actions and icons that are too small or too close to each other.
<br>

- The distance and spacing between targets depend on the designed area, and the largest finger size should be considered to prevent accidental touch.
- By using smaller icons, consider more spacing to prevent accidental touch
- Elements that need to touch each other need to take into consideration the surrounding touch area
- Elements have to be placed within the safety-marked area.

![dont](assets/posts/2023-06-31-p_wb-4x/G_tilemap_dont1.png "dont")
###### Not accessible example; don't create actions and icons that are too small or too close to each other.

<br>

_____________________

#### GOOD EXAMPLES

The design should be adapted for optimal screen size. Make sure actions are large enough and spaced out for reliable interaction. Different screen sizes may have convenient and hard-to-reach areas for tapping.
This is why bottom side buttons should be adapted for maximum thumb-finger size tap.
Targets that are frequently used or critical to the functionality should be placed within easy reach and should be larger than less important targets.

<br>

![dont](assets/posts/2023-06-31-p_wb-4x/G_tilemap_THUMBS.png "dont")
###### Elements on the side of the screen should be considered as a larger tappble area for thumb size fingers and placed within the safety-marked area. 

![dont](assets/posts/2023-06-31-p_wb-4x/G_tilemap_bf2.png "dont")
###### Icons in the middle of screen could be designed smaller for index size finger

![dont](assets/posts/2023-06-31-p_wb-4x/G_tilemap_bf1.png "dont")
###### Bottom side buttons should be adapted for maximum thumb-finger size tap.


The ideal tappable action menu size 48px plus 24px (minimum) space to get 72px finger target area.
Most important action located on the side adapted for thumbs size 72x72px
Bottom menu action items on a tile map should display not more then 3-4 most important actions, plus two larger side actions.

Calcualtion of maximum element sthat could fit into the screeen and its placement. 


![safety](assets/posts/2023-06-31-p_wb-4x/size-guide.png "safety")
###### Elements on the side of the screen should be considered as a larger tappble area for thumb size fingers and placed within the safety-marked area. 


However, it's equally vital to approach code implementation intelligently to guarantee a responsive design capable of adapting seamlessly to various screen dimensions. This adaptability extends to optimizing layout, text, and icons dynamically, depending on the device's screen size and orientation. Engaging in thoughtful discussions with developers to explore technical solutions that incorporate flexible layouts and ensure that essential elements remain within the screen's visible area is a key step in achieving this goal."

<br>

#### TEXTURES

Designing for 4X games, where map territories and textures hold pivotal roles in accessibility and ease of identification, particularly for individuals with color blindness, the choice of textures becomes paramount. Well-implemented textures, boasting the right visual contrast, patterns, or gradients, can offer tactile feedback to users with visual impairments. These textures, when thoughtfully applied on a map, serve as valuable cues for distinguishing different territories or regions. 

Being involved in textured exploration, as we know it from nature, incorporating a rough texture might signify a mountainous landscape, while a smooth surface could symbolize expansive plains. Consistency in applying these textures across various screens or components allows users to swiftly associate specific textures with particular regions. This familiarity and intuitive connection enhance the map's navigability.

However, it's crucial to strike a delicate balance between aesthetics and usability. While textures can greatly contribute to accessibility, they should complement the overall visual appeal of the game UI without overwhelming itthe player. This harmonious fusion of aesthetics and usability ensures an engaging and inclusive gaming experience for all players.

<br>

#### LABELS - How important are they ? 


- Labels help organize content, making it easier for users to locate specific information or navigate through. Consistent Navigation with labels may be helpful. With easy-to-read and clear-to-understand contextual visualization, cues can help users understand where they are and where they can go next.
- Labels next to buttons and icons describe their functions explicitly. This is beneficial for all users, including those with cognitive impairments or those who are not familiar with certain symbols or iconography.
- Also, labels provide essential information to screen readers and assistive technologies, enabling users with visual impairments to understand and interact with digital content. When elements are appropriately labeled, screen readers can announce the labels aloud, allowing users to navigate and access the content effectively.
- Without labels, users may struggle to understand what information is expected in each field, leading to errors and frustration.
- Labels play a role in providing clear error messages when something goes wrong. This is crucial for users to identify the problem and take appropriate action to correct it.

I learned that incorporating labels is an essential aspect of accessible design, regardless of the user's abilities or disabilities. Labels contribute to a more inclusive and user-friendly experience, making it easier for everyone to access and engage with digital interfaces and information.


<br>

#### Other projects:

- [WB HUD Global Navigation](/wb-hud)
- [Security Portal](/design-guidelines)
- [Onboarding screens](/empty-data)
- [BlackBerry Brand Packaging Guidelines](/bb-brand) 
- [BlackBerry Dark Theme](/dark-theme) 
