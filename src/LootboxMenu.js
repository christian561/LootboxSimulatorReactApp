import React from 'react'
import BoxData from './BoxData'
import LootboxMenuHeader from './LootboxMenuHeader'
import UserContext, { UserConsumer } from './UserContext'
import Lootbox from './Lootbox.js'

class LootboxMenu extends React.Component{
	// constructor(){
	// 	super()

	// 	this.state ={
	//       lootboxComponents:[]
 //    	}
	// }
	static contextType = UserContext
	// componentDidMount(){
		
		
	// }
	render(){
		var lootboxComponents = BoxData.map((box)=>{
			if(this.props.checkUpgrade(box.parentUpgradeID)){
				return <Lootbox 
							data={box}  
							changeKeys={this.props.changeKeys} 
							insertInventoryItem={this.props.insertInventoryItem} 
        				/>
			}
		})
		
		return(
			
			<div class="menu col-sm-8">
			{/*Menu*/}
				<LootboxMenuHeader keys={this.props.keys}/>
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