import React from 'react'
function LootboxMenuHeader(props){
	console.log(props);
	let colorStyle = {"color":props.color, "text-shadow":props.color +" 0px 1px 4px"}
	return(
		
	      
	      
	        <div class="row menuHeader" style={colorStyle}>
	          <div class="col-sm-1"></div>
	          <h2 class="col-sm-8">Menu</h2>
	          <h3 class="col-sm-3 keyCounter">Keys: {props.keys}</h3>
	        </div>
	);
}

export default LootboxMenuHeader;