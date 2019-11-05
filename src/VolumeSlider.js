import React from 'react'

function VolumeSlider(){
	return(
		<div id="player">
			<i class="fa fa-volume-down"></i>
			{/* volume slider   */}
			<div id="volume"></div>
			<i class="fa fa-volume-up"></i>
	  		<div id="percent"></div>
		</div>
	);
}

export default VolumeSlider;