
import React from 'react';
import logo from './logo.svg';

//https://www.npmjs.com/package/simple-crypto-js
import SimpleCrypto from "simple-crypto-js";

//App.js
import './App.css'
import Winscreen from './Winscreen'
import Mainmenu from './Mainmenu'
import Navbar from './Navbar'
import Instructions from './instructions'
import Achievements from './Achievements'
import ChangeLog from './ChangeLog'
import MainAppContainer from './MainAppContainer'

class App extends React.Component {
  constructor(){
    super()

    //initial encryption key generation
    var _secretKey = "some-unique-key"
    window.simpleCrypto = new SimpleCrypto(_secretKey)
    

    this.state ={
      //todoData: TodoItemData,
      loggedIn: false,
      save:"",
      notifications:[],
      upgrades:[],
      soulUpgrades : [],
      trash:[],
      scene:"Main Menu",
      showInstructions: true,
      notificationCount:0
    }

    //anytime using a method with setState you want to bind it to the class
    //this.toggleLogin = this.toggleLogin.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
    this.saveGame = this.saveGame.bind(this)
    this.purchaseUpgrade = this.purchaseUpgrade.bind(this)
    this.changeGold = this.changeGold.bind(this)
    this.unlockUpgrade = this.unlockUpgrade.bind(this)
    this.unlockSoulUpgrade = this.unlockSoulUpgrade.bind(this)
    this.getSoulUpgradeCount = this.getSoulUpgradeCount.bind(this)
    this.checkUpgrade = this.checkUpgrade.bind(this)
    this.resetGameSave = this.resetGameSave.bind(this)
    this.loadGameSave = this.loadGameSave.bind(this)
    this.changeKeys = this.changeKeys.bind(this)
    this.changeScrap = this.changeScrap.bind(this)
    this.changeReaperKeys = this.changeReaperKeys.bind(this)
    this.changeSpeed = this.changeSpeed.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.changeLuck = this.changeLuck.bind(this)
    this.changeLootboxesOpened = this.changeLootboxesOpened.bind(this)
    this.changeRecycledItems = this.changeRecycledItems.bind(this)
    this.changeHellshardsSpent = this.changeHellshardsSpent.bind(this)
    this.changeSoulsSpent = this.changeSoulsSpent.bind(this)
    this.changeHighestValueSold = this.changeHighestValueSold.bind(this)
    this.changeKingKappaRefunds = this.changeKingKappaRefunds.bind(this)
    this.changeItemsWon = this.changeItemsWon.bind(this)
    this.changeDiscoveredItems = this.changeDiscoveredItems.bind(this)
    this.changeAchievements = this.changeAchievements.bind(this)
    this.insertInventoryItem = this.insertInventoryItem.bind(this)
    this.refillLootboxes = this.refillLootboxes.bind(this)
    this.removeInventoryItem = this.removeInventoryItem.bind(this)
    this.searchInventory = this.searchInventory.bind(this)
    this.countItemsByGrade = this.countItemsByGrade.bind(this)
    this.drink = this.drink.bind(this)
    this.removeInventoryItemsByGrade = this.removeInventoryItemsByGrade.bind(this)
    this.sellAll = this.sellAll.bind(this)
    this.sceneSwitch = this.sceneSwitch.bind(this)
    this.toggleInstructions = this.toggleInstructions.bind(this)
    this.toggleAchievements = this.toggleAchievements.bind(this)
    this.toggleChangeLog = this.toggleChangeLog.bind(this)
    this.getAchievementData = this.getAchievementData.bind(this)
    this.checkAchievement = this.checkAchievement.bind(this)
  }

  sceneSwitch(scene){
    this.setState({
      scene:scene
    })
    if(scene === "Game"){
      //reset game without prompt
      this.resetGameSave(true)
      this.loadGameSave()
    }
    if(scene === "ContinueGame"){
      this.loadGameSave()
      this.setState({showInstructions: false})
      this.setState((prevState)=>{return{continueCount:prevState.continueCount + 1}})
    }
    
    if(scene === "NewGamePlus"){
      this.setState({
        showInstructions: false
      })
      //keep old level while resetting game
      let level = this.state.newGamePlusLevel
      let valueMultiplier = (this.state.valueMultiplier*(level*2)) //x2, x4, x6, x8 of current value
      //go up a level
      level = level + 1
      //start a new game
      //reset game without prompt
      this.resetGameSave(true)
      this.loadGameSave()
      //set newgameplus level to incremented level
      this.setState({newGamePlusLevel:level, valueMultiplier: valueMultiplier})
    }
  }

  //hide/show instructions by toggling boolean in state
  toggleInstructions(){
    this.setState((prevState)=>{
      //!!!make sure you use curly braces for the return statement if you are returning an object
      return{
        showInstructions: !this.state.showInstructions,
        showAchievements: false,
        showChangeLog: false
      }
    })
  }
  //hide/show achievements by toggling boolean in state
  toggleAchievements(){
    this.setState((prevState)=>{
      //!!!make sure you use curly braces for the return statement if you are returning an object
      return{
        showAchievements: !this.state.showAchievements,
        showInstructions: false,
        showChangeLog:false
      }
    })

  }
  //hide/show change log 
  toggleChangeLog(){
    this.setState((prevState)=>{
      //!!!make sure you use curly braces for the return statement if you are returning an object
      return{
        showChangeLog: !this.state.showChangeLog,
        showInstructions: false,
        showAchievements: false
      }
    })

  }
   //anytime using a method with setState you want to bind it to the class
  toggleLogin(){
    console.log("Save Found or Created.. Logged in successfully")
    var saveData = JSON.parse(window.simpleCrypto.decrypt(window.localStorage.getItem("playerData")))
    //console.log(saveData.speedMultiplier)
    let speed = saveData.speedMultiplier
    let luckMultiplier = saveData.luckMultiplier
    let valueMultiplier = saveData.valueMultiplier
    //access previous state
    this.setState((prevState)=>{
      return{
      loggedIn: true,
      gold : Number(saveData.gold),
      keys : Number(saveData.keys),
      scrap : Number(saveData.scrap),
      reaperKeys : Number(saveData.reaperKeys),
      inventory: saveData.inventory,
      upgrades : saveData.upgrades,
      soulUpgrades : saveData.soulUpgrades,
      speedMultiplier:saveData.speedMultiplier,
      luckMultiplier:luckMultiplier,
      valueMultiplier:valueMultiplier,
      newGamePlusLevel:saveData.newGamePlusLevel,
      drunk:false,
      trash:[],
        lootboxesOpened:saveData.lootboxesOpened,
        recycledItems:saveData.recycledItems,
        moneySpent:saveData.moneySpent,
        hellshardsSpent:saveData.hellshardsSpent,
        soulsSpent:saveData.soulsSpent,
        kingKappaRefunds:saveData.kingKappaRefunds,
        continueCount:saveData.continueCount,
        highestValueSold:saveData.highestValueSold,
        discoveredItems:saveData.discoveredItems,
        achievements:saveData.achievements,
          trashItemsWon:saveData.trashItemsWon,
          commonItemsWon:saveData.commonItemsWon,
          rareItemsWon:saveData.rareItemsWon,
          epicItemsWon:saveData.epicItemsWon,
          legendaryItemsWon:saveData.legendaryItemsWon,
      }
    })
    //console.log(this.state.speedMultiplier)
  }
  //demon bag upgrade sells all items in bag for $1000 fee and calls this function to do so
  sellAll(){
      
    
      
      let inventoryItems = this.state.inventory
      
      let totalValue = 0
      let blacklist = []
      
      let count = inventoryItems.length
      //loop through all items in the inventory from the end
      for(var i=count;i>0;i--){
        
        //skip items without a numeric sell value
        if(Number.isInteger(Math.round(inventoryItems[i-1].value))){
          //sell the items individually
          let count2 = inventoryItems[i-1].count
            for(var j=count2;j>0;j--){
             totalValue += inventoryItems[i-1].value*this.state.valueMultiplier*this.state.newGamePlusLevel
             this.removeInventoryItem(i-1)
            } 
        }
      }
      //had to reimplement the shop price function here
      let cost = this.checkUpgrade(14) ? 750 : 1000
      this.changeGold(totalValue-cost)
    
  }
  insertInventoryItem(item){
    let newInventory = this.state.inventory.map(l => Object.assign({}, l))
    let itemCount = 0
    //check if copy of item with matching id and grade exist already
    newInventory = newInventory.map(function(item2){
      if(item2.id == item.id && item2.grade == item.grade){
        //matching code here
        item2.count++
        itemCount++

      }
      return item2
    })  
      console.log("inventory1")
      console.log(newInventory)
      console.log(itemCount)
      //if not insert into array
      if(itemCount === 0){
           newInventory.push(item)
      }
      
      console.log(newInventory)
      this.changeItemsWon(item.grade,1)
     

      this.changeDiscoveredItems(item.id)
      
    //access previous state
    this.setState({
        inventory: newInventory
    })
      
  }
  //remove inventory items by grade and how many(for legendary and crafting upgrades)
  removeInventoryItemsByGrade(grade,amount){

    let newInventory = this.state.inventory.map(l => Object.assign({}, l))
    let newTrash = this.state.trash.map(l => Object.assign({}, l))

    let removedItemCount = 0
    //let itemIndexesToRemove = []
    //console.log("newInventory: " + newInventory)
    newInventory = newInventory.map((item,index)=>{
     let counter =item.count
      for(var i = 0; i<item.count; i++){
        if(removedItemCount < amount){
          if(item.grade === grade){
            newTrash.push(item)

            removedItemCount++
            counter--
            console.log(removedItemCount + " " + item.count)
          }
        }
      }
      item.count = counter
      return item
    })
    if(grade ==="R")
      this.changeHellshardsSpent(amount)
    if(grade==="Z")
      this.changeSoulsSpent(amount)
   let newInventory1 = []
    //remove items you no longer have
    newInventory1=newInventory.filter(function(item){
      if(item.grade == grade){
        return item.count > 0
      }
      return true
    })

    //update state
    this.setState({inventory: newInventory1,trash:newTrash})
  }
  //handle selling items
  removeInventoryItem(index){
    console.log("removed")
    console.log(this.state.inventory[index])
    let newInventory = this.state.inventory
    console.log(newInventory)
    let goldGained = Math.round(newInventory[index].value*this.state.valueMultiplier)

    //add gold to state
    this.changeGold(goldGained)
    this.changeHighestValueSold(goldGained)
    //check for recycler upgrade
    if(goldGained <1){
      this.recycle()
    }
    else{
      this.notify("Sold " + this.state.inventory[index].name + " for $" + Math.floor(goldGained))
    }
    
    //subtract one from the item count
    newInventory[index].count--
      
    //remove item from array by index

    if(newInventory[index].count <= 0){
      newInventory.splice(index,1)
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
      this.notify("Hydraulic Pressed!")
      this.changeKeys(1)
      //track total recycled items
      this.changeRecycledItems(1)
      return ;
    }

    //is recycler unlocked
    if(this.checkUpgrade(3)){
      //50% chance to get an item
      let randomNumber = Math.round(Math.random())
      if(randomNumber){
        this.notify("Recycled!")
        this.changeKeys(1)
        //track total recycled items
        this.changeRecycledItems(1)
      }
      else{
        this.changeScrap(1)
      }
      return ;
    }
    
    //default with no upgrades
    //give player scrap metal
    this.changeScrap(1)
    
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
  resetGameSave(hidePrompt){
      if(hidePrompt == true){
        this.notify("Game reset!")
        window.localStorage.clear()
        this.loadGameSave() 
        return
      }
    
      //reset with prompt
      if (window.confirm('Do you want to reset your game?\n\nWARNING: EVERYTHING WILL BE DELETED!')) {
            this.notify("Game reset!")
            window.localStorage.clear()
            this.loadGameSave() 
        } 
      
      else{
        this.notify("Nevermind..")
      }
    
    
    
  }
  loadGameSave(){

    //check local storage for save data
     if(window.localStorage.getItem("playerData") != null){
        //log player in if save exists
        this.toggleLogin()
     }
     else{
        //instantiate new save
        let playerData = {
          gold : 0,
          keys : 10,
          scrap : 0,
          reaperKeys:0,
          upgrades : [],
          soulUpgrades : [],
          inventory : [],
          speedMultiplier: 1,
          luckMultiplier: 0.8,
          valueMultiplier:0.95,
          newGamePlusLevel:1,
            lootboxesOpened:0,
            recycledItems:0,
            moneySpent:0,
            hellshardsSpent:0,
            soulsSpent:0,
            kingKappaRefunds:0,
            continueCount:0,
            highestValueSold:0,
            discoveredItems:[],
            achievements:[],
            trashItemsWon:0,
            commonItemsWon:0,
            rareItemsWon:0,
            epicItemsWon:0,
            legendaryItemsWon:0,
            
          
        }
        window.localStorage.setItem("playerData", window.simpleCrypto.encrypt(JSON.stringify(playerData))) 
        this.toggleLogin()
     }
     
  }
    

  

    

  saveGame(){
    //create "save" from only necessary to save state values
    let playerData = {
      gold : this.state.gold,
      keys : this.state.keys,
      scrap : this.state.scrap,
      reaperKeys:this.state.reaperKeys, 
      upgrades : this.state.upgrades, 
      inventory : this.state.inventory, 
      speedMultiplier: this.state.speedMultiplier, 
      luckMultiplier: this.state.luckMultiplier, 
      valueMultiplier: this.state.valueMultiplier, 
      newGamePlusLevel: this.state.newGamePlusLevel,
      soulUpgrades : this.state.soulUpgrades,
      //Could've wrapped these stats up into an object, but this seemed simpler
        lootboxesOpened:this.state.lootboxesOpened,
        recycledItems:this.state.recycledItems,
        moneySpent:this.state.moneySpent,
        hellshardsSpent:this.state.hellshardsSpent,
        soulsSpent:this.state.soulsSpent,
        kingKappaRefunds:this.state.kingKappaRefunds,
        continueCount:this.state.continueCount,
        highestValueSold:this.state.highestValueSold,
        discoveredItems:this.state.discoveredItems,
        achievements:this.state.achievements,
          trashItemsWon:this.state.trashItemsWon,
          commonItemsWon:this.state.commonItemsWon,
          rareItemsWon:this.state.rareItemsWon,
          epicItemsWon:this.state.epicItemsWon,
          legendaryItemsWon:this.state.legendaryItemsWon,

    }
    

    //encrypt save data string
    var encryptedPlayerData = window.simpleCrypto.encrypt(JSON.stringify(playerData))

    //put encrypted save data into local storage
    window.localStorage.setItem("playerData", encryptedPlayerData) 
    this.notify("Game saved!")
  }
    //change state method
  changeGold(amount){
    //find new balance
    let updatedBalance = this.state.gold + amount

    //update state
    this.setState({
        gold : updatedBalance
      })
    //track total money spent
    if(amount < 0){
      let moneySpent = this.state.moneySpent
      this.setState({moneySpent:(moneySpent+(amount*(-1)))})
    } 
  }
    //change state method
  changeValue(amount){
    this.setState((prevState)=>{
      return{
        valueMultiplier : prevState.valueMultiplier + amount
      }
    })
      this.notify('Sell value increased by ' + (amount*100).toFixed(1) + "%")
    }
    
    //change state method
  changeSpeed(amount){
    this.setState((prevState)=>{
      return{
        speedMultiplier : prevState.speedMultiplier + amount
      }
    })
      this.notify('Speed increased by ' + amount*100 + "%")
    }
    //change state method
  changeLuck(amount){
    console.log(1+ amount)
    this.setState((prevState)=>{
      return{
        luckMultiplier : prevState.luckMultiplier + amount
      }
    })

      this.refillLootboxes()
      this.notify('Luck increased by ' + amount*100 + "%")
    }
    //change state method
  changeLootboxesOpened(amount){
    this.setState((prevState)=>{
      return{
        lootboxesOpened : prevState.lootboxesOpened + amount
      }
    })
    }
    //change state method
  changeRecycledItems(amount){
    this.setState((prevState)=>{
      return{
        recycledItems : prevState.recycledItems + amount
      }
    })
    }
    //change state method
  changeHellshardsSpent(amount){
    this.setState((prevState)=>{
      return{
        hellshardsSpent : prevState.hellshardsSpent + amount
      }
    })
    }
    //change state method
  changeSoulsSpent(amount){
    this.setState((prevState)=>{
      return{
        soulsSpent : prevState.soulsSpent + amount
      }
    })
    }
    //change state method
    changeHighestValueSold(newValue){
    let highestValueSold = this.state.highestValueSold
    if(newValue > highestValueSold){
      this.setState((prevState)=>{
        return{
          highestValueSold : newValue
        }
      })
    }
    }
    //change state method
    changeKingKappaRefunds(amount){
    this.setState((prevState)=>{
        return{
          kingKappaRefunds : prevState.kingKappaRefunds+amount
        }
      })
    }
    changeItemsWon(grade,amount){
      let A,B,C,D,F = 0
      if(grade === "A")
        this.setState((prevState)=>{return{legendaryItemsWon : prevState.legendaryItemsWon+amount}})
      if(grade === "B")
        this.setState((prevState)=>{return{epicItemsWon : prevState.epicItemsWon+amount}})
      if(grade === "C")
        this.setState((prevState)=>{return{rareItemsWon : prevState.rareItemsWon+amount}})
      if(grade === "D")
        this.setState((prevState)=>{return{commonItemsWon : prevState.commonItemsWon+amount}})
      if(grade === "F")
        this.setState((prevState)=>{return{trashItemsWon : prevState.trashItemsWon+amount}})
    }
    changeDiscoveredItems(id){
        let discoveredItems = [...this.state.discoveredItems]
      
      
      if(discoveredItems.indexOf(id) !== -1){
        //item already found, do nothing
        return null
      }
      else{
        //add to discovered items
        discoveredItems.push(id)
        this.setState(()=>{return{discoveredItems:discoveredItems}})
      }
    }
    changeAchievements(id){
      let achievements = [...this.state.achievements]
      if(achievements.indexOf(id) !== -1){
        //item already found, do nothing
        return null
      }
      else{
        //add to discovered items
        achievements.push(id)
        this.setState(()=>{return{achievements:achievements}})
      }
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
    changeScrap(amount){
      
      let updatedBalance = this.state.scrap + amount
      //make sure you have enough keys first
      if(updatedBalance >-1){
        if(amount<0){
        this.notify(amount +' Scrap')
        }
        else{

        this.notify('+'+amount +' Scrap')
        }
        //update key balance
      this.setState((prevState)=>{ //!!!make sure you use curly braces for the return statement if you are returning an object
        return{
          scrap : updatedBalance
        }
      })
        return true
        
      }
      else{
        
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
  checkAchievement(achievementID){

    //get upgrades
    let achievements = this.state.achievements
    let flag = false

    //unlock default boxes with parentUpgradeID:0
    if(achievementID === 0){
      flag = true
    }

    //check all currently owned upgrades
    achievements.map((unlockedAchievementID)=>{
      if(unlockedAchievementID == achievementID){
        flag = true
      }
      
    })
    //no match is found
    console.log("achievement is " + flag)
    return flag
  }
  unlockSoulUpgrade(name){
    this.setState((prevState)=>{
      prevState.soulUpgrades.push(name) 
        return{
          soulUpgrades: prevState.soulUpgrades
        }
      })
  }
  getSoulUpgradeCount(name){
    let count = 0
    let soulUpgrades = this.state.soulUpgrades
    console.log("soulUPgrades " + soulUpgrades)
    soulUpgrades.map((savedBoxName)=>{

      if(name === savedBoxName){
        count++
      }
      
    })
console.log(count)
    return count
  }
  getAchievementData(){
    //very important to keep this list in the same order as the achievements are listed when adding new achievements
    //would've had it match an id but it isn't necessary once all the achievements are added
    let achievementsDataList=[this.state.lootboxesOpened,
                              this.state.trashItemsWon,
                              this.state.commonItemsWon,
                              this.state.rareItemsWon,
                              this.state.epicItemsWon,
                              this.state.legendaryItemsWon,
                              this.state.recycledItems
                              ]
    return achievementsDataList
  }
  unlockUpgrade(id){

    //get upgrades
    let upgrades = this.state.upgrades
    //add new upgrade if isnt a repurchasable upgrade
    if(id !== 1 && id !== 7 && id !== 12 && id !== 20 && id !==23 && id !== 24 && id !== 28){
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
    //sell all items
    if(id == 24){
      this.sellAll()
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
    //reaper upgrade
    if(id == 16){
      this.refillLootboxes()
    }
    //luck upgrade 1
    if(id == 25){
      this.changeLuck(0.05)
      //this.refillLootboxes()
    }
    //luck upgrade 2
    if(id == 26){
      this.changeLuck(0.1)
      //this.refillLootboxes()
    }
    //luck upgrade 3
    if(id == 27){
      this.changeLuck(0.2)
      //this.refillLootboxes()
    }
    //Craft Reaper key
    if(id == 20){
      this.removeInventoryItemsByGrade('R',3)
      
      this.changeReaperKeys(1)
    }
    //Craft normal key with scrap
    if(id == 28){
      this.changeScrap(-2)
      
      this.changeKeys(1)
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
      
      let matchingItemCount = this.countItemsByGrade('A')

      if(matchingItemCount >= 20){
        this.unlockUpgrade(id)
      }
      else{

        this.notify('The gods are not yet pleased.. (' + matchingItemCount + '/20 Legendaries)')
      }
    }
    //check for win condition 5 souls
    else if(id === 23){
      let matchingItemCount = this.countItemsByGrade('Z')
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
      //let matchingItemCount = this.searchInventory('R').length
      let matchingItemCount = this.countItemsByGrade('R')

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
    //check if crafting a normal key
    else if(id===28){
      //count owned reaper shards
      //let matchingItemCount = this.searchInventory('R').length
      let matchingItemCount = this.state.scrap

      //check you have atleast 3 shards 
      if(matchingItemCount >= 2){
        //craft
        this.unlockUpgrade(id)
      }
      else{
        //dont craft, read error
        this.notify('Not enough scrap.. (' + matchingItemCount + '/2 Scrap)')
      }
    }
    else{
      //if its not immortal do the normal upgrades
      //check to see if there is enough gold
      if(this.state.gold >= cost ){
        //25% refund if king kappa is unlocked

        if(this.checkUpgrade(14) && id !== 14){
          let amountSaved = cost*0.25
          this.changeGold(-1*(cost-amountSaved))
          this.changeKingKappaRefunds(amountSaved)
          this.notify("King Kappa refunded you $" + amountSaved + "!")
        }
        //normal purchase with no upgrades
        else{
          //subtract cost of upgrade from total gold
          this.changeGold(-1*cost)
        }
        this.unlockUpgrade(id)
        if(id !== 1 && id !== 7 && id !== 12 && id !== 24 ){
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
  refillLootboxes(){
    this.setState({refill:true})
      const timer = setTimeout(function(){
         this.setState({refill:false})
      }.bind(this),1); 
     return () => clearTimeout(timer);
    
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
  //return a number value of all items in the inventory with a matching grade
  countItemsByGrade(grade){
    let inventory = this.state.inventory
    let gradeCount = 0

    //find items with matching grades 
    inventory.map((item)=>{
      if(item.grade === grade){
        gradeCount += item.count
      }
    })
    return gradeCount
  }

  //add notification to notifications list

  notify(notification){
    
    //access previous state

    this.setState((prevState)=>{

      let notifications = [...prevState.notifications]
      
      if(prevState.notifications.length > 25){ 
      //make room for new notifications and prevent list from growing
        notifications.push({notification:notification,key:prevState.notificationCount + 1})
        notifications.splice(0,1) 
      }
      else{
        notifications.push({notification:notification,key:prevState.notificationCount + 1})
      }
      return{
        notifications: notifications,
        notificationCount: prevState.notificationCount + 1
      }
    })
  }
  

  render(){
    //console.log(this.state.scene)
    return (
      <>
      {this.state.scene === "Main Menu" ? <Mainmenu  sceneSwitch={this.sceneSwitch}/> : ""}

      {this.state.scene === "Win" ? <Winscreen newGamePlusLevel={this.state.newGamePlusLevel} sceneSwitch={this.sceneSwitch}/> : ""}

      {this.state.scene === "Game" || this.state.scene === "ContinueGame" || this.state.scene === "NewGamePlus" ? 
      //provide access to state to all components inside the <UserProvider> Tag
      
      <div className="App">
        <Navbar save={this.saveGame} 
                reset={this.resetGameSave} 
                toggleInstructions={this.toggleInstructions} 
                toggleAchievements={this.toggleAchievements}
                toggleChangeLog={this.toggleChangeLog}
                showSparkles={this.state.valueMultiplier < 0.956 && this.state.lootboxesOpened >0}
        />
        {this.state.showInstructions  ? <Instructions toggleInstructions={this.toggleInstructions}/> : ""} 
        {this.state.showAchievements  ? <Achievements 
                                                      changeAchievements={this.changeAchievements}
                                                      checkAchievement={this.checkAchievement}
                                                      toggleAchievements={this.toggleAchievements} 
                                                      data={this.getAchievementData()}  
                                                      changeLuck={this.changeLuck}  
                                                      changeSpeed={this.changeSpeed}  
                                                      changeValue={this.changeValue}
                                                      /> :  ''} 
        {this.state.showChangeLog  ? <ChangeLog toggleChangeLog={this.toggleChangeLog}/> : ""} 
        
        {/*<img src="https://christianlong.design/assets/LootboxSimulator/bonus.png" className={"bonus"} />*/}
        {this.state.loggedIn &&
          <MainAppContainer  
            data={this.state}
            inventory={this.state.inventory}
            upgradeHandler={this.purchaseUpgrade} 
            checkUpgrade={this.checkUpgrade} 
            scrap={this.state.scrap}
            changeKeys={this.changeKeys}  
            changeGold={this.changeGold}
            changeReaperKeys={this.changeReaperKeys} 
            changeLootboxesOpened={this.changeLootboxesOpened}
            insertInventoryItem={this.insertInventoryItem}
            removeInventoryItem={this.removeInventoryItem}
            removeInventoryItemsByGrade={this.removeInventoryItemsByGrade}
            sellAll={this.sellAll}
            notify={this.notify}
            countItemsByGrade={this.countItemsByGrade}
            getSoulUpgradeCount={this.getSoulUpgradeCount}
            unlockSoulUpgrade={this.unlockSoulUpgrade}
          />
        }
        
      </div>
      
    : <></>}</>
      
    );
  }
}

export default App;
