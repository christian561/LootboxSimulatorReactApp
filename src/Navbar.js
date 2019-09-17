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
function NavBar(){

	

	return(
		<div id="navBar" style={styles}>
			<div id="image"></div>
			<ul>
				<li>
					<img src={logo} className="App-logo navLogo" alt="logo" />
				</li>
				<li><a href="https://google.com" target="_blank">Add Task</a></li>
				<li><a href="https://facebook.com" target="_blank">Reset List</a></li>
				<li><a href="https://www.christianlong.design" target="_blank">About the Dev</a></li>
			</ul>
		</div>
	);
}

export default NavBar;