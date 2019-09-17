import React from 'react'

import LootboxMenuHeader from './LootboxMenuHeader'

function LootboxMenu(props){
	return(
		<div class="menu col-sm-8">
		{/*Menu*/}
			<LootboxMenuHeader />
	      <div class="row">
	        {/*Spacer*/}
	        <div class="col-sm-1"></div> 
	        {/*Open Box Button*/}

	        {/*Loot Roll Display*/}
	        
	        {/*Spacer*/}
	        <div class="col-sm-1"></div>
	      </div> 
        </div>
	      
	);
}

export default LootboxMenu;