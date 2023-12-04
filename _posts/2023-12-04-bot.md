---
title: Deforum Discord Bot User Guide
date: 2023-12-04 12:14:27 -500
categories: [deforum, discord bot, user guide]
tags: [deforum,animation,bot,guide]
---

We're excited to have you on board to explore and experiment with the capabilities of our AI-driven animation bot.

> Anyone found to be intentionally creating NSFW content will be removed from the beta test and server. 
{: .prompt-danger }

## Getting Started

To initiate the AI animation process, use the command `/animate`. After adding your prompt, use the `⇥` (tab) key to navigate to the next box, where a menu will automatically appear. Once you select an option from the menu, the cursor will advance to the next box for your convenience.

## Navigation Instructions
`/animate` Type this command in the Discord chat to start the animation process.

`prompt` Enter the text or phrase you wish to animate.

`prompt_style` Use the Tab key to navigate to this box after entering your prompt. A menu will appear automatically to choose the prompt style.
(add a short explanation of prompt styles)

`motion_preset` After selecting the prompt style, the cursor will advance to this box, where a new menu will automatically show up for motion preset selection.

`aspect_ratio` After selecting the prompt style, the cursor will advance to this box, after choosing a motion preset. A new menu will appear containing the aspect ratio options: Square, Landscape, and Portrait.

This sequence allows precise customization of your AI-generated animations by navigating through each stage seamlessly. The bot's functionality is optimized for creating AI-powered animations based on text prompts. Experiment with different combinations of prompts, styles, motion presets, and aspect ratios for unique animations.

## Web App

After submitting your prompt, the bot sends a confirmation message acknowledging the reception of your animation request. A second message will be sent to your DMs when the animation process begins and you’ll see a 'Preview' button appear. Clicking this button redirects you to our dedicated web app designed for a comprehensive overview of the animation's development. The final video will be posted to the discord channel. 

> Make sure you have your discord privacy settings set to allow messages from this server.
{: .prompt-info }

**Progress Overview:** The web app provides an overview of the video's progress, detailing all generation settings. This includes the total wait time, generation time, chosen prompt, prompt style, and selected motion preset.

**Video Preview:** Users can view the ongoing progress of their animation frame by frame within the web app. You can also download individual frames. This allows for a detailed analysis of the animation's development. 

**Completed Preview:** The web app also displays a periodically updated video player, typically every 20 frames. This provides a smoother preview of the animation's progression.

**Final Video and Details:** Upon completion of the animation job, the final video is showcased within the web app. 

**Automatic Posting:** The completed video is automatically posted back to Discord for easy access.

By offering a detailed overview of the animation's progression and completion, including the settings used, progress status, and final video preview, the web app ensures an enhanced user experience and facilitates a clear understanding of the animation generation process.

## Prompt Styles
The available prompt styles are divided into two categories for convenient selection. The initial 25 prompt styles in the menu are:
- (None)
- 3D Model
- Digital Art
- Enhance
- Lowpoly
- Neon Punk
- Origami
- Photographic
- Pixel Art
- Cubist
- Graffiti
- Hyperrealism
- Pointillism
- Pop Art
- Psychedelic
- Surrealist
- Dreamscape
- Dystopian
- Grunge
- Horror
- Stained Glass
- Tribal
- Collage
- Paper Mache
- Papercut Style

## Additional Styles
As you start typing, additional styles become visible. Here's the list:

Analog Film, Anime, Cinematic, Comic Book,
Craft Clay, Fantasy Art, Isometric Style, Line Art, 
Texture, Advertising, Food Photography, Real Estate, 
Abstract, Impressionist, Renaissance, Steampunk, 
Typography, Watercolor, Fighting Game, GTA, 
Super Mario, Minecraft, Pokémon, Retro Arcade, 
Retro Game, RPG Fantasy Game, Strategy Game, 
Street Fighter, Legend of Zelda, Architectural, Disco, 
Fairy Tale, Gothic, Minimalist, Monochrome, 
Nautical, Space, Techwear Fashion, Zentangle, 
Flat Papercut, Kirigami, Paper Quilling, Papercut Collage, 
Papercut Shadow Box, Stacked Papercut, Thick Layered Papercut, 
Alien, Film Noir, HDR, Long Exposure, Neon Noir, Silhouette, Tilt-Shift.

## Motion Presets
- Classic-Zoom-In
- Classic-Zoom-Out
- Classic
- Evolve-Fast
- Evolve-Glitch
- Evolve-Glitch-2  NEW!
- Evolve-Pulse-2  NEW!
- Evolve-Pulse-Glitch  NEW!
- Evolve-Portal NEW!
- Evolve-Slow
- Evolve-Slow-2 NEW!
- Fly-Through 
- Fly-Through-2 NEW!
- Look-Around
- Move-Around
- Move-Float NEW!
- Move-In-Out
- Move-Warp
- Move-Warp-2 NEW!
- Quick-Change NEW!
- Revolve
- Scene-Change 
- Scene-Change-2 NEW!
- Swipe-Down NEW!
- X-Move-Down
- X-Move-Left
- X-Move-Right
- X-Move-Up 
- X-Shapes-Circles
- X-Shapes-Hexagons
- X-Shapes-Kaleidoscope
- X-Shapes-Squares
- X-Shapes-Stars
- X-Zoom-In-Out
- X-Zoom-To-New

To access the Xtra motion presets type X into the motion preset box and a new list will appear to get back to the original list delete the X. 

If you want to see examples of how the motion presets look you can use the discord search bar and type in the name of the preset you are looking for. 

## Advanced Prompting Options
### Using Negative Prompts
For more nuanced prompts, advanced users can employ negative prompts to guide AI generation. By appending --neg followed by your negative prompt, you can influence the direction or avoid specific themes within the output. 

Example: Cats eating sushi --neg dogs, cows, sheep
### Prompt Length and Discord Bot Limitations
When crafting prompts for Discord bot-generated animations, it's crucial to be mindful of the prompt's length. The Discord bot has a maximum prompt length limitation. Exceeding this limit may result in the failure of the generation process. Shorter, focused prompts are advisable for smoother and more successful bot-generated animations.


### Prompt Weights for Emphasis
Refine specific words or phrases within the prompt using parentheses. Elevate importance through extra parentheses, like (word) for marginal emphasis and ((word)) for extra emphasis.
### Manipulating Weight Values

Adjust emphasis by applying weight values within the parentheses. 
For instance:

(your prompt:1.5) increases emphasis of the default weight.
(your prompt:-.5) reduces emphasis of the default weight.


Example Prompts: 
(Cats eating sushi:1.3) on a beach being watched by dogs
          (((Cats eating sushi))) on a beach being watched by dogs

User Guidance: Experiment with varied weight values in prompts to assess their influence on the content generated. Altering weights influences the AI's focus, providing control over content without modifying the entire prompt.

For further assistance or inquiries, feel free to reach out to an Admin. Thank you for choosing Deforum AI Animation Bot for your creative endeavors!   
