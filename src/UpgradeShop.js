import React from 'react'
import UserContext, { UserConsumer } from './UserContext'
import Upgrade from './Upgrade'
import UpgradesData from './UpgradesData'
import './UpgradeShop.scss'

class UpgradeShop extends React.Component{
  static contextType = UserContext

  render(){
    let unlockedUpgrades = this.context.upgrades
    let upgradeHandler = this.props.upgradeHandler
    let upgradeComponents = UpgradesData.map(function(upgrade){
console.log(unlockedUpgrades)
      //filter out empty template upgrades
      if(upgrade.Name != "" && upgrade.Name != null){
        //check if parentUpgradeID is unlocked, if unlocked show the shop item
       
          //hide all upgrades
          let hidden = true
          //show tier 1 upgrades
          if(upgrade.ParentUpgradeID == 0){
              hidden = false
          }
          //show 
          for(var i=0;i<unlockedUpgrades.length;i++){
            //show unlocked upgrades from tier2/god upgrade
            if(upgrade.ParentUpgradeID == unlockedUpgrades[i] ){
              hidden = false
            }
            //hide shop item if already purchased
            if(upgrade.UpgradeID == unlockedUpgrades[i]){
              hidden = true;
            }
          }
          
          console.log(upgrade.Name + " " + hidden)
          //don't render shop item if hidden
          if(hidden){
            return;
          }
        
        
        return <Upgrade 
                name={upgrade.Name} 
                description={upgrade.Description} 
                upgradeID={upgrade.UpgradeID} 
                parentID={upgrade.ParentUpgradeID}   
                cost={upgrade.cost}
                upgradeHandler={upgradeHandler}
            />
      }
    })
    console.log(upgradeComponents)
  	return(
  		<div className="shop col-sm-4">
        <div>
          <h2>Shop</h2>
          <ul id="shopList">
              {upgradeComponents}
          </ul>
        </div>
        <h3 className="cashCounter">${this.context.gold}</h3>
      </div>
  	);
  }
}

export default UpgradeShop;