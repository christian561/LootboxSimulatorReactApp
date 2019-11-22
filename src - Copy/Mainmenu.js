import React from 'react'
import './mainmenu.scss'
import { ReactComponent as Background } from './assets/backgroundIntro.svg';

import { ReactComponent as Text1 } from './assets/mainMenuText1.svg';
import { ReactComponent as Text2 } from './assets/mainMenuText2.svg';
class Mainmenu extends React.Component{

	constructor(){
		super()

    	this.newGame = this.newGame.bind(this)
    	this.continueGame = this.continueGame.bind(this)
	}
	newGame(){
		this.props.sceneSwitch("Game")
	}
	continueGame(){
		this.props.sceneSwitch("ContinueGame")
	}
	render(){
		return(
		<div class="MainMenuContainer">
		<span>
			<div id='svgBackgroundContainer'>
					<div id='gradientOverlay'></div>
					<div id='treeBackground'>
						<Background />
					</div>
				</div>
<div id='mainMenuTextContainer'>
	<div class="MainMenu">
		<Text1 />
		<Text2 />
		
		<div id="buttonContainer">
			<button onClick={this.newGame}>New Game</button>
			{window.localStorage.getItem("playerData") !== null ?
			<button onClick={this.continueGame}>Continue</button> :<></>}
		<div id='rainbowOverlayMainMenu'></div>
			
		</div>
	</div>	
</div>
</span>
		
		</div>
	);}
}

export default Mainmenu;