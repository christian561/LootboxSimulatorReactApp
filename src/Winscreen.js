import React from 'react'
import './winscreen.scss';
import { ReactComponent as SavedSoulText } from './assets/SavedSoulText.svg';
import { ReactComponent as Thanks } from './assets/Thanks.svg';
import { ReactComponent as Background } from './assets/background.svg';
class Winscreen extends React.Component{

	constructor(){
		super()

    	this.mainMenu = this.mainMenu.bind(this)

    	this.continueGame = this.continueGame.bind(this)

    	this.newGamePlus = this.newGamePlus.bind(this)
	}
	mainMenu(){
		this.props.sceneSwitch("Main Menu")
	}

	continueGame(){
		this.props.sceneSwitch("ContinueGame")
	}

	newGamePlus(){
		this.props.sceneSwitch("NewGamePlus")
	}
	render(){
		return(
			<span id="winScreenContainer">
				<span dangerouslySetInnerHTML={{__html: "\
<div id='clouds'>\
<marquee onmouseover='this.stop()' onmouseout='this.start()' direction='right'>\
<div id='svgContainer1'>\
  <svg id='cloud1' height='80%' viewBox='0 0 800 200' xmlns='http://www.w3.org/2000/svg' >\
    \
	<path d='M143,189c0,23.437 486,1 486,1c0,0 36.462,-1.249 35,-50c-1.184,-39.475 -32.239,-38.599 -36,-36c-3.761,2.599 9.904,-35 -35,-35c0,0 1.746,-33 -33,-33c0,0 -30.299,-1.086 -31,26c0,0 -1.543,-43 -43,-43c0,0 -40.543,3.538 -41,41c0,0 4.487,-49 -49,-49c0,0 -50,-4.736 -50,50c0,0 1.254,-35 -35,-35c0,0 -35,-1.462 -35,35c0,0 -46,-7.66 -46,46c0,0 -37,-5.65 -37,32c0,0 -29,-5.538 -29,29c0,0 -21,-2.437 -21,21Z' fill-rule='nonzero' fill='rgba(255,255,255,0.4)' stroke='transparent' >\
<animate dur='1s' repeatCount='indefinite' attributeName='d' values='M143,189c0,23.437 486,1 486,1c0,0 36.462,-1.249 35,-50c-1.184,-39.475 -32.239,-38.599 -36,-36c-3.761,2.599 9.904,-35 -35,-35c0,0 1.746,-33 -33,-33c0,0 -30.299,-1.086 -31,26c0,0 -1.543,-43 -43,-43c0,0 -40.543,3.538 -41,41c0,0 4.487,-49 -49,-49c0,0 -50,-4.736 -50,50c0,0 1.254,-35 -35,-35c0,0 -35,-1.462 -35,35c0,0 -46,-7.66 -46,46c0,0 -37,-5.65 -37,32c0,0 -29,-5.538 -29,29c0,0 -21,-2.437 -21,21Z;M143,189c-13.397,0.95 14.937,23.03 486,1c0,0 24.461,-5.128 29,-19c4.928,-15.061 6.253,-30.48 6,-31c-2,-4.112 8.904,-36 -36,-36c0,0 2.792,-37.437 -35,-35c0,0 3.03,-32.066 -33,-33c0,0 -30.964,-2.629 -31,26c0,0 -2.34,-44.523 -43,-43c0,0 -41.117,2.015 -41,41c0,0 4.604,-47.695 -49,-49c0,0 -46.812,-8.477 -52,50c0,0 3.376,-36.959 -35,-34c0,0 -30.736,-1.995 -35,34c0,0 -42.782,-7.878 -44,45c0,0 -38,-2.538 -38,32c-15.57,0.673 -42.299,3.438 -49,51Z;M143,189c0,23.437 486,1 486,1c0,0 36.462,-1.249 35,-50c-1.184,-39.475 -32.239,-38.599 -36,-36c-3.761,2.599 9.904,-35 -35,-35c0,0 1.746,-33 -33,-33c0,0 -30.299,-1.086 -31,26c0,0 -1.543,-43 -43,-43c0,0 -40.543,3.538 -41,41c0,0 4.487,-49 -49,-49c0,0 -50,-4.736 -50,50c0,0 1.254,-35 -35,-35c0,0 -35,-1.462 -35,35c0,0 -46,-7.66 -46,46c0,0 -37,-5.65 -37,32c0,0 -29,-5.538 -29,29c0,0 -21,-2.437 -21,21Z;' fill='freeze' \
      calcMode='spline'\
         keySplines='0.5 0.4 0.3 0.8; 0.5 0.3 0.4 0.8'></svg>\
  <svg id='cloud2' height='80%' viewBox='0 0 800 250' xmlns='http://www.w3.org/2000/svg' >\
	<path d='M143,189c0,23.437 486,1 486,1c0,0 36.462,-1.249 35,-50c-1.184,-39.475 -32.239,-38.599 -36,-36c-3.761,2.599 9.904,-35 -35,-35c0,0 1.746,-33 -33,-33c0,0 -30.299,-1.086 -31,26c0,0 -1.543,-43 -43,-43c0,0 -40.543,3.538 -41,41c0,0 4.487,-49 -49,-49c0,0 -50,-4.736 -50,50c0,0 1.254,-35 -35,-35c0,0 -35,-1.462 -35,35c0,0 -46,-7.66 -46,46c0,0 -37,-5.65 -37,32c0,0 -29,-5.538 -29,29c0,0 -21,-2.437 -21,21Z' fill-rule='nonzero' fill='rgba(255,255,255,0.4)' stroke='transparent' >\
<animate dur='0.9s' repeatCount='indefinite' attributeName='d' values='M143,189c0,23.437 486,1 486,1c0,0 36.462,-1.249 35,-50c-1.184,-39.475 -32.239,-38.599 -36,-36c-3.761,2.599 9.904,-35 -35,-35c0,0 1.746,-33 -33,-33c0,0 -30.299,-1.086 -31,26c0,0 -1.543,-43 -43,-43c0,0 -40.543,3.538 -41,41c0,0 4.487,-49 -49,-49c0,0 -50,-4.736 -50,50c0,0 1.254,-35 -35,-35c0,0 -35,-1.462 -35,35c0,0 -46,-7.66 -46,46c0,0 -37,-5.65 -37,32c0,0 -29,-5.538 -29,29c0,0 -21,-2.437 -21,21Z;M143,189c-13.397,0.95 14.937,23.03 486,1c0,0 24.461,-5.128 29,-19c4.928,-15.061 6.253,-30.48 6,-31c-2,-4.112 8.904,-36 -36,-36c0,0 2.792,-37.437 -35,-35c0,0 3.03,-32.066 -33,-33c0,0 -30.964,-2.629 -31,26c0,0 -2.34,-44.523 -43,-43c0,0 -41.117,2.015 -41,41c0,0 4.604,-47.695 -49,-49c0,0 -46.812,-8.477 -52,50c0,0 3.376,-36.959 -35,-34c0,0 -30.736,-1.995 -35,34c0,0 -42.782,-7.878 -44,45c0,0 -38,-2.538 -38,32c-15.57,0.673 -42.299,3.438 -49,51Z;M143,189c0,23.437 486,1 486,1c0,0 36.462,-1.249 35,-50c-1.184,-39.475 -32.239,-38.599 -36,-36c-3.761,2.599 9.904,-35 -35,-35c0,0 1.746,-33 -33,-33c0,0 -30.299,-1.086 -31,26c0,0 -1.543,-43 -43,-43c0,0 -40.543,3.538 -41,41c0,0 4.487,-49 -49,-49c0,0 -50,-4.736 -50,50c0,0 1.254,-35 -35,-35c0,0 -35,-1.462 -35,35c0,0 -46,-7.66 -46,46c0,0 -37,-5.65 -37,32c0,0 -29,-5.538 -29,29c0,0 -21,-2.437 -21,21Z;' fill='freeze' \
      calcMode='spline'\
         keySplines='0.5 0.4 0.3 0.8; 0.5 0.3 0.4 0.8'></svg>\
</div> </marquee>"}} />
				<div id='winScreenTextContainer'>
					<SavedSoulText />
					<Thanks />
					<div id="buttonContainer">
						<button onClick={this.mainMenu}>Main Menu</button>
						<button onClick={this.continueGame}>Continue Game</button>
						<button  id='newGamePlusBtn' onClick={this.newGamePlus}>Begin New Game (x{this.props.newGamePlusLevel*2} value)</button>
					<div id='rainbowOverlay'></div>
					</div>

				</div>

				<div id='svgWinBackgroundContainer'>
					<div id='gradientOverlay'></div>
					<div id='treeBackground'>
						<Background />
					</div>
				</div>
			</span>

		);
	}
}

export default Winscreen;