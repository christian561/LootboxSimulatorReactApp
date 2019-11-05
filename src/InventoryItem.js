import React from 'react'
import UserContext, { UserConsumer } from './UserContext'
import BoxData from './BoxData'
class InventoryItem extends React.Component{

	//get info from contextAPI
	static contextType = UserContext

	constructor(){
		super()

    	this.sell = this.sell.bind(this)
	}
	sell(){
		this.props.removeInventoryItem(this.props.key1)
		console.log(this.props.key1)
	}
	render(){
		let matchID=this.props.id
		let item =""
		let box =""
		//searches boxdata for matching ID and returns that item's info
		for(var i=0;i<BoxData.length;i++){
			for(var j=0;j<BoxData[i].items.length;j++){
				if(Number(matchID) == Number(BoxData[i].items[j].id)){
					box = BoxData[i]
					item =  BoxData[i].items[j]
					break;
				} 
			}
		}
		//adds classes. adds color based on grade
		
		let drunk = this.context.drunk ? "drunk" : ""
		let classes="tickerItems bagItems bagAnimation " + " " + this.props.grade 
		console.log(drunk)
		let randomTiming = parseInt(Math.floor(Math.random() * 8)+1)
		let animationDuration = {"animation-duration": randomTiming + 's'}
		let value = Math.round(this.props.value*this.context.valueMultiplier*this.context.newGamePlusLevel)
		return(
			<div class={classes}  id="wonItem9" title={item.Description}>
			<p>{item.Name}</p>
			<img src={item.src} class={drunk}  style={animationDuration}></img>
			<span style={{display:"none"}}>Good Condition</span>
			{Number.isInteger(value) ? 
				<><h6 class="white">Sells for </h6>
				<h3 class="white">{value}</h3>
				<button onClick={this.sell} class="sellButton button" data-value="83" data-index="9">
					SELL
				</button>
				</>
			:""}
			</div>
		);
	}
}

export default InventoryItem