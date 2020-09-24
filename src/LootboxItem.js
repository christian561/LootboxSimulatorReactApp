import React from 'react'

function LootboxItem(props){
	//only apply drunk to elements that show when box isnt rolling
	let classes = "tickerItems " + props.data.grade
	let animationDuration = {}
	let drunk = ""
	if(((props.keys >2 && props.keys < 10)||(props.keys > 73 && props.keys < 81))&&props.drunk){
		drunk = "drunk"
		let randomTiming = parseInt(Math.floor(Math.random() * 8)+1)
		animationDuration = {"animation-duration": randomTiming + 's'}
	}
	return(
		<div class={classes}>
		<p>{props.data.name}</p>
		
		<img src={props.data.src} class={drunk} alt="" style={animationDuration}/>
		</div>
	);
}

export default LootboxItem