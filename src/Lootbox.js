import React from 'react'
import LootboxItem from './LootboxItem'
import UserContext, { UserConsumer } from './UserContext'

class Lootbox extends React.Component{
	static contextType = UserContext
	constructor(){
		super()

		this.state={
			items : [],
	      	playing: false,
	      	animationPlaying:false,
	      	maxItemCount:100,
	      	xOffset:-300

		}
		
		this.rollBox = this.rollBox.bind(this)
		this.fillBox = this.fillBox.bind(this)
		this.createRandomItem = this.createRandomItem.bind(this)
		this.insertItem = this.insertItem.bind(this)
		this.startRollAnimation = this.startRollAnimation.bind(this)
		this.stopRollAnimation = this.stopRollAnimation.bind(this)
		this.setXOffset = this.setXOffset.bind(this)
		this.startAnimation = this.startAnimation.bind(this)
		this.stopAnimation = this.stopAnimation.bind(this)
		this.resetRoll = this.resetRoll.bind(this)
	}

	componentDidMount(){
		this.fillBox()
	}
	
	createRandomItem(){
		const grades = ['F','D','C','B','A']
	
		let randomNameIndex = Math.floor(Math.random() * (this.props.data.items.length))
		let rarity = this.props.data.items[randomNameIndex].rarity
		let name = this.props.data.items[randomNameIndex].Name
		let id = this.props.data.items[randomNameIndex].id
		let src = this.props.data.items[randomNameIndex].src
		let randomGradeIndex = Math.floor(Math.random() * grades.length)
		let grade = grades[randomGradeIndex]
		let value =  (Math.floor(((randomGradeIndex*10) + (3*rarity*randomGradeIndex))*0.3))*this.props.data.multiplier
		//let value = Math.floor(((randomType *10) + (3*randomItem*randomType))*valueMultiplier);
		var item = {id:id, name:name, src:src, grade:grade, value:value};
		//let item = <item name={randomName} src={randomName} grade={randomGrade} value={value}/>
		
		return item;
	}
	fillBox(){
		//clear items
		this.setState((prevState)=>{
	      //!!!make sure you use curly braces for the return statement if you are returning an object

	      return{
	      	items: [],
	      }
	    })
		//fill newly generated lootbox with items 
		
    	for (var i = 0; i < this.state.maxItemCount; i++) {

    		this.insertItem(this.createRandomItem())
    		//access previous state
    
    	}
	}
	//add item to box state
	insertItem(item){
		let newItems = this.state.items
		
		newItems.push(item)
		this.setState((prevState)=>{
	      //!!!make sure you use curly braces for the return statement if you are returning an object

	      return{
	      	items: newItems,
	      }
	    })
	}

	//a hack to get the animation working with the right timing
	resetRoll(){
		//check if box is already open
		if(!this.state.playing){	
			//use up a key and check if there are enough keys first
			if(this.props.changeKeys(-1)){	
			//reset animation
				this.stopAnimation()
				//have to let state update so wait 10 ms then continue
				const timer = setTimeout(() => this.rollBox(), 10);
		    	return () => clearTimeout(timer);
	    	}
    	}
	}
	//main function to open box and get item from it
	rollBox(){
		
			
			//fill box with items
	    	this.fillBox()

	    	//start animation
			this.startAnimation()
			//use key

			 
				//pick winning item
				//let wonItemIndex = parseInt(Math.floor(Math.random() * (this.state.maxItemCount-9)) + 5)
				let randomXOffset = parseInt(Math.floor(Math.random() * 30)+5)*(-1)*(50)
				this.setXOffset(randomXOffset)
				//calculate animation
				let wonItem = this.state.items[78]
				//start animation
				this.startRollAnimation()
				//reward item when animation ends
				console.log(wonItem)
				console.log("won this&^")

		
	}
	stopAnimation(){
		this.setState((prevState)=>{
	      return{
	      	animationPlaying: false
	      }
	    })
	}
	startAnimation(){
		this.setState((prevState)=>{
	      return{
	      	animationPlaying: true
	      }
	    })
	}
	//change position from where to start scrolling from
	setXOffset(offset){
		this.setState((prevState)=>{
	      return{
	      	xOffset: offset
	      }
	    })
	}
	//add item to box state
	startRollAnimation(){
		let animationTime = Math.round(5900/this.context.speedMultiplier)
		this.setState((prevState)=>{
	      return{
	      	playing: true
	      }
	    })
	    setTimeout(this.stopRollAnimation,animationTime)
	}
	//add item to box state
	stopRollAnimation(){
		console.log("stopped")
		this.setState((prevState)=>{
	      return{
	      	playing: false
	      }
	    })
	    
		//insert item into app.js state inventory
		this.props.insertInventoryItem(this.state.items[76])
		

	}
	render(){
	let itemArray = this.state.items
	//create components out of the items'
	let key = 0
	let lootboxItemComponents = itemArray.map((item)=>{
			key++
			return <LootboxItem data={item} keys={key}/>
		})
	let styles = {width: 8198, marginLeft: -8198}
	let animated = this.state.animationPlaying ? "animation tickerSlider" : "tickerSlider"
	let x = this.state.xOffset
	console.log("speed: " + this.context.speedMultiplier)
	let animationTime = Math.round(6/this.context.speedMultiplier)
	console.log("animationTime: " +animationTime)
	let playing = this.state.animationPlaying ? {transform: `translate(${x}px)`, animation:'slide '+animationTime+'s ease-out forwards'} : {transform: `translate(${x}px)`}

	return(

		<div class="row lootboxes ">
		<button class="col-sm-2" onClick={this.resetRoll} id="boxItems">
		Open Box</button>
		<div class="ticker col-sm-11" >
		<div 
			 id="sliderItems"
			 data-isrolling="false" 
			 style={{styles}}>
			 </div>
			 <span class="tickerArrow">hi</span>
			 <div class={animated} style={playing}>
			 {lootboxItemComponents}
			 </div>
			 </div></div>
	);
	}
}

export default Lootbox;