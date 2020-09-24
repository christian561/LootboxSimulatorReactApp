
import React from 'react'

class Achievement extends React.Component{

	constructor(props){
		super(props)
		if(this.props.checkAchievement(""+this.props.groupId+this.props.data.id)){	
			this.state={
				hasClaimedBonus:true
			}
		}
		else{
			this.state={
				hasClaimedBonus:false
			}
		}
		this.claimBonus = this.claimBonus.bind(this)
	}
	
	claimBonus(){
		//claim bonus a single time
		if(!this.state.hasClaimedBonus){

	        if(this.props.data.BonusLuck >0)
	        this.props.changeLuck(this.props.data.BonusLuck)  
	        if(this.props.data.BonusSpeed >0)
	        this.props.changeSpeed(this.props.data.BonusSpeed)
	        if(this.props.data.BonusValue >0)
	        this.props.changeValue(this.props.data.BonusValue)

			console.log("bonus Claimed!")
			//this.props.changeAchievements(Number.parseInt(""+this.props.groupId+this.props.data.id))
			this.props.changeAchievements(""+this.props.groupId+this.props.data.id)
			this.setState({
				hasClaimedBonus:true
	    	})

		}
	}
		
	render(){

		let isLocked = this.props.data.requiredAmount > this.props.count
		let lockedClass = isLocked ? 'locked' : ''
		let claimedClass = this.state.hasClaimedBonus ? '' : 'locked'
	return(
		<div
			onMouseEnter={() => isLocked ? '' : this.props.viewDetails(this.props.data)}
			class={"subAchievement " + lockedClass} 
			>
			<img src={this.props.data.src.substring(0, this.props.data.src.length - 4) + ".png"} alt={this.props.data.Description}/> 
			<div class="hover"></div>
			{!isLocked && !this.state.hasClaimedBonus ? <button onClick={this.claimBonus} class={claimedClass}></button> : ''}
		</div>
	)
}
}

export default Achievement

