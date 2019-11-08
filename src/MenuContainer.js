import React from 'react'
import UserContext, { UserConsumer } from './UserContext'
import LootboxMenu from './LootboxMenu'
import UpgradeShop from './UpgradeShop'
import BackgroundsData from './BackgroundsData'
import Inventory from './Inventory'
class MenuContainer extends React.Component{
	//get info from contextAPI
	static contextType = UserContext
	constructor(){
    super()

    this.getUpgradeBackground = this.getUpgradeBackground.bind(this)
    this.getUpgradeColor = this.getUpgradeColor.bind(this)
  }
  getUpgradeBackground(){
    //find what tier
    console.log(BackgroundsData[4].src)
    if (this.props.checkUpgrade(9)){
      //immortal shop upgrade is unlocked code here
      return BackgroundsData[6].src
    }
    else if (this.props.checkUpgrade(6)){
      //shop upgrade is unlocked code here
      return BackgroundsData[3].src
    }
    else{
      //no shop upgrades is unlocked code here
      return BackgroundsData[7].src
    }
  }
  getUpgradeColor(){
    //find what tier
    if (this.props.checkUpgrade(9)){
      //immortal box upgrade is unlocked code here
      return BackgroundsData[4].color
    }
    else if (this.props.checkUpgrade(19)){
      //2 box upgrades is unlocked code here
      return BackgroundsData[2].color
    }
    else if(this.props.checkUpgrade(2)){
      //1 box upgrade is unlocked code here
      return BackgroundsData[1].color
    }
    else{
      //0 box upgrades is unlocked code here
      return BackgroundsData[0].color
    }
  }
	render(){

    	let background = {"background":"url("+this.getUpgradeBackground()+")"}
		return(
			<div class="row firstRow" style={background}>

			  	<UpgradeShop 
			  		gold={this.context.gold} 
			  		upgrades={this.Upgrades} 
			  		upgradeHandler={this.props.upgradeHandler}
					checkUpgrade={this.props.checkUpgrade}  
			  	/>
			    
				    
				<LootboxMenu 
					keys={this.context.keys}
					checkUpgrade={this.props.checkUpgrade}  
					changeKeys={this.props.changeKeys}
          changeReaperKeys={this.props.changeReaperKeys} 
    			insertInventoryItem={this.props.insertInventoryItem}
				/>
		       
		    </div>
		);
	}
}
export default MenuContainer;