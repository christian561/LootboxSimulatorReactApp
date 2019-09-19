import React from 'react'
import UserContext, { UserConsumer } from './UserContext'
import BoxData from './BoxData'
class InventoryItem extends React.Component{

	//get info from contextAPI
	static contextType = UserContext

	render(){
		let matchID=this.props.id
		let item =""
		//searches boxdata for match ID and returns that item
		for(var i=0;i<BoxData.length;i++){
			for(var j=0;j<BoxData[i].items.length;j++){
				if(Number(matchID) == Number(BoxData[i].items[j].id)){
					item =  BoxData[i].items[j]
					break;
				} 
			}
		}
		
		//adds classes. adds color based on grade
		let classes="tickerItems bagItems " + this.props.grade
		return(
			<div class={classes} id="wonItem9" title={item.Description}>
			<p>{item.Name}</p>
			<img src=""></img>
			<span style={{display:"none"}}>Good Condition</span>
			<h6 class="white">Sells for </h6>
			<h3 class="white">{this.props.value*this.context.valueMultiplier}</h3>
			<button class="sellButton button" data-value="83" data-index="9">
				SELL
			</button></div>
		);
	}
}

export default InventoryItem