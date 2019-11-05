import React from 'react'
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
		<div class="MainMenu">
			<h1>Welcome to Lootbox Clicker</h1>
			<h2>GOAL: Find five lost souls and bring them home</h2>
			<ul>
				<li class="MainMenuli"><h3>Instructions: </h3></li>
				<li class="MainMenuli"><h3>Purchase keys(you start with 5 free keys) to spend on opening lootboxes</h3></li>
				<li class="MainMenuli"><h3>Open lootboxes to get items, which you can sell for money</h3></li>
				<li class="MainMenuli"><h3>Buy upgrades to progress through the story</h3></li>
				<li class="MainMenuli"><h3>Find the lost souls to win the game</h3></li>
			</ul>
			<button onClick={this.newGame}>New Game</button>
			{window.localStorage.getItem("playerData") !== null ?
			<button onClick={this.continueGame}>Continue</button> :<></>}
			</div>
		</div>
	);}
}

export default Mainmenu;