import React from 'react'
import UserContext, { UserConsumer } from './UserContext'

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
	let classes = "shopItem " + theme
		return(

			<div  onClick={(e) => this.props.upgradeHandler(this.props.upgradeID,this.props.cost)} className={classes} id={this.props.upgradeID} data-toggle="tooltip" data-trigger="hover" data-placement="auto" title={this.props.description}>
			
				<li>{this.props.name}<br></br><h6 className="costLabel" id="costLabel'+i+'">${this.props.cost}</h6><br></br>
				</li>
			</div>   
		)
	}
}

export default Upgrade;