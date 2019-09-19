import React from 'react'
import logo from './logo.svg'
import './Navbar.css'


var hue = 0
var styles = {
		filter:" hue-rotate("+hue+"deg)",
		WebkitFilter:" hue-rotate("+hue+"deg)"

	}

function RotateColors(rotation){
	if(hue<359){
		hue += rotation
	}
	styles.filter = "hue-rotate("+hue+"deg)"
	styles.WebkitFilter = "hue-rotate("+hue+"deg)"
	return null
}
//hue-rotate css style function
	RotateColors(340)
function NavBar(props){

	

	return(
		<div id="navBar" style={styles}>
			<div id="image"></div>
			<ul>
				<li>
					<img src={logo} className="App-logo navLogo" alt="logo" />
				</li>

				<li><button onClick={props.save} >Save</button></li>
				<li><a href="https://google.com" target="_blank">Instructions</a></li>
				<li><a href="https://facebook.com" target="_blank">Reset Game</a></li>
				<li><a href="https://www.christianlong.design" target="_blank">Login</a></li>
			</ul>
		</div>
	);
}

export default NavBar;