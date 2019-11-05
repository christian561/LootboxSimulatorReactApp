import React from 'react'
import BoxData from './BoxData'
import LootboxMenuHeader from './LootboxMenuHeader'
import UserContext, { UserConsumer } from './UserContext'
import Lootbox from './Lootbox.js'
import BackgroundsData from './BackgroundsData'

class LootboxMenu extends React.Component{
	constructor(){
		super()

		
		this.getUpgradeStyle = this.getUpgradeStyle.bind(this)
		this.getUpgradeColor = this.getUpgradeColor.bind(this)
	}
	static contextType = UserContext
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
		var lootboxComponents = BoxData.map((box)=>{
			if(this.props.checkUpgrade(box.parentUpgradeID)){
				return <Lootbox 
							data={box}  
							changeKeys={this.props.changeKeys} 
							changeReaperKeys={this.props.changeReaperKeys} 
							insertInventoryItem={this.props.insertInventoryItem} 
							includeReaperShards={this.props.checkUpgrade(16)}
							includeSoulsShards={this.props.checkUpgrade(16)}
        				/>
			}
		})
		
		console.log(this.getUpgradeStyle())
		let background = {"background":"url("+this.getUpgradeStyle()+")","background-size": "cover"}
		let color = this.getUpgradeColor()
		return(
			
			<div class="menu col-lg-8" style={background}>
			{/*Menu*/}
				<LootboxMenuHeader 
					keys={this.context.keys} 
          			reaperKeys={this.context.reaperKeys}
					checkUpgrade={this.props.checkUpgrade} 
  					getUpgradeStyle={this.getUpgradeStyle()} 
  					color={color}
  				/>
		      <div class="row">
		        {/*Spacer*/}
		        <div class="col-sm-1"></div> 
		        {/*Open Box Button*/}

		        {/*Loot Roll Display*/}
		        {lootboxComponents}
		        {/*Spacer*/}
		        <div class="col-sm-1"></div>
		      </div> 
	        </div>
		      
		);
	}
}

export default LootboxMenu;