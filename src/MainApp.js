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
	<div class="container" id="mainContainer">
		<MenuContainer upgradeHandler={props.upgradeHandler}/>
		
		<Inventory />
	</div>
	{/*Notification Box*/}
	<NotificationDisplay />
	
	{/*dev test buttons*/}
	<DevelopmentTestButtons />
	
	<VolumeSlider />
	<div id="sketchHolder"></div>
</div>
);
}
export default MainApp;