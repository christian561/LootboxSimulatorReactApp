import React from 'react'
function LootboxMenuHeader(props){
	console.log(props);
	let colorStyle = {"color":props.color, "text-shadow":props.color +" 0px 0px 3px"}
	return(
		
	      
	      
	        <div class="row menuHeader" style={colorStyle}>
	          
	          {props.checkUpgrade(16) ? 
	          	<>
	          	<div class="col-sm-1"></div>
	          		<h3 class="col-sm-3 keyCounter">Reaper Keys: {props.reaperKeys}</h3>
	          		<h2 class="col-sm-4">Menu</h2>
	          		<h3 class="col-sm-3 keyCounter">Keys: {props.keys}</h3>
	          	<div class="col-sm-1"></div>
	          	</>:
	          	<>
				<div class="col-sm-4"></div>
	          		<h2 class="col-sm-4">Menu</h2>
	          		<h3 class="col-sm-3 keyCounter">Keys: {props.keys}</h3>
	          	<div class="col-sm-1"></div>
	          	</>
	          }
	        </div>
	);
}

export default LootboxMenuHeader;