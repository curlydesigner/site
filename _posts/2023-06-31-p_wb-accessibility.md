---
layout: portfolio-post
title: WB 4X Game - Main HUD Navigation
published: true
tags: 
    - UX/UI Design
    - Human Behaviour
categories:
    - portfolio
    - portfolio-featured
    
permalink: /wb-hud
featured_image: /assets/posts/2023-06-31-p_wb-4x/wb_featureimage2.png

---


![ixd user flow](/assets/posts/2023-06-31-p_wb-4x/JourneyMAp.png "ixd user flow")
###### Player's Journey Map 

<br> 

### 4X GAME MAIN HUD NAVIGATION 


#### IXD | USER FLOW | INFO-ARCHITECTURE | SIZE GUIDE RECOMMENDATION | FUNCTIONALITY PROTOTYPE  

<br>

#### Overview:

<br>
- 
While working in WB Games I was involved in exploring Main HUD Navigation for a 4X strategy game. In this type of strategy game the focuse on four core gameplay elements: Explore, Expand, Exploit, and Exterminate.
These games often involve managing and growing an empire or civilization, exploring a game world, and making strategic decisions to achieve victory. 
In 4X games, the main screens typically include:

<br>

- A Map -  where players can see the entire game world and explore different tiles, castles and armies.
- Research Screen - The research screen is where players can select a tile and research, learn about a tile, take action and improve resource management and expanding an empire.
- Empire Management Screen - where players can manage their empire's resources, including food, production, and money. This screen allows players to build new structures and units, manage their city, dragons and make other strategic decisions.
- Combat Screen - is where players can engage in battles with other dragons. Players can deploy their fleets, manage their resources, and make tactical decisions. 
- Victory Screen - where players can view their progress towards victory conditions and see which dragons are leading the game. 
- Chat - where players can interact with other players and engage in diplomacy and trade. 

<br>

__________________________

#### Accessibility 

Accessibility is a significant impact on the user experience of players. 
Readability, text size, icons, touch target for actions, and spacing can affect the accessibility and usability of an interface. The challenge of displaying a large amount of information that needs to appear on a small mobile map,  gameplay,  means Navigation need to be simplified and clear from their layout and assessability. Therefore, I took the time to create guidelines and templates that can be followed to ensure optimal touch target usability. Text, images, icons, and other elements are clear and straightforward with considerable leveraging and ‘white space.’  
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

LABELS

Consistent Navigation labels - Easy to read and clear to understand with contextual visualization cues to help users understand where they are and where they can go next.


#### Tools Used 

-  Figma 
-  Adobe Illustrator
-  QuickTime Player 


<br>

#### Other projects:


- [Security Portal](/design-guidelines)
- [Onboarding screens](/empty-data)
- [BlackBerry Brand Packaging Guidelines](/bb-brand) 
- [BlackBerry Dark Theme](/dark-theme) 
