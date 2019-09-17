import React from 'react'
import LootboxMenu from './LootboxMenu'
import UpgradeShop from './UpgradeShop'

function MenuContainer(props){
	return(
		<div class="row firstRow">

		  	<UpgradeShop />
		    
			    
			<LootboxMenu />
	       
	    </div>
	);
}

export default MenuContainer;