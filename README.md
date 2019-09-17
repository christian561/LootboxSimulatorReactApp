# LootboxSimulatorReactApp
This is a personal project for a game. It is a lootbox "simulator" game. You buy keys with money earned from opening lootboxes to open more lootboxes. 

I originally built this in a codepen, so 1 html, 1 scss, a single thousand line js file. Not the best organization there. I learned react and thought it would be a nice a way to not only organize, but use react's state to manage the player's data as I didn't come up with a bug free way to do this on my own. My original system of saving player data to local storage worked until duplicate items started showing up when you clicked on a lot of things at once, because it would update the local storage but if two things did that at the same time they would overwrite eachother's changes. This could be solved using react and saves me from reinventing the wheel.
