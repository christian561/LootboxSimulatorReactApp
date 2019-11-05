import React from 'react'
import InventoryItem from './InventoryItem'
import UserContext, { UserConsumer } from './UserContext'
class Trash extends React.Component{

	//get info from contextAPI
	static contextType = UserContext
	constructor(){
		super()

	}
	render(){
		let trashItems = this.context.trash
		let key=-1
		let removeInventoryItem = function(){return null}
		let style = {}
		let trashItemComponents = trashItems.map(function(item){
			key++
			//reset delay if it gets too big
			if(key>=20){
				key=0
			}
			style = {"animationDelay":(key/4+'s'),"marginBottom":key*-5,"marginLeft":key*-2}
			return <div className="trash" style={style}><InventoryItem 
						key1={key} 
						id={item.id} 
						grade={item.grade} 
						value={item.value}
						removeInventoryItem={removeInventoryItem}
       				/></div>
			
		})
		return(
			<div class="trashContainer">
				
				{trashItemComponents}
				
			</div>
		);
	}
}

export default Trash;