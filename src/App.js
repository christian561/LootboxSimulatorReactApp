import React from 'react';
import logo from './logo.svg';
import './App.css'
import { UserProvider } from './UserContext'
import Navbar from './Navbar'
import MainAppContainer from './MainAppContainer'
class App extends React.Component {
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
      //provide access to state to all components inside the <UserProvider> Tag
      <UserProvider value={this.state}>

      <div className="App">
        <Navbar />
        <MainAppContainer />

      </div>

      </UserProvider>
    );
  }
}

export default App;
