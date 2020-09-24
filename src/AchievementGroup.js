import React from 'react'
import Achievement from './Achievement'

function AchievementGroup(props){
	let achievementComponents = props.data.tiers.map((achievement,index)=>{
		let isLocked = achievement.requiredAmount > props.count
		let lockedClass = isLocked ? 'locked' : ''
		return <Achievement  
							notify={props.notify} 
							count={props.count} 
							data={achievement} 
							viewDetails={props.viewDetails} 
							key={(props.data.name+achievement.id).replace(/\s/g, '')}
							groupId={props.groupId} 
							changeAchievements={props.changeAchievements}
                            checkAchievement={props.checkAchievement}
	                        changeLuck={props.changeLuck}  
	                        changeSpeed={props.changeSpeed}  
	                        changeValue={props.changeValue}
							/>
	})
	return(
		<li class="achievementGroup container-fluid row">
			<div class="col-md-4 achievementGroupLabel">
			 <h2 class="inlineUp" >{props.data.name}</h2>
			<h5 class="inlineUp">{props.count}&nbsp;{props.data.statText}</h5>
			</div>
			 <div class="col-md-8 achievementContainer">{achievementComponents}</div>
 

		</li>
	)
}

export default AchievementGroup