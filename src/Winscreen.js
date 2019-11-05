import React from 'react'
class Winscreen extends React.Component{

	constructor(){
		super()

    	this.mainMenu = this.mainMenu.bind(this)
    	this.newGamePlus = this.newGamePlus.bind(this)
	}
	mainMenu(){
		this.props.sceneSwitch("Main Menu")
	}
	newGamePlus(){
		this.props.sceneSwitch("NewGamePlus")
	}
	render(){
		return(
			<div class="winScreenContainer">
				<h1>CONGRATULATIONS!!</h1>
				<h2>You saved the souls you were looking for</h2>
				<h3>Thanks so much for playing =)</h3>
				<button onClick={this.mainMenu}>Main Menu</button>
				<button onClick={this.newGamePlus}>Begin New Game (Plus)</button>
			</div>
		);
	}
}

export default Winscreen;