import React from 'react'
import LootboxItem from './LootboxItem'
//import UserContext, { UserConsumer } from './UserContext'
import './slider.scss'
import { ReactComponent as TickerArrow } from './assets/tickerArrow.svg'
import soundfile from './assets/Audio/1.mp3'

class Lootbox extends React.PureComponent{
	//static contextType = UserContext
	constructor(props){
		super(props)
		this.state={
			items : [],
	      	playing: false,
	      	animationPlaying:false,
	      	maxItemCount:90,
	      	xOffset:-300,
	      	lockedButton:false,
	      	souls:parseInt(this.props.souls) || 0,
	      	isAutomatic:false
	      	
		}
		this.timer = null;
		this.rollBox = this.rollBox.bind(this)
		this.fillBox = this.fillBox.bind(this)
		this.refillBox = this.refillBox.bind(this)
		this.createRandomItem = this.createRandomItem.bind(this)
		this.insertItem = this.insertItem.bind(this)
		this.startRollAnimation = this.startRollAnimation.bind(this)
		this.stopRollAnimation = this.stopRollAnimation.bind(this)
		this.setXOffset = this.setXOffset.bind(this)
		this.startAnimation = this.startAnimation.bind(this)
		this.stopAnimation = this.stopAnimation.bind(this)
		this.resetRoll = this.resetRoll.bind(this)
		this.lock = this.lock.bind(this)
		this.playAudio = this.playAudio.bind(this)
		this.createRandomGrade = this.createRandomGrade.bind(this)
		this.addSoul = this.addSoul.bind(this)
		this.toggleAutomatic = this.toggleAutomatic.bind(this)

		
	}
	playAudio(id,type) {
		
		switch(type) {
		    case 'mouseDown':
		      const audio = document.getElementById(this.props.data.name)
			  audio.volume = 0.2	
   	 		  audio.play()
		      return 
		    case 'mouseUp':
		    const audio2 = document.getElementById(this.props.data.name+"2")
	     	  audio2.volume = 0.2
   	 		  audio2.play()
		      return 
		   
    	}

  	}
 
	componentWillMount(){
		this.fillBox()
	}
	
	// shouldComponentUpdate(nextProps,nextContext) {
	// 	const differentIncludeReaperShards = this.props.includeReaperShards !== nextProps.includeReaperShards
	// 	const differentIncludeSoulsShards = this.props.includeSoulsShards !== nextProps.includeSoulsShards
	// 	const differentShowAddSoulsButton = this.props.showAddSoulsButton !== nextProps.showAddSoulsButton

 //        const differentSouls = this.props.souls !== nextProps.souls;
 //        return differentSouls || differentShowAddSoulsButton ||  differentIncludeSoulsShards || differentIncludeReaperShards;
 //    }
	createRandomItem(){
		let grades = ['F','D','C','B','A']
		//create hellshards if random chooses R
		if(this.props.includeReaperShards && this.props.data.name!=="Reaper"){
			grades.push('R')
		}
		//create soul if random chooses z and its the reaper box
		if(this.props.includeSoulsShards && this.props.data.name==="Reaper"){
			grades.push('Z')
		}
		
		let randomGradeIndex = grades.indexOf(this.createRandomGrade(grades))
		let grade = grades[randomGradeIndex]
		let srcFolder = "https://www.christianlong.design/assets/LootboxSimulator/"
		if(grade === 'R'){
			//make a reaper shard item
			var item = {id:666,name:"Hellshard",src:srcFolder+"Hellshard.gif", grade:grade,value:"???",count:1}
			
			return item;
		}
		if(grade === 'Z'){
			//make a soul item
			var item = {id:999,name:"Soul",src:srcFolder+"Soul.gif", grade:grade,value:"Infinite",count:1}
			
			return item;
		}
		
		let randomNameIndex = Math.floor(Math.random() * (this.props.data.items.length))
		let rarity = this.props.data.items[randomNameIndex].rarity
		let name = this.props.data.items[randomNameIndex].Name
		let id = this.props.data.items[randomNameIndex].id
		let src = srcFolder + name + ".gif"

		let value =  (Math.floor(((randomGradeIndex*10) + (3*rarity*randomGradeIndex))*0.3))*this.props.data.multiplier
		if(rarity === 0){value = 0}
		//let value = Math.floor(((randomType *10) + (3*randomItem*randomType))*valueMultiplier);
		var item = {id:id, name:name, src:src, grade:grade, value:value,count:1};
		//let item = <item name={randomName} src={randomName} grade={randomGrade} value={value}/>
		
		return item;
	}
	//returns a random item grade based on a percentage based probability called luck
	createRandomGrade(grades){
		let x = Math.floor(Math.random() * (120))
		let luck = this.props.luckMultiplier
		if(x<7.5*luck)
			return "A"
		else if(x<22.5*luck)
			return "B"
		else if(x<45*luck)
			return "C"
		else if(x<70*luck)
			return "D"
		else{
			//hell shards
			if(grades.indexOf("R")!=-1)
				if(x<80*luck)
				return "R"
			//souls
			if(grades.indexOf("Z")!=-1)
				if(x<95*luck)
				return "Z"
			//trash
			return "F"
			}
	}
	fillBox(){

		//clear items
		this.setState({
	      	items: []
	    })
		//fill newly generated lootbox with items 
    	for (var i = 0; i < this.state.maxItemCount; i++) {
    		this.insertItem(this.createRandomItem())
    
    	}
	}
	//randomize a few of the lootbox items each roll
	refillBox(){
		let boxItemArray = this.state.items
		//replace items 2-10
		// for(var i =2;i<10;i++){
		// 	this.replaceItem(i,this.createRandomItem())
		// }
		//replace items 73-81
		for(var i=71;i<82;i++){
			this.replaceItem(i,this.createRandomItem())
		}
	}
	//randomize all the items
	refillBoxEverything(){
		let boxItemArray = this.state.items
		//replace items 2-10
		// for(var i =2;i<10;i++){
		// 	this.replaceItem(i,this.createRandomItem())
		// }
		//replace items 73-81
		for(var i=0;i<boxItemArray.length;i++){
			this.replaceItem(i,this.createRandomItem())
		}
	}
	//replace item in this boxes inventory at item(index) with item
	replaceItem(index,item){
		let newItems = this.state.items
		
		newItems[index] = item
		this.setState({
	      	items: newItems
	    })
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
	componentWillUnmount() {
	  clearTimeout(this.timer);
	}
	lock(){
		//lock button first so you can't open multiples times
		this.setState({lockedButton:true})
		//unlock after a few ms
		this.timer = setTimeout(() => {
			this.setState({lockedButton:false})
			if(this.state.souls >0 && this.state.isAutomatic){
				this.resetRoll()
				if(this.props.keys <= 0){
					//turn off soul automation if you run out of keys
					this.toggleAutomatic()
				}
			}
		}, 500);
    	return () => clearTimeout(this.timer);
	}
	//to get the animation working with the right timing
	resetRoll(){
		this.lock()

		//check if box is already open
		if(!this.state.playing){	
			//use up a key and check if there are enough keys first
			if(this.props.data.name==="Reaper"){
				if(this.props.changeReaperKeys(-1)){	
					//reset animation
					this.stopAnimation()
					//have to let state update so wait 10 ms then continue
					const timer = setTimeout(() => this.rollBox(), 10);
			    	return () => clearTimeout(timer);
		    	}
			}
			else{
				if(this.props.changeKeys(-1)){	
					
				//reset animation
					this.stopAnimation()
					//have to let state update so wait 10 ms then continue
					const timer = setTimeout(() => this.rollBox(), 1);
			    	return () => clearTimeout(timer);
		    	}
		    }
    	}
	}
	//main function to open box and get item from it
	rollBox(){

    	//start animation
		this.startAnimation()
		this.props.changeLootboxesOpened(1)
		//pick winning item
		//let wonItemIndex = parseInt(Math.floor(Math.random() * (this.state.maxItemCount-9)) + 5)
		let randomXOffset = parseInt(Math.floor(Math.random() * 30)+5)*(-1)*(80)
		this.setXOffset(randomXOffset)
		//calculate animation
		//start animation
		this.startRollAnimation()
		//change box items that you can see
		this.refillBox()

		let wonItem = this.state.items[78]
		//reward item when animation ends

		
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

		let animationTime = (5.5+(Math.random()/2))/(this.props.speedMultiplier+(this.state.souls))
		
		this.setState((prevState)=>{
	      return{
	      	playing: true,
	      	animationTime:animationTime
	      }
	    })
	    setTimeout(this.stopRollAnimation,animationTime*1000)
	}
	//add item to box state
	stopRollAnimation(){
		//console.log("box roll stopped")
		this.setState((prevState)=>{
	      return{
	      	playing: false
	      }
	    })
	    
		//insert item into app.js state inventory
		this.props.insertInventoryItem(this.state.items[76])
		
		
	}
	addSoul(){
		//check there are souls in inventory
	    let matchingItemCount = this.props.countItemsByGrade('Z')
        if(matchingItemCount >= 1){
       	  //remove 1 soul from inventory
          this.props.removeInventoryItemsByGrade('Z',1)
		  //update lootbox state
		  this.setState((prevState)=>{return{souls:prevState.souls + 1}})
		  //update save file
		  this.props.unlockSoulUpgrade(this.props.data.name)
		  if(this.state.isAutomatic){this.resetRoll()}
	      }
	      else{

	        this.props.notify('A soul is required to upgrade')
	      }
		
	}
	toggleAutomatic(){
		this.setState((prevState)=>{return{isAutomatic:!prevState.isAutomatic}})
		//have to let state update so wait 10 ms then continue
		const timer = setTimeout(() => {if(this.state.isAutomatic){this.resetRoll()}}, 10);
		return () => clearTimeout(timer);
	}
	 handleEvent = (event) => {
	   if (event.type === "mousedown") {
          	//play sound
		  	this.playAudio(this.props.data.name,"mouseDown")
	      } else {
	        this.playAudio(this.props.data.name,"mouseUp")
	      }
	  }
	render(){
	let itemArray = this.state.items
	//create components out of the items'

	let lootboxItemComponents = itemArray.map((item,index)=>{
			
			return <LootboxItem key={index} data={item} keys={index} drunk={this.props.drunk}/>
		})
	if(this.props.refill){
	 this.refillBoxEverything()
	 	lootboxItemComponents = "<h2>Restocking...</h2>"
		this.setState((prevState)=>{return{isAutomatic:false}})
	 }

	let styles = {width: 8198, marginLeft: -8198}
	let animated = this.state.animationPlaying ? "animation tickerSlider" : "tickerSlider"
	let x = this.state.xOffset
	//console.log("speed: " + this.context.speedMultiplier)
	//let animationTime = Math.round(6/this.context.speedMultiplier)
	//console.log("animationTime: " +animationTime)
	let playing = this.state.animationPlaying ? {transform: `translate(${x}px)`, animation:'slide '+this.state.animationTime+'s cubic-bezier(.1,.35,.65,.99) forwards'} : {transform: `translate(${x}px)`}
	let buttonDisabled = this.state.playing ? {filter:'grayscale(1)'} : {filter:'grayscale(0)'}
	let soulButtonDisabled = (this.props.countItemsByGrade("Z") < 1 || this.state.souls >=3) ? {filter:'grayscale(1)'} : {filter:'grayscale(0)'}
	let soulContainerStyle = {width: this.state.souls*36}
	let toggleDisabled = this.state.souls <= 0 ? {display:'none'} : {display:'block'}
	let reaperClass = ""
	let buttonText = "Open " + this.props.data.name + " Box"
	let tinySoulSrc = "https://www.christianlong.design/assets/LootboxSimulator/SoulTiny.gif"
	if(this.props.data.name==="Reaper"){
		reaperClass = "reaperBox"
		buttonText = "Summon Reaper"
	}
		
	return(
		
		<div class={"row lootboxes " + reaperClass}>
		<button class="col-sm-2" onClick={this.resetRoll} onMouseDown={ this.handleEvent } onMouseUp={ this.handleEvent } id="boxItems" disabled={this.state.lockedButton} style={buttonDisabled}>
		{buttonText}</button>
		{this.props.showAddSoulsButton ?
		 <><button class="col-sm-2 addSoulButton" disabled={this.props.countItemsByGrade("Z") < 1 || this.state.souls >= 3} style={soulButtonDisabled}  onClick={this.addSoul}  >
		 +
		 <img class="addSoulButtonImg" src={tinySoulSrc} />
		 <div class="soulContainer" style={soulContainerStyle}>
		 {this.state.souls >= 1 ? <img  class="tinySouls"  src={tinySoulSrc} /> : ""}
		 {this.state.souls >= 2 ? <img  class="tinySouls" src={tinySoulSrc} /> : ""}
		 {this.state.souls >= 3 ? <img  class="tinySouls" src={tinySoulSrc} /> : ""}
		 
		 </div>
		 </button>
		 <div class="container1 clickable" style={toggleDisabled}>
      <div class={"slider hellColors "} onClick={this.toggleAutomatic}>
        <svg class={"sliderCircle " + (this.state.isAutomatic ?  "sliderToggled " : "")} id="shakToggle" viewBox="0 0 70 20" xmlns="http://www.w3.org/2000/svg">
          
          <rect x="10" width="70" height="25px" />
          <text x="22" y="15" style={{font: "bold 6px sans-serif",fill:"white"}}>OFF</text>
          <ellipse cx="10" cy="10" rx="10" ry="10" fill="url(#grad1)" />
        </svg>
      </div>
    </div></>
		 : ''}
		<audio  className="audio-element" id={this.props.data.name}>
          <source src={"http://christianlong.design/Audio/6.mp3"}></source>
        </audio>
        <audio   className="audio-element" id={this.props.data.name + "2"}>
          <source src={"http://christianlong.design/Audio/7.mp3"}></source>
        </audio>
		<div class="ticker col-sm-10" >
		<div 
			 id="sliderItems"
			 data-isrolling="false" 
			 style={{styles}}>
			 </div>
		
			 <span class="tickerArrow"><TickerArrow /></span>

			 <div class={animated} style={playing}>
			 {lootboxItemComponents}
			 </div>
			 </div></div>

	);
	}
}

export default Lootbox;