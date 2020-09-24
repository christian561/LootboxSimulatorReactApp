import React from 'react'
import './Achievements.scss'
import './ChangeLog.scss'
function ChangeLog(props){
	return(
		<div class="ChangeLog container-fluid layer1 title">
		<button onClick={props.toggleChangeLog} class="unhide"><div></div></button>
			<h3 className={"underline"}>Alpha 3.1 Hotfix Released </h3>
			<h6>Feb 29, 2020 4:11pm PST</h6>
			<h4>Note: Shouldn't cause any problems with your save.</h4>
			<ul>
				<li>Fixed reset game prompt not showing properly</li>
				<li>Fixed a bug introduced in A3 update causing box items to reset improperly</li>
			</ul>
			<br />
			<br />
			<h2 className={"underline"}>Alpha 3 Released!</h2>
			<h6>Feb 28, 2020</h6>
			<h4>Note: You probably have to reset your game for this update since there is new stuff getting saved. Sorry about this.</h4>
			<h2>General Updates:</h2>
			<ul>
				<li>-added prompt to reset game button to prevent accidental resets</li>
				<li>-added a new game mechanic! Scrap. Get 1 scrap for every trash item sold that doesn't get recycled. Changed text to say trash sells for 1 scrap</li>
				<li>-Doubled number of keys you start with, from 5 to 10 keys</li>
			</ul>
			<ul>
				<h2>Bug Fixes:</h2>
				<li>-Fixed auto roll upgrade not turning off when receiving luck upgrades or starting a new game</li>
			</ul>
			<h2>Visual Changes:</h2>
			<ul>
				<li>-Changed achievements text glow animation to only show when hovered. Before it was using a lot of cpu constantly.</li>
			</ul>
		</div>
	)
}
export default ChangeLog