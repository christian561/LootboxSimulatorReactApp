
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
    this.unlockUpgrade = this.unlockUpgrade.bind(this)
    this.checkUpgrade = this.checkUpgrade.bind(this)
    this.resetGameSave = this.resetGameSave.bind(this)
    this.loadGameSave = this.loadGameSave.bind(this)
    this.changeKeys = this.changeKeys.bind(this)
    this.changeSpeed = this.changeSpeed.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.insertInventoryItem = this.insertInventoryItem.bind(this)
    this.removeInventoryItem = this.removeInventoryItem.bind(this)
  }
   //anytime using a method with setState you want to bind it to the class
  toggleLogin(){
    console.log("Save Found or Created.. Logged in successfully")
    var saveData = JSON.parse(window.localStorage.getItem("playerData"))
    
    //access previous state
    this.setState((prevState)=>{
      //!!!make sure you use curly braces for the return statement if you are returning an object
      return{
      loggedIn: true,
      gold : Number(saveData.gold),
      keys : Number(saveData.keys),
      inventory: saveData.inventory,
      upgrades : saveData.upgrades,
      speedMultiplier:1,
      valueMultiplier:1
      }
    })
  }
  insertInventoryItem(item){
    let newInventory = this.state.inventory
    //insert item into array
    newInventory.push(item)
    //access previous state
    this.setState((prevState)=>{
      //!!!make sure you use curly braces for the return statement if you are returning an object
      return{
        inventory: newInventory
      }
    })
  }

  //handle selling items
  removeInventoryItem(index){
    let newInventory = this.state.inventory
    let goldGained = this.state.inventory[index].value*this.state.valueMultiplier

    //add gold to state
    this.changeGold(goldGained)
    //remove item from array by index
    newInventory.splice(index,1)

    //check for recycler upgrade
    if(goldGained <1){
      this.recycle()
    }

     //access previous state
    this.setState((prevState)=>{
      //!!!make sure you use curly braces for the return statement if you are returning an object
      return{
        inventory: newInventory
      }
    })
  }
  recycle(){
  //is hydraulic press unlocked
    if(this.checkUpgrade(18)){
      this.changeKeys(1)
      return ;
    }

    //is recycler unlocked
    if(this.checkUpgrade(3)){
      //50% chance to get an item
      let randomNumber = Math.round(Math.random())
      if(randomNumber){
        this.changeKeys(1)
      }
    }
    
  }
  resetGameSave(){
    window.localStorage.clear()
    this.loadGameSave()
  }
  loadGameSave(){
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
  componentDidMount(){
    this.loadGameSave()
     
  }
  saveGame(){
    console.log("Saved the Game!")
    let playerData = {gold : this.state.gold, keys : this.state.keys, upgrades : this.state.upgrades, inventory : this.state.inventory}
    window.localStorage.setItem("playerData", JSON.stringify(playerData)) 
  }
    //change state method
  changeGold(amount){
    let updatedBalance = this.state.gold + amount
    this.setState((prevState)=>{
      return{
        gold : updatedBalance
      }
    })
      console.log("Updated Key Balance")
    }
    //change state method
  changeValue(amount){
    let updatedValue = this.state.valueMultiplier + amount
    this.setState((prevState)=>{
      return{
        valueMultiplier : updatedValue
      }
    })
    }
    //change state method
  changeSpeed(amount){
    let updatedSpeed = this.state.speedMultiplier + amount
    this.setState((prevState)=>{
      return{
        speedMultiplier : updatedSpeed
      }
    })
    }
    //change state method
    changeKeys(amount){
      
      let updatedBalance = this.state.keys + amount
      //make sure you have enough keys first
      if(updatedBalance >-1){
        if(amount<0){
        this.notify(amount +' Box Key')
        }
        else{

        this.notify('+'+amount +' Box Key')
        }
        //update key balance
      this.setState((prevState)=>{ //!!!make sure you use curly braces for the return statement if you are returning an object
        return{
          keys : updatedBalance
        }
      })
        return true
        
      }
      else{
        this.notify('You need a key!')
        return false
      }
    }
  checkUpgrade(upgradeID){
    //get upgrades
    let upgrades = this.state.upgrades
    let flag = false

    //unlock default boxes with parentUpgradeID:0
    if(upgradeID === 0){
      flag = true
    }

    //check all currently owned upgrades
    upgrades.map((unlockedUpgradeID)=>{
      if(unlockedUpgradeID == upgradeID){
        flag = true
      }
      
    })
    //no match is found
    return flag
  }
  unlockUpgrade(id){

    //get upgrades
    let upgrades = this.state.upgrades
    //add new upgrade
    upgrades.push(id)
    //update state
    this.setState((prevState)=>{
      return{
        upgrades: upgrades 
      }
    })
    //code specific to each upgrade goes here if it doesn't fit in a specific component
    //box key x1 upgrade
    if(id == 1){
      this.changeKeys(1)
    }
    //box key x5 upgrade
    if(id == 7){
      this.changeKeys(5)
    }
    //barter lessons upgrade
    if(id == 4){
      this.changeValue(0.15)
    }
    //flea market apprenticeship upgrade
    if(id == 17){
      this.changeValue(0.30)
    }
    //fafnir's tongue upgrade
    if(id == 10){
      this.changeValue(0.666)
    }
    //QuickRoller I upgrade
    if(id == 5){
      this.changeSpeed(0.25)
    }
    //QuickRoller II upgrade
    if(id == 8){
      this.changeSpeed(0.50)
    }
    //Murcurys Treads upgrade
    if(id == 11){
      this.changeSpeed(0.666)
    }
  }
  purchaseUpgrade(id,cost){
    //console.log("buy " + id)
    //check to see if there is enough gold
    if(this.state.gold >= cost){
    //subtract cost of upgrade from total gold
      this.changeGold(-1*cost)
      this.unlockUpgrade(id)
      if(id != 1 && id != 7){
        this.notify('Upgrade Unlocked!')
      }
    }
    else{
      this.notify('Not Enough Gold! Need ' + (cost-this.state.gold) + ' more.')
    }

    //create notification if failed or succeeded purchase

    return null


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
  }
   
  render(){

    return (
      //provide access to state to all components inside the <UserProvider> Tag
      <UserProvider value={this.state}>
<<<<<<< Updated upstream

=======
      {this.state.scene === "Main Menu" ? <Mainmenu  sceneSwitch={this.sceneSwitch}/> : ""}
      {this.state.scene === "Win" ? <Winscreen newGamePlusLevel={this.state.newGamePlusLevel} sceneSwitch={this.sceneSwitch}/> : ""}
      {this.state.scene === "Game" || this.state.scene === "ContinueGame" || this.state.scene === "NewGamePlus" ? 
>>>>>>> Stashed changes
      <div className="App">
        <Navbar save={this.saveGame} reset={this.resetGameSave}/>
        {this.state.loggedIn &&
          <MainAppContainer  
            upgradeHandler={this.purchaseUpgrade} 
            checkUpgrade={this.checkUpgrade} 
            changeKeys={this.changeKeys} 
            insertInventoryItem={this.insertInventoryItem}
            removeInventoryItem={this.removeInventoryItem}
          />
        }
        
      </div>

      </UserProvider>
    );
  }
}

export default App;
