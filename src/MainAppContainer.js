import React from 'react'
import MainApp from './MainApp'

class MainAppContainer extends React.Component {
  constructor(){
    super()

    this.state ={
      //todoData: TodoItemData,
      //loggedIn: true
    }
    //anytime using a method with setState you want to bind it to the class
    //this.toggleLogin = this.toggleLogin.bind(this)
  }
  render(){
    return (
      
      
      <MainApp 
        upgradeHandler={this.props.upgradeHandler}  
        checkUpgrade={this.props.checkUpgrade}  
        changeKeys={this.props.changeKeys}
        insertInventoryItem={this.props.insertInventoryItem}
        removeInventoryItem={this.props.removeInventoryItem}
      />

    );
  }
}

export default MainAppContainer;
