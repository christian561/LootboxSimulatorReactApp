import React from 'react'
import BoxData from './BoxData'

function LootboxItem(props){
	
	let classes = "tickerItems " + props.data.grade

	return(
		<div class={classes}>
		<p>{props.data.name}</p>
		
		<img src={props.data.src} />
		</div>
	);
}

export default LootboxItem