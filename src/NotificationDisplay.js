import React from 'react'
import UserContext, { UserConsumer } from './UserContext'
import Notification from './Notification'

class NotificationDisplay extends React.Component{
	
state = {
    isMouseTooltipVisible: true,
  };
	render(){
		
      
		let notificationList = this.props.notifications
		
		let notificationComponents = notificationList.map(function(note,index){
			return <Notification key={note.key} note={note.notification} />
			
		})

		return(
			
				<div class="notificationBox">
				{notificationComponents}
				</div>
		);
	}
}

export default NotificationDisplay;