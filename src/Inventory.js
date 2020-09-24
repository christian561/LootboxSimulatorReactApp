import React from 'react'
import InventoryItem from './InventoryItem'

class Inventory extends React.Component{

	
	constructor(props){
		super(props)
		//values in state are used for initialization
		this.state={
			currentPage: 1,
			maxPages: 2,
			pageCount: 34
		}
		this.findDuplicateInArray = this.findDuplicateInArray.bind(this)
		this.changePage = this.changePage.bind(this)

	}

	findDuplicateInArray(id) {
        var counts = {};
		let newArray = this.props.inventory.forEach(function(id) { counts[id] = (counts[id] || 0)+1; });
		return newArray;
    }
    
	
	componentDidMount()  {
  console.log(window.getComputedStyle(this.refs.container2));     
}
    changePage(direction,maxPages,currentPage){
    	
    	switch(direction){
    		case "up":
    		if(currentPage != 1){
	    		this.setState((prevState)=>{
			      return{
			      	currentPage: currentPage - 1
			      }
			    })
	    	}
    		break;
    		case "down":
		    if(currentPage != maxPages){
				this.setState((prevState)=>{
			      return{
			      	currentPage: currentPage  + 1
			      }
			    })
			}
    		break;
    	}
    }
    

	render(){
		let removeInventoryItem = this.props.removeInventoryItem
		let inventoryItems = this.props.inventory
		let key=-1
		let drunk = this.props.drunk
		let valueMultiplier = this.props.valueMultiplier
		let newGamePlusLevel = this.props.newGamePlusLevel
		let itemTrack = []

		let page = this.state.currentPage 
		let pageCount = this.state.pageCount 

		let len = Math.ceil(inventoryItems.length / pageCount) 
		let maxPages = this.state.maxPages || 1
		let currentPage = this.state.currentPage || 1
		
		if(maxPages != len){
	      	maxPages = len
	    }
	    if(maxPages < 1){
	    	maxPages = 1
	    }
	    if(!(currentPage > 0 && currentPage <= maxPages)){
		    currentPage = maxPages
		    this.setState(()=>{return{currentPage : maxPages}})
		}
		
		let inventoryItemComponents = inventoryItems.map(function(item,index){
			
			if(index >= (0 - pageCount + pageCount*page) && index < pageCount*page){
				key++
				//count total copies of items with matching id's and grade, mostly used to stack hell shards and souls into one element for optimization
				let itemCount = 0
				
				//find last item in inventory
				let isLastItem = false
				if(inventoryItems[inventoryItems.length - 1] == item){
					//console.log("last item has value : " + item.value)
					isLastItem = true
				}

				return <InventoryItem 
							key={item.id+item.grade}
							key1={key + pageCount*(page-1)} 
							drunk={drunk}
							valueMultiplier={valueMultiplier}
							newGamePlusLevel={newGamePlusLevel}
							id={item.id} 
							copies={item.count}
							grade={item.grade} 
							value={item.value}
							isLastItem={isLastItem}
							removeInventoryItem={removeInventoryItem}
	       				/>
				
			}
	})
		const Icon = ({ fill }) => (
  <svg  ><g transform="scale(0.03125 0.03125)"><path d="M512 1024c282.77 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM512 96c229.75 0 416 186.25 416 416s-186.25 416-416 416-416-186.25-416-416 186.25-416 416-416z"></path><path d="M669.256 317.256l-90.512-90.512-285.254 285.256 285.256 285.254 90.508-90.508-194.744-194.746z"></path></g></svg>
);
		let hiddenClass = maxPages > 1 ? "unhide" : "hide"
		let hiddenClassScrap = this.props.scrap > 0  ? "unhide" : "hide"
		return(
		
		  <div class="row">
		    {/*Bag Inventory*/}
		    <div class="bagContainer">
		    <div class="bag col-sm-12">
			{/*       <h2>Bag</h2>     */}
			<div className={"inventoryBtns"}>
			<div className={hiddenClassScrap + " scrapContainer"}><img src="https://www.christianlong.design/assets/LootboxSimulator/Scrap.gif" /><h3>{this.props.scrap} Scrap</h3></div>
		      
				<div className={hiddenClass + " inventoryPageBtnContainer"}>
			  <button className={"inventoryPageBtn"} id="UpPage" onClick = {(e) => this.changePage("up",maxPages,currentPage)}><Icon fill="red"  /></button>
		  	<h3 >{currentPage + "/" + maxPages}</h3>
		      <button className={"inventoryPageBtn"} id="DownPage" onClick = {(e) => this.changePage("down",maxPages,currentPage)}><Icon fill="red"  /></button>
		     	</div>
		      
		      </div>
		      <div ref={"container2"}  class="container2 inventory container-fluid">
		        {inventoryItemComponents}
		      </div>
		    </div>
		    </div>
		  </div>
	);
	}
}

export default Inventory;