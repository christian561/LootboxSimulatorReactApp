import React from 'react'
import InventoryItem from './InventoryItem'
import UserContext, { UserConsumer } from './UserContext'

class Inventory extends React.Component{

	//get info from contextAPI
	static contextType = UserContext
	constructor(){
		super()

		
	}

	render(){
		let removeInventoryItem = this.props.removeInventoryItem
		let inventoryItems = this.context.inventory
		let key=-1
		let inventoryItemComponents = inventoryItems.map(function(item){
			key++
			
			return <InventoryItem 
						key1={key} 
						id={item.id} 
						grade={item.grade} 
						value={item.value}
						removeInventoryItem={removeInventoryItem}
       				/>
			
		})
		let disabledStyle = (this.context.gold >= 1000 ? {"backgroundColor":"green",borderColor:"lime"}:{"backgroundColor":"red",borderColor:"#D52B06"})
		
		return(
		
		  <div class="row">
		    {/*Bag Inventory*/}
		    <div class="bagContainer">
		    <div class="bag col-sm-12">
			{/*       <h2>Bag</h2>     */}
		      
		      <div class="inventory container-fluid">
		        {inventoryItemComponents}
		      </div>

		      {this.props.checkUpgrade(15) ? <button className="sellAllButton" onClick={this.props.sellAll} style={disabledStyle}><h3>Sell All Items for $1000</h3></button> : <></>}
		    </div>
		    </div>
		  </div>
	);
	}
}

export default Inventory;