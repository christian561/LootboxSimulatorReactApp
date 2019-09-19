import React from 'react'

function LootboxMenuHeader(props){
	console.log(props);
	return(
		
	      
	      
	        <div class="row menuHeader">
	          <div class="col-sm-1"></div>
	          <h2 class="col-sm-8">Menu</h2>
	          <h3 class="col-sm-3 keyCounter">Keys: {props.keys}</h3>
	        </div>
	);
}

export default LootboxMenuHeader;