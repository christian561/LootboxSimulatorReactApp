import React from 'react'
import BoxData from './BoxData'
import ItemDescription from './itemDescription'
class InventoryItem extends React.Component{
	
	constructor(props){

		super(props)
		let classes=""
		if(this.props.isLastItem){
			classes = "tickerItems bagItems bagAnimation " + this.props.grade 
		}
		else{
			classes = "tickerItems bagItems " + this.props.grade
		}
		
		//setstate with item info
		let matchID=this.props.id
		let item=""
		
		
		//searches boxdata for matching ID and returns that item's info
		for(var i=0;i<BoxData.length;i++){
			for(var j=0;j<BoxData[i].items.length;j++){
				if(Number(matchID) === Number(BoxData[i].items[j].id)){
					//box = BoxData[i]
					item =  BoxData[i].items[j]
					
				    
					break;
				} 
			}
		}
		this.state={
	      classes:classes,
	      item:item
	    }
    	this.sell = this.sell.bind(this)
    	this.removeIntoBagAnimation = this.removeIntoBagAnimation.bind(this)
    	this.abbreviateNumber = this.abbreviateNumber.bind(this)
	}
	sell(){
		this.props.removeInventoryItem(this.props.key1)
		//console.log(this.props.key1)
	}
	removeIntoBagAnimation(){
		//only play this animation one time by removing the animation class
		const timer = setTimeout(() => {this.setState({ classes: "tickerItems bagItems "})}, 500);
    	return () => clearTimeout(timer);
	}
	abbreviateNumber(number){
		let len = Math.ceil(Math.log10(number + 1));
		if(len < 4){
			return number;
		}
		else{
					
			switch(len){
				case 4:
					number = (number/Math.pow(10,3)).toFixed(1)+"k"
					break;
				case 5: case 6:
				number = (number/Math.pow(10,3)).toFixed(0)+"k"
				break;
				case 7: 
					number = (number/Math.pow(10,6)).toFixed(1)+"Mil"
					break;
				case 8: 
					number = (number/Math.pow(10,6)).toFixed(0)+"Mil"
					break;
				case 9:
					number = (number/Math.pow(10,6)).toFixed(0)+"M"
					break;
				case 10:
					number = (number/Math.pow(10,9)).toFixed(1)+"Bil"
					break;
				case 11: 
					number = (number/Math.pow(10,9)).toFixed(0)+"Bil"
					break;
				case 12:
					number = (number/Math.pow(10,9)).toFixed(0)+"B"
					break;
			}

			return number;
		}
	}
	componentDidMount(){
		this.removeIntoBagAnimation()

		
	}
	
	render(){
		
		//adds classes. adds color based on grade
		
		let drunk = this.props.drunk ? "drunk" : ""
		//console.log(drunk)
		let randomTiming = parseInt(Math.floor(Math.random() * 8)+1)
		let animationDuration = {"animation-duration": randomTiming + 's'}
		let value = Math.round(this.props.value*this.props.valueMultiplier)
		let sellText = this.props.grade == "F" ? "SCRAP" : "SELL"

		return(
			<div class={this.state.classes + " " + this.props.grade}  >
			{this.props.copies > 1 ? <span class="notificationBubble "> {this.props.copies} </span>: null}
			<p>{this.state.item.Name}</p>
			<img src={"https://www.christianlong.design/assets/LootboxSimulator/" + this.state.item.Name + ".gif"} class={drunk} alt=""  style={animationDuration}></img>
			<ItemDescription description={this.state.item.Description} key1={this.props.key1}/>
			<span style={{display:"none"}}>Good Condition</span>
			{Number.isInteger(value) ? 
				<><h6 class="white">Sells for </h6>
				<h3 class="white">{this.abbreviateNumber(value)}</h3>
				<button onClick={this.sell} class="sellButton button">
					{sellText}
				</button>
				</>
			:""}
			</div>
		);
	}
}

export default InventoryItem