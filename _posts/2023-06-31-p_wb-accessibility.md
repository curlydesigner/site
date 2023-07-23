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


### UX Size Guide and Accessibility
  

<br>

Accessibility is a significant impact on the user experience of players. 
Readability, text size, icons, touch target for actions, and spacing can affect the accessibility and usability of an interface. 
What I learned is the challenge of displaying a large amount of information that needs to appear on a small mobile gameplay, is very typical when designing for gaming. 
Therefore, I took the time to create guidelines and templates that can be followed to ensure optimal touch target usability. 
Text, images, icons, and other elements are clear and straightforward with considerable leveraging and ‘white space.’  
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

**Don’t** create actions and icons that are too small or too close to each other.
The distance and spacing between targets depend on the designed area but should take into consideration the largest finger size to prevent accidental touch.
By using smaller icons consider more spacing to prevent accidental touch
Elements that needs to touch each other needs to take into consideration the surrounding touch area
Elements have to be placed within the safety-marked area

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


But of course it is also all about being smart about the implementation of code to ensure a responsive design that can adapt to different screen sizes and optimize its layout, text, and icons dynamically based on the screen size and orientation of the device being used. Taking the time to talk through with developers about the technical solutions for Utilizing flexible layouts and consideration for elements to be inside the visual area of the screen. 

#### TEXTURES

When designing for Map territories, Textures can indeed play a crucial role in accessibility and easy identification, especially when it comes to colour blindness. 
By using textures, with the right visual contrast, patterns or gradients, it can provide tactile feedback to users with visual impairments. On a map it can help identify different territories or regions. 
For example rough texture could represent mountains, while a smooth texture could represent plains. 
Also consistent textures can represent different types of territories across various screens or components, users can quickly learn to associate specific textures with specific regions, making the map more intuitive and familiar to navigate.
It's important to strike a balance between aesthetics and usability.

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
