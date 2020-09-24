import React from 'react'
import UserContext, { UserConsumer } from './UserContext'
import LootboxMenu from './LootboxMenu'
import UpgradeShop from './UpgradeShop'
import BackgroundsData from './BackgroundsData'
import Inventory from './Inventory'
class MenuContainer extends React.Component{
	//get info from contextAPI
	static contextType = UserContext
	constructor(props){
    super(props)

    this.getUpgradeBackground = this.getUpgradeBackground.bind(this)
    this.getUpgradeColor = this.getUpgradeColor.bind(this)
    this.getBorderColors = this.getBorderColors.bind(this)
  }
  getBorderColors(){
    //find what tier
    let colors=["#e2a36e","#804a1e"]

    if (this.props.checkUpgrade(6)){
      //shop upgrade is unlocked code here
      colors=["#FFF","#8f8f8f"]
    }
      return colors
  }
  getUpgradeBackground(){
    //find what tier
    //console.log(BackgroundsData[4].src)
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
      let borderColors = this.getBorderColors()
      console.log(this.props.upgrades)
      let unlockedUpgrades = this.props.upgrades
    	let background = {"background":"url("+this.getUpgradeBackground()+")","border-top": "2px solid "+borderColors[0],"border-bottom": "2px solid" +borderColors[1]}
		return(
			<div class="row firstRow" style={background}>

			  	<UpgradeShop 

            trash={this.props.trash}
			  		gold={this.context.gold} 
            unlockedUpgrades={unlockedUpgrades}
            drunk={this.context.drunk}
			  		upgrades={this.Upgrades} 
			  		upgradeHandler={this.props.upgradeHandler}
					checkUpgrade={this.props.checkUpgrade}  
			  	/>
			    
				    
				<LootboxMenu 
					keys={this.context.keys}
          speedMultiplier={this.context.speedMultiplier}
          valueMultiplier={this.context.valueMultiplier}
          luckMultiplier={this.context.luckMultiplier}
          newGamePlusLevel={this.context.newGamePlusLevel}
          drunk={this.context.drunk} 
          refill={this.context.refill}
          upgrades={this.context.upgrades}
          reaperKeys={this.context.reaperKeys}
					checkUpgrade={this.props.checkUpgrade}  
					changeKeys={this.props.changeKeys}
          changeLootboxesOpened={this.props.changeLootboxesOpened}
          changeReaperKeys={this.props.changeReaperKeys} 
    			insertInventoryItem={this.props.insertInventoryItem}
          countItemsByGrade={this.props.countItemsByGrade}
        removeInventoryItemsByGrade={this.props.removeInventoryItemsByGrade}
          notify={this.props.notify}
          getSoulUpgradeCount={this.props.getSoulUpgradeCount}
          unlockSoulUpgrade={this.props.unlockSoulUpgrade}
				/>
		       
		    </div>
		);
	}
}
export default MenuContainer;