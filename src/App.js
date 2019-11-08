
import React from 'react';
import logo from './logo.svg';
//App.js

import './App.css'
import { UserProvider } from './UserContext'
import Winscreen from './Winscreen'
import Mainmenu from './Mainmenu'
import Navbar from './Navbar'
import MainAppContainer from './MainAppContainer'

class App extends React.Component {
  constructor(){
    super()

    this.state ={
      //todoData: TodoItemData,
      loggedIn: false,
      save:"",
      notifications:[],
      upgrades:[],
      trash:[],
      scene:"Main Menu"
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
    this.changeReaperKeys = this.changeReaperKeys.bind(this)
    this.changeSpeed = this.changeSpeed.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.insertInventoryItem = this.insertInventoryItem.bind(this)
    this.removeInventoryItem = this.removeInventoryItem.bind(this)
    this.searchInventory = this.searchInventory.bind(this)
    this.drink = this.drink.bind(this)
    this.removeInventoryItemsByGrade = this.removeInventoryItemsByGrade.bind(this)
    this.sellAll = this.sellAll.bind(this)
    this.sceneSwitch = this.sceneSwitch.bind(this)
  }
  sceneSwitch(scene){
    this.setState({
      scene:scene
    })
    if(scene === "Game"){
      this.resetGameSave()
      this.loadGameSave()
    }
    if(scene === "ContinueGame"){
      this.loadGameSave()
    }
    
    if(scene === "NewGamePlus"){
      //keep old level while resetting game
      let level = this.state.newGamePlusLevel
      
      //go up a level
      level = level + 1
      //start a new game
      this.resetGameSave()
      this.loadGameSave()
      //set newgameplus level to incremented level
      this.setState({newGamePlusLevel:level})
    }
  }
   //anytime using a method with setState you want to bind it to the class
  toggleLogin(){
    console.log("Save Found or Created.. Logged in successfully")
    var saveData = JSON.parse(window.localStorage.getItem("playerData"))
    console.log(saveData.speedMultiplier)
    let speed = saveData.speedMultiplier
    let valueMultiplier = saveData.valueMultiplier
    //access previous state
    this.setState((prevState)=>{
      //!!!make sure you use curly braces for the return statement if you are returning an object
      return{
      loggedIn: true,
      gold : Number(saveData.gold),
      keys : Number(saveData.keys),
      reaperKeys : Number(saveData.reaperKeys),
      inventory: saveData.inventory,
      upgrades : saveData.upgrades,
      speedMultiplier:speed,
      valueMultiplier:valueMultiplier,
      newGamePlusLevel:saveData.newGamePlusLevel,
      drunk:false,
      trash:[]
      }
    })
    console.log(this.state.speedMultiplier)
  }
  //demon bag upgrade sells all items in bag for $1000 fee
  sellAll(){
      
    if(this.state.gold >= 1000){
      
      let inventoryItems = this.state.inventory
      
      let totalValue = 0
      let blacklist = []
      
      //loop through all items in the inventory from the end
      inventoryItems.map((item,index)=>{
        //skip items without sell value
        if(Number.isInteger(Math.round(item.value))){
          totalValue += item.value*this.state.valueMultiplier*this.state.newGamePlusLevel
          //sell the item
          this.removeInventoryItem(index)
        }})

      let count = inventoryItems.length
      //loop through all items in the inventory from the end
      for(var i=count;i>0;i--){
        
        //skip items without sell value
        if(Number.isInteger(Math.round(inventoryItems[i-1].value))){
          //sell the item
          this.removeInventoryItem(i-1)
        }
      }
         
        
      
      this.changeGold(totalValue-1000)
      
      return null
      
    }
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
  //remove inventory items by grade and how many(for legendary and crafting upgrades)
  removeInventoryItemsByGrade(grade,amount){
    let newInventory = this.state.inventory
    let newTrash = this.state.trash
    let removedItemCount = 0
    newInventory.map((item,index)=>{
      if(removedItemCount < amount){
        if(item.grade === grade){
          newTrash.push(newInventory[index])
          newInventory.splice(index,1)
          removedItemCount++
        }
      }
    })
    //update state
    this.setState({inventory: newInventory,trash:newTrash})
    console.log(this.state.trash)
  }
  //handle selling items
  removeInventoryItem(index){
    let newInventory = this.state.inventory
    let goldGained = Math.round(newInventory[index].value*this.state.valueMultiplier*this.state.newGamePlusLevel)

    //add gold to state
    this.changeGold(goldGained)

    //check for recycler upgrade
    if(goldGained <1){
      this.recycle()
    }
    else{
      this.notify("Sold " + this.state.inventory[index].name + " for $" + Math.floor(goldGained))
    }

    //remove item from array by index
    newInventory.splice(index,1)

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
      this.notify("Hydraulic Pressed!")
      this.changeKeys(1)
      return ;
    }

    //is recycler unlocked
    if(this.checkUpgrade(3)){
      //50% chance to get an item
      let randomNumber = Math.round(Math.random())
      if(randomNumber){
        this.notify("Recycled!")
        this.changeKeys(1)
      }
    }
    
  }
  drink(){
    //access previous state
    this.notify("You suddenly feel smashed")
    this.setState({drunk: true});
      const timer = setTimeout(function(){
         this.setState({drunk: false});
         this.notify("You sobered up")
      }.bind(this),20000); 
     return () => clearTimeout(timer);
    

    
  }
  resetGameSave(){
    this.notify("Game reset!")
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
        //instantiate new save
        let playerData = {gold : 0, keys : 5,reaperKeys:0, upgrades : [], inventory : [], speedMultiplier: 1, valueMultiplier:1,newGamePlusLevel:1}
        window.localStorage.setItem("playerData", JSON.stringify(playerData)) 
        this.toggleLogin()
     }
     
  }
    
  componentDidMount(){
    
  }
  

    

  saveGame(){
    this.notify("Game saved!")
    let playerData = {gold : this.state.gold, keys : this.state.keys,reaperKeys:this.state.reaperKeys, upgrades : this.state.upgrades, inventory : this.state.inventory, speedMultiplier: this.state.speedMultiplier, valueMultiplier: this.state.valueMultiplier, newGamePlusLevel: this.state.newGamePlusLevel}
    window.localStorage.setItem("playerData", JSON.stringify(playerData)) 
  }
    //change state method
  changeGold(amount){
    //find new balance
    let updatedBalance = this.state.gold + amount
    //update state
    this.setState({
        gold : updatedBalance
      })
    
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
    //change state method
    changeReaperKeys(amount){
      
      let updatedBalance = this.state.reaperKeys + amount
      //make sure you have enough keys first
      if(updatedBalance >-1){
        if(amount<0){
        this.notify(amount +' Reaper Key')
        }
        else{

        this.notify('+'+amount +' Reaper Key')
        }
        //update key balance
      this.setState((prevState)=>{ //!!!make sure you use curly braces for the return statement if you are returning an object
        return{
          reaperKeys : updatedBalance
        }
      })
        return true
        
      }
      else{
        this.notify('You need a reaper key!')
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
    //add new upgrade if its not a key or bacchus drink
    if(id !== 1 && id !== 7 && id !== 12 && id !== 20 && id !==23){
      upgrades.push(id)
      //update state
      this.setState((prevState)=>{
        return{
          upgrades: upgrades 
        }
      })
    }
    //code specific to each upgrade goes here if it doesn't fit in a specific component
    //box key x1 upgrade
    if(id == 1){
      this.changeKeys(1)
    }
    //box key x5 upgrade
    if(id == 7){
      this.changeKeys(5)
    }
    //drink with bacchus
    if(id == 12){
      this.drink()
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
    //Immortal Sacrifice upgrade
    if(id == 9){
      this.removeInventoryItemsByGrade('A',20)
    }
    //Craft Reaper key
    if(id == 20){
      this.removeInventoryItemsByGrade('R',3)
      this.changeReaperKeys(1)
    }
    //Win the game
    if(id == 23){
      //save game so player can reload save right before winning the game
      this.saveGame()
      this.removeInventoryItemsByGrade('Z',5)
      //switch to win screen after a few seconds so trash animation can show
      const timer = setTimeout(function(){
         this.sceneSwitch("Win")
      }.bind(this),6000); 
     return () => clearTimeout(timer);
    }
    
  }
  purchaseUpgrade(id,cost){
    //console.log("buy " + id)
    //check for immortal upgrade
    if(id === 9){
      let matchingItemCount = this.searchInventory('A').length
      if(matchingItemCount >= 20){
        this.unlockUpgrade(id)
      }
      else{

        this.notify('The gods are not yet pleased.. (' + matchingItemCount + '/20 Legendaries)')
      }
    }
    //check for win condition 5 souls
    else if(id === 23){
      let matchingItemCount = this.searchInventory('Z').length
      if(matchingItemCount >= 5){
        this.unlockUpgrade(id)
      }
      else{

        this.notify('You can\'t leave them behind! (' + matchingItemCount + '/5 Souls)')
      }
    }
    //check if crafting a reaper key
    else if(id===20){
      //count owned reaper shards
      let matchingItemCount = this.searchInventory('R').length
      //check you have atleast 3 shards 
      if(matchingItemCount >= 3){
        //craft
        this.unlockUpgrade(id)
      }
      else{
        //dont craft, read error
        this.notify('Not enough power to summon.. (' + matchingItemCount + '/3 Shards)')
      }
    }
    else{
      //if its not immortal do the normal upgrades
      //check to see if there is enough gold
      if(this.state.gold >= cost ){
        //25% refund if king kappa is unlocked
        if(this.checkUpgrade(14) && id !== 14){
          this.changeGold(cost*(-0.75))
          this.notify("King Kappa refunded you $" + cost*0.25 + "!")
        }
        //normal purchase with no upgrades
        else{
          //subtract cost of upgrade from total gold
          this.changeGold(-1*cost)
        }
        this.unlockUpgrade(id)
        if(id !== 1 && id !== 7 && id !== 12){
          this.notify('Upgrade Unlocked!')
        }
      }
      else{
        this.notify('Can\'t Afford! Need $' + Math.floor(cost-this.state.gold) + ' more.')
      }
    }
    //create notification if failed or succeeded purchase

    return null


  }
  //returns an array of all items in the inventory with a matching grade
  searchInventory(grade){
    let inventory = this.state.inventory
    let matchingItems = []
    //find items with matching grades
    inventory.map((item)=>{
      if(item.grade === grade){
        matchingItems.push(item)
      }
    })
    return matchingItems;
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
    console.log(this.state.scene)
    return (
      //provide access to state to all components inside the <UserProvider> Tag
      <UserProvider value={this.state}>
      {this.state.scene === "Main Menu" ? <Mainmenu  sceneSwitch={this.sceneSwitch}/> : ""}

      {this.state.scene === "Win" ? <Winscreen newGamePlusLevel={this.state.newGamePlusLevel + 1} sceneSwitch={this.sceneSwitch}/> : ""}

      {this.state.scene === "Game" || this.state.scene === "ContinueGame" || this.state.scene === "NewGamePlus" ? 
      <div className="App">
        <Navbar save={this.saveGame} reset={this.resetGameSave} />
        {this.state.loggedIn &&
          <MainAppContainer  
            upgradeHandler={this.purchaseUpgrade} 
            checkUpgrade={this.checkUpgrade} 
            changeKeys={this.changeKeys}  
            changeGold={this.changeGold}
            changeReaperKeys={this.changeReaperKeys} 
            insertInventoryItem={this.insertInventoryItem}
            removeInventoryItem={this.removeInventoryItem}
            sellAll={this.sellAll}
            notify={this.notify}
          />
        }
        
      </div>
    :<></>}
      </UserProvider>
    );
  }
}

export default App;
