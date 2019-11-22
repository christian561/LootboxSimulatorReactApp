import React from 'react'
import './MainApp.scss'
import MenuContainer from './MenuContainer'
import Inventory from './Inventory'
import NotificationDisplay from './NotificationDisplay'
import DevelopmentTestButtons from './DevelopmentTestButtons'
import VolumeSlider from './VolumeSlider'

function MainApp(props) {
return (
<div className="MainApp">
	
	<div id="bgOverlay"></div>
	<div class="fluid-container" id="mainContainer">
		<MenuContainer 
			upgradeHandler={props.upgradeHandler}  
			checkUpgrade={props.checkUpgrade}  
			changeKeys={props.changeKeys}
			changeReaperKeys={props.changeReaperKeys} 
        	insertInventoryItem={props.insertInventoryItem}
		/>
		
		<Inventory  
			removeInventoryItem={props.removeInventoryItem}
			checkUpgrade={props.checkUpgrade}  
            changeGold={props.changeGold}
            notify={props.notify}
            sellAll={props.sellAll}
		/>
	</div>
	{/*Notification Box*/}
	<NotificationDisplay />
	
	{/*<VolumeSlider />
	<div id="sketchHolder"></div>*/}
</div>
);
}
export default MainApp;