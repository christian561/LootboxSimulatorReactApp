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
      
      
      <MainApp />

    );
  }
}

export default MainAppContainer;
