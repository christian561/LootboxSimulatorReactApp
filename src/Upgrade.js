import React from 'react'
import UserContext, { UserConsumer } from './UserContext'
import Description from './description'
class Upgrade extends React.Component{
	
	static contextType = UserContext
	
	constructor(props) {
	    super(props);

	    // This binding is necessary to make `this` work in the callback
	    this.handleClick = this.handleClick.bind(this);
	    this.buyUpgrade = this.buyUpgrade.bind(this);
  	}

  	//called when upgrade is attempted to be bought
  	handleClick(id) {
	    this.buyUpgrade(id)
  	}

  	buyUpgrade(id){
  		this.props.upgradeHandler(id)
  	}

	render(){
	//drunk styling
	let animationDuration = {}
	let drunk = ""
	if(this.context.drunk){
		drunk = "drunk"
		let randomTiming = parseInt(Math.floor(Math.random() * 8)+1)
		animationDuration = {"animation-duration": randomTiming + 's'}
	}

	//style shop upgrades by tier
	let	theme = "tier1Upgrade"
	
	if(this.props.parentID == 6){
		theme = "tier2Upgrade"
	}
	if(this.props.parentID == 9){
		theme = "tier3Upgrade"
	}
	if(this.props.upgradeID == 9){
		theme = "godUpgrade"
	}
	if(this.props.parentID == 16){
		theme = "tier3Upgrade"
	}
	if(this.props.upgradeID == 23){
		theme = "winUpgrade"
	}
	let classes = "shopItem " + theme
		return(

			<div  onClick={(e) => this.props.upgradeHandler(this.props.upgradeID,this.props.cost)} className={classes} id={this.props.upgradeID}>
				
				<li class={drunk} style={animationDuration}>{this.props.name}<br></br><h6 className="costLabel" id="costLabel'+i+'">{Number.isInteger(this.props.cost) ? "$":""}{this.props.cost}</h6><Description key1={this.props.key1} description={this.props.description}/><br></br>
				</li>
			</div>   
		)
	}
}

export default Upgrade;