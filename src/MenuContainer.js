import React from 'react'
import UserContext, { UserConsumer } from './UserContext'
import LootboxMenu from './LootboxMenu'
import UpgradeShop from './UpgradeShop'

class MenuContainer extends React.Component{
	//get info from contextAPI
	static contextType = UserContext
	
	render(){

		return(
			<div class="row firstRow">

			  	<UpgradeShop gold={this.context.gold} upgrades={this.Upgrades} upgradeHandler={this.props.upgradeHandler}/>
			    
				    
				<LootboxMenu keys={this.context.keys}/>
		       
		    </div>
		);
	}
}
export default MenuContainer;