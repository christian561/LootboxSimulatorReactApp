import React from 'react'
import './Achievements.scss'
import './AchievementsTieredData.js'
import AchievementGroup from './AchievementGroup.js'
import AchievementsTiered from './AchievementsTieredData'
class  Achievements extends React.Component{
	constructor(props){
		super(props)
		this.state={
			achievementDetailsName:'',
			achievementDetailsDescription:'',
			achievementDetailsImageSrc:'',
			achievementDetailsHidden:true
		}
		this.viewDetails = this.viewDetails.bind(this)
	}
	viewDetails(details){
		console.log(details)
		let bonus = ''
		if(details.BonusLuck >0)
	       bonus = 'Luck increased by ' +  Math.round( details.BonusLuck*100 * 10 ) / 10 + "%"
        if(details.BonusSpeed >0)
	       bonus = 'Speed increased by ' + Math.round( details.BonusSpeed*100 * 10 ) / 10 + "%" 
        if(details.BonusValue >0)
	       bonus = 'Sell Value increased by ' + Math.round( details.BonusValue*100 * 10 ) / 10 + "%"
		this.setState({
     		achievementDetailsName:details.Name,
			achievementDetailsDescription:details.Description,
			achievementDetailsImageSrc:details.src,
			achievementDetailsBonus:bonus,
			achievementDetailsHidden:false
    	})
	}
	render(){
	let detailsHiddenClass = ( this.state.achievementDetailsHidden ) ? "invisible" : "slideIn"
	let detailsClass = ( this.state.achievementDetailsHidden ) ? "" : "details"
     // if(this.props.checkAchievement("a1")) detailsHiddenClass = ""
	let AchievementsTieredComponents = AchievementsTiered.map((AchievementGroup2,index)=>{
			
				return <AchievementGroup 
							key={AchievementGroup2.name}
							data={AchievementGroup2}  
							count={this.props.data[index]}
							viewDetails={this.viewDetails}
							groupId={AchievementGroup2.groupId}
							changeAchievements={this.props.changeAchievements}
                            checkAchievement={this.props.checkAchievement}
	                        changeLuck={this.props.changeLuck}  
	                        changeSpeed={this.props.changeSpeed}  
	                        changeValue={this.props.changeValue}
        				/>
			
		})
	return(
		<div class="instructions container-fluid AchievementsLayer1" id="achievementsBody">


			<br />
			<section class="infoContainer AchievementsLayer2" id="gameplayInstructions">
			<div class="title"><ul>
				{/*<li><h4>Welcome to the Achievements Menu!</h4></li>*/}
				<li><h1>Achievements</h1><button  onClick={this.props.toggleAchievements} className={"unhide"}><div></div></button></li>
				{/*<li><h4>To avoid any spoilers, achievements won't show up until you start progress on them.</h4></li>*/}
				<li><h4>Unlock speed, value, and luck upgrades.</h4></li>
				
			</ul></div>
			</section>	
			<br />
			<div class="row infoRow AchievementsLayer2" id="achievementList">
				<section class="col-xl-8  infoContainer AchievementsLayer3" id="gradeInformation">	
				<h1>Your Achievements</h1>
				<h4>Click on an achievement's icon to see more information and to <span class="sparkles">claim bonuses</span></h4>
				<hr />
					<ul>
					{AchievementsTieredComponents}
					</ul>	
				</section>
				<section className={"col-lg-3  infoContainer AchievementsLayer3 " + detailsHiddenClass } id="achievementInformation">	
					<h1 className={detailsClass}>Achievement Details</h1>
					<h6 className={detailsClass}></h6>
					<hr className={detailsClass} />
					<h2 className={detailsClass}>{this.state.achievementDetailsName}</h2>
					
					<img className={detailsClass} src={this.state.achievementDetailsImageSrc} /><p className={detailsClass}>{this.state.achievementDetailsDescription}<div>
					{this.state.achievementDetailsBonus}
					</div></p>
					
				</section>
				{/*<section class="col-lg-3  infoContainer AchievementsLayer3" id="tipsInformation">	
					<h1>Time Saving Tips</h1>
					<hr />

					<ul>
						<li class="infoContainer"><h3>Don't sell <span class="F">Trash</span> until you unlock the Recycler or Key Former.</h3></li>
						<li class="infoContainer"><h3>You will need 20 <span class="A">Legendaries</span> saved up, saving some early on is a good idea</h3></li>
						<li class="infoContainer"><h3>The lootboxes are in order of Lowest to Highest value of items </h3></li>
						
					</ul>	
				</section>*/}
			</div>
			{/*JSON.stringify(AchievementsTiered)*/}
		</div>
	)}
}

export default Achievements