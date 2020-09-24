import React from 'react'
import Upgrade from './Upgrade'
import UpgradesData from './UpgradesData'
import Trash from './Trash'
import './UpgradeShop.scss'

class UpgradeShop extends React.Component{
 
  constructor(props){
       super(props)
    }

  render(){
    console.log(this.props.upgrades)
    let unlockedUpgrades = this.props.unlockedUpgrades
    let upgradeHandler = this.props.upgradeHandler
     let drunk = this.props.drunk
    let upgradeComponents = UpgradesData.map(function(upgrade,index){

      //filter out empty template upgrades
      if(upgrade.Name != "" && upgrade.Name != null){
        //check if parentUpgradeID is unlocked, if unlocked show the shop item
       
          //hide all upgrades
          let hidden = true
          //show tier 1 upgrades
          if(upgrade.ParentUpgradeID == 0 ){
              hidden = false
          }
          //show 
          for(var i=0;i<unlockedUpgrades.length;i++){
            //show unlocked upgrades from tier2/god upgrade
            if(upgrade.ParentUpgradeID == unlockedUpgrades[i] ){
              hidden = false
            }
            //hide shop item if already purchased
            if(upgrade.UpgradeID == unlockedUpgrades[i] && upgrade.UpgradeID != 7){
              hidden = true;
            }
          }
          //always show this upgrade
          if(upgrade.UpgradeID == 1 ){
              hidden = false
          }
          //console.log(upgrade.Name + " " + hidden)
          //don't render shop item if hidden
          if(hidden){
            return;
          }
        
        
        return <Upgrade
                key={upgrade.UpgradeID}
                drunk={drunk}
                key1={index}
                name={upgrade.Name} 
                description={upgrade.Description} 
                upgradeID={upgrade.UpgradeID} 
                parentID={upgrade.ParentUpgradeID}   
                cost={upgrade.cost}
                upgradeHandler={upgradeHandler}
            />
      }
    })
    
    let titleClass = this.props.checkUpgrade(6) ? "shopTier2" : "shopTier1"
    let moneyClass = this.props.checkUpgrade(6) ? "shopTier2money" : "shopTier1money"
  	return(
  		<div className="shop col-lg-4 ">
        <div>
          <h2 className={titleClass}>Shop</h2>
          <ul id="shopList">
              {upgradeComponents}
          </ul>
        </div>
        <h2 className={"cashCounter " + moneyClass}>{Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
.format(Math.round(this.props.gold)).split(".")[0]}</h2>
        <Trash trashContents={this.props.trash}/>
      </div>
  	);
  }
}

export default UpgradeShop;