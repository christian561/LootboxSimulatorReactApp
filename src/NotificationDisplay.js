import React from 'react'
import UserContext, { UserConsumer } from './UserContext'
import Notification from './Notification'

class NotificationDisplay extends React.Component{
	//get info from contextAPI
	static contextType = UserContext

	render(){
		
      
		let notificationList = this.context.notifications
		let notificationComponents = notificationList.map(function(note){
			return <Notification note={note} />
			
		})
		
		console.log(this.context)
		return(
			<div class="notificationBox">
			{notificationComponents}
			</div>
		);
	}
}

export default NotificationDisplay;