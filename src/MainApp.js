import React from 'react'
import './MainApp.scss'
import MenuContainer from './MenuContainer'
import { UserProvider } from './UserContext'
import { EffectsProvider } from './EffectsContext'
import Inventory from './Inventory'
import NotificationDisplay from './NotificationDisplay'
import DevelopmentTestButtons from './DevelopmentTestButtons'
import VolumeSlider from './VolumeSlider'

function MainApp(props) {
return (
<div className="MainApp">
	<div id="bgOverlay"></div>
	<div class="fluid-container" id="mainContainer">
	<UserProvider value={props.data}>
		<MenuContainer 
			trash={props.trash}
			upgrades={props.upgrades}
			upgradeHandler={props.upgradeHandler}  
			checkUpgrade={props.checkUpgrade}  
			changeKeys={props.changeKeys}
			changeReaperKeys={props.changeReaperKeys} 
        	insertInventoryItem={props.insertInventoryItem}
          	changeLootboxesOpened={props.changeLootboxesOpened}
          	countItemsByGrade={props.countItemsByGrade}
			removeInventoryItemsByGrade={props.removeInventoryItemsByGrade}
            notify={props.notify}
            getSoulUpgradeCount={props.getSoulUpgradeCount}
            unlockSoulUpgrade={props.unlockSoulUpgrade}
		/>
		
      </UserProvider>
		
			<Inventory  
				inventory={props.inventory}
        		scrap={props.scrap}
				drunk={props.data.drunk}
				valueMultiplier={props.data.valueMultiplier}
				newGamePlusLevel={props.data.newGamePlusLevel}
				removeInventoryItem={props.removeInventoryItem}
				checkUpgrade={props.checkUpgrade}  
	            changeGold={props.changeGold}
	            notify={props.notify}
			/>
		
	</div>
	{/*Notification Box*/}

	<NotificationDisplay notifications={props.data.notifications}/>
	
	{/*<VolumeSlider />
	<div id="sketchHolder"></div>*/}
</div>
);
}
export default MainApp;