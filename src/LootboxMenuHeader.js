import React from 'react'
function LootboxMenuHeader(props){
	//console.log(props);
	let colorStyle = {"color":props.color, "text-shadow":props.color +" 0px 0px 3px"}
	let size = {"width":"30px"}
	return(
		
	      
	      
	        <div class="row menuHeader" style={colorStyle}>
	          
	          {props.checkUpgrade(16) ? 
	          	<>
	          	<div class="col-sm-1"></div>
	          		<h3 class="col-sm-3 keyCounter">{props.reaperKeys} Reaper Keys</h3>
	          		<h2 class="col-sm-4">Lootboxes</h2>
	          		<h3 class="col-sm-3 keyCounter">{props.keys} Keys </h3>
	          	<div class="col-sm-1"></div>
	          	</>:
	          	<>
				<div class="col-sm-4"></div>
	          		<h2 class="col-sm-4">Lootboxes</h2>
	          		<h3 class="col-sm-3 keyCounter"> {props.keys} Keys</h3>
	          	<div class="col-sm-1"></div>
	          	</>
	          }
	        </div>
	);
}

export default LootboxMenuHeader;