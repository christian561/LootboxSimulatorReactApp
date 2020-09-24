import React from 'react'
import BoxData from './BoxData'
import LootboxMenuHeader from './LootboxMenuHeader'
import UserContext, { UserConsumer } from './UserContext'
import Lootbox from './Lootbox.js'
import BackgroundsData from './BackgroundsData'

class LootboxMenu extends React.Component{

	//static contextType = UserContext
	constructor(props){
		super(props)
		this.state = {
			//lootboxComponents : this.getLootboxComponents()
		}
		
		this.getUpgradeStyle = this.getUpgradeStyle.bind(this)
		this.getUpgradeColor = this.getUpgradeColor.bind(this)
		
	}
	//static contextType = UserContext
	// componentDidMount(){
	
	getUpgradeStyle(){
		//find what tier
		if (this.props.checkUpgrade(9)){
			//immortal box upgrade is unlocked code here
			return BackgroundsData[4].src
		}
		else if (this.props.checkUpgrade(19)){
			//2 box upgrades is unlocked code here
			return BackgroundsData[2].src
		}
		else if(this.props.checkUpgrade(2)){
			//1 box upgrade is unlocked code here
			return BackgroundsData[1].src
		}
		else{
			//0 box upgrades is unlocked code here
			return BackgroundsData[0].src
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
	
	// }
	render(){
		
		let lootboxComponents = BoxData.map((box)=>{
			if(this.props.checkUpgrade(box.parentUpgradeID)){
				return <Lootbox 
							key={box.name}
							data={box}  
							changeKeys={this.props.changeKeys} 
							changeReaperKeys={this.props.changeReaperKeys} 
							changeLootboxesOpened={this.props.changeLootboxesOpened}
							insertInventoryItem={this.props.insertInventoryItem} 
							includeReaperShards={this.props.checkUpgrade(16)}
							includeSoulsShards={this.props.checkUpgrade(16)}
							showAddSoulsButton={this.props.checkUpgrade(16)}
							countItemsByGrade={this.props.countItemsByGrade}
							removeInventoryItemsByGrade={this.props.removeInventoryItemsByGrade}
          					notify={this.props.notify}
          					souls={this.props.getSoulUpgradeCount(box.name)}
          					keys={this.props.keys}
					        speedMultiplier={this.props.speedMultiplier}
					        valueMultiplier={this.props.valueMultiplier}
					        luckMultiplier={this.props.luckMultiplier}
					        newGamePlusLevel={this.props.newGamePlusLevel}
					        drunk={this.props.drunk}
          					unlockSoulUpgrade={this.props.unlockSoulUpgrade}
          					refill={this.props.refill}
        				/>
			}
		})
		
		var style = {
			    backgroundImage: "url("+this.getUpgradeStyle()+")",
			    backgroundSize: this.getUpgradeStyle() === BackgroundsData[4].src ? 'cover' : 'auto',
			    // border:"1px solid " + this.getUpgradeColor(),
			    boxShadow:"rgb(98, 74, 48) 0px 0px 9px inset " + this.getUpgradeColor(),

    
		}
		let color = this.getUpgradeColor()
		return(
			
			<div class="menu col-lg-8" style={style}>
			{/*Menu*/}
				<LootboxMenuHeader 
					key={"LootboxMenuHeader"}
					keys={this.props.keys} 
          			reaperKeys={this.props.reaperKeys}
					checkUpgrade={this.props.checkUpgrade} 
  					getUpgradeStyle={this.getUpgradeStyle()} 
  					color={color}

  				/>
		      <div class="row">
		        {/*Spacer*/}
		        <div class="col-sm-1"></div> 
		        {/*Open Box Button*/}

		        {/*Loot Roll Display*/}
		        {/*manually remount lootboxes to refill the items in each box when new items are added*/}
		        {lootboxComponents}
		        {/*Spacer*/}
		        <div class="col-sm-1"></div>
		      </div> 
	        </div>
		      
		);
	}
}

export default LootboxMenu;