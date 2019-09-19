import React from 'react'
import InventoryItem from './InventoryItem'
import UserContext, { UserConsumer } from './UserContext'

class Inventory extends React.Component{

	//get info from contextAPI
	static contextType = UserContext

	render(){

		let inventoryItems = this.context.inventory
		let inventoryItemComponents = inventoryItems.map(function(item){
			return <InventoryItem id={item.id} grade={item.grade} value={item.value} />
			
		})
		
		
		return(
		
		  <div class="row">
		    {/*Bag Inventory*/}
		    <div class="bag col-sm-12">
			{/*       <h2>Bag</h2>     */}
		      <button></button>
		      <div class="inventory container-fluid">
		        {inventoryItemComponents}
		      </div>
		   
		    </div>
		    
		  </div>
	);
	}
}

export default Inventory;