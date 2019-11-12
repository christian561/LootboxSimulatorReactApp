import React from 'react'
import './instructions.scss'

function Instructions(props){
	return(
		<div class="instructions container-fluid layer1">
			<div class="title">

			<h1>Instructions</h1>
			<button  onClick={props.toggleInstructions} ><div></div></button>
			</div>

			<hr />
			<section class="infoContainer layer2" id="gameplayInstructions">
			<ul>
				<li><h4>Purchase Box Keys to be able to open lootboxes</h4></li>
				<li><h4>Open lootboxes to win items, and you can sell items for money</h4></li>
				<li><h4>Buy upgrades to progress through the story to grow powerful enough to summon the Reaper</h4></li>
				<li><h4>Get the Reaper to find five of the lost souls to be able to win the game.</h4></li>
				
			</ul>
			</section>	
			<hr />
			<div class="row infoRow layer2">
				<section class="col-lg-3  infoContainer layer3" id="gradeInformation">	
				<h1>Item Rarities</h1>
				<h6>Click below for Info</h6>
				<hr />
					<ul>
						<li class="A infoContainer"><h3><span>A</span>Legendary</h3><div class="Areduced subInfo"><p>Legendary Items are worth the most of any items. Find one of these and you are rich! Sought after by the gods.</p></div></li>
						<li class="B infoContainer"><h3><span>B</span>Epic</h3><div class="Breduced subInfo"><p></p></div></li>
						<li class="C infoContainer"><h3><span>C</span>Rare</h3><div class="Creduced subInfo"><p></p></div></li>
						<li class="D infoContainer"><h3><span>D</span>Common</h3><div class="Dreduced subInfo"><p>You might be breaking even selling these. Sometimes worth less than Trash, at least you can recycle Trash.</p></div></li>
						<li class="F infoContainer"><h3><span>F</span>Trash</h3><div class="Freduced subInfo"><p>Worth nothing. Recycle into a new key with the Recycler or Hydraulic Press Upgrade. Upgrade, then Sell your Trash items to recycle them. </p></div></li>
					</ul>	
				</section>
				<section class="col-lg-3  infoContainer layer3" id="upgradeInformation">	
					<h1>Upgrade Details</h1>
					<h6>Click below for Info</h6>
					<hr />

					<ul>
						<li class="infoContainer"><h3>Value Multipliers</h3><div class="upgradeSubInfo subInfo"><p>Barter lessons and Fafnir's Tongue increase the amount of money you get from selling items.</p></div></li>
						<li class="infoContainer"><h3>Speed Multipliers</h3><div class="upgradeSubInfo subInfo"><p>Quick Roller Upgrades and Mercury's Treads decrease the time it takes to open a lootbox.</p></div></li>
						<li class="infoContainer"><h3>Recyling</h3><div class="upgradeSubInfo subInfo"><p>The Recycler Upgrade unlocks a 50% chance of receiving a free key when clicking sell on a trash item. The Key former will give you a key everytime. Having both doesn't stack.</p></div></li>
						<li class="infoContainer"><h3>Unlock Lootboxes</h3><div class="upgradeSubInfo subInfo"><p>Unlock Box Upgrades will unlock an entirely new lootbox. The more it costs, the better the items it will have! The Immortal Upgrade grants a free lootbox unlock.</p></div></li>
						<li class="infoContainer"><h3>King Kappa</h3><div class="upgradeSubInfo subInfo"><p>After unlocking King Kappa, He will refund you 20% of any money spent in the shop. A mail in Rebate, not a discount. </p></div></li>
						<li class="infoContainer"><h3>Demon Bag</h3><div class="upgradeSubInfo subInfo"><p>The Demon King will lend you his bag to help sell all your items. Pay $1000 to sell all your items in one click.</p></div></li>
						<li class="infoContainer"><h3>Reaper Sacrifice</h3><div class="upgradeSubInfo subInfo"><p>Unlocks the ability to summon the Reaper with Hellshards. All lootboxes will become corrupted with Hellshards. The Reaper has a chance to bring you a Soul.</p></div></li>
					</ul>	
				</section>
				<section class="col-lg-3  infoContainer layer3" id="tipsInformation">	
					<h1>Time Saving Tips</h1>
					<hr />

					<ul>
						<li class="infoContainer"><h3>Don't sell <span class="F">Trash</span> until you unlock the Recycler or Key Former.</h3></li>
						<li class="infoContainer"><h3>You will need 20 <span class="A">Legendaries</span> saved up, saving some early on is a good idea</h3></li>
						<li class="infoContainer"><h3>The lootboxes are in order of Lowest to Highest value of items </h3></li>
						
					</ul>	
				</section>
			</div>
		</div>
	)
}

export default Instructions