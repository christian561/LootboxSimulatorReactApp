
import React from 'react';
import logo from './logo.svg';
//App.js

import './App.css'
import { UserProvider } from './UserContext'
import Navbar from './Navbar'
import MainAppContainer from './MainAppContainer'

class App extends React.Component {
  constructor(){
    super()

    this.state ={
      //todoData: TodoItemData,
      loggedIn: false,
      save:"",
      notifications:[]
    }
    //anytime using a method with setState you want to bind it to the class
    //this.toggleLogin = this.toggleLogin.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
    this.saveGame = this.saveGame.bind(this)
    this.purchaseUpgrade = this.purchaseUpgrade.bind(this)
    this.changeGold = this.changeGold.bind(this)
  }
   //anytime using a method with setState you want to bind it to the class
  toggleLogin(){
    console.log("Save Found or Created.. Logged in successfully")
    var saveData = JSON.parse(window.localStorage.getItem("playerData"))
    
    //access previous state
    this.setState((prevState)=>{
      //!!!make sure you use curly braces for the return statement if you are returning an object
      return{
      loggedIn: !prevState.loggedIn,
      gold : Number(saveData.gold),
      keys : Number(saveData.keys),
      inventory: saveData.inventory,
      upgrades : saveData.upgrades
      }
    })
  }
  componentDidMount(){
    //check local storage for save data
     if(window.localStorage.getItem("playerData") != null){
        //log player in if save exists
        this.toggleLogin()
     }
     else{
        let playerData = {gold : 0, keys : 5, upgrades : [], inventory : []}
        window.localStorage.setItem("playerData", JSON.stringify(playerData)) 
        this.toggleLogin()
     }
     
  }
  saveGame(){
    console.log("Saved the Game!")
    let playerData = {gold : this.state.gold, keys : this.state.keys, upgrades : this.state.upgrades, inventory : this.state.inventory}
    window.localStorage.setItem("playerData", JSON.stringify(playerData)) 
  }
  changeGold(amount){
    let updatedBalance = this.state.gold + amount
    this.setState((prevState)=>{
      //!!!make sure you use curly braces for the return statement if you are returning an object
      return{
        gold : updatedBalance
      }
    })
      console.log("Updated Balance")
    }
    
   
  purchaseUpgrade(id,cost){
    //console.log("buy " + id)
    //check to see if there is enough gold
    if(this.state.gold >= cost){
    //subtract cost of upgrade from total gold
      this.changeGold(-1*cost)
    }
    else{
      this.notify('Not Enough Gold!')
    }

    //create notification if failed or succeeded purchase

    return null
    //unlock upgrade


  }
  //add notification to notifications list
  notify(notification){
    //new list
    let notifications = this.state.notifications
    notifications.push(notification)
    //access previous state
    this.setState((prevState)=>{
      return{
        notifications: notifications 
      }
    })
    console.log(this.state.notifications)
  }
   
  render(){

    return (
      //provide access to state to all components inside the <UserProvider> Tag
      <UserProvider value={this.state}>

      <div className="App">
        <Navbar save={this.saveGame}/>
        {this.state.loggedIn &&
          <MainAppContainer upgradeHandler={this.purchaseUpgrade} />
        }
        
      </div>

      </UserProvider>
    );
  }
}

export default App;
