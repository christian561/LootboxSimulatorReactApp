import React from 'react'
import MainApp from './MainApp'

class MainAppContainer extends React.Component {
  constructor(props){
    super(props)

    this.state ={
     
    }
    //anytime using a method with setState you want to bind it to the class
    //this.toggleLogin = this.toggleLogin.bind(this)
  }
  render(){
    return (
      <MainApp 
        data={this.props.data}
        scrap={this.props.scrap}
        trash={this.props.trash}
        upgrades={this.props.data.upgrades}
        inventory={this.props.inventory}
        upgradeHandler={this.props.upgradeHandler}  
        checkUpgrade={this.props.checkUpgrade}  
        changeKeys={this.props.changeKeys}
        changeGold={this.props.changeGold}
        changeLootboxesOpened={this.props.changeLootboxesOpened}
        changeReaperKeys={this.props.changeReaperKeys} 
        insertInventoryItem={this.props.insertInventoryItem}
        removeInventoryItem={this.props.removeInventoryItem}
        sellAll={this.props.sellAll}
        notify={this.props.notify}
        countItemsByGrade={this.props.countItemsByGrade}
        removeInventoryItemsByGrade={this.props.removeInventoryItemsByGrade}
        getSoulUpgradeCount={this.props.getSoulUpgradeCount}
        unlockSoulUpgrade={this.props.unlockSoulUpgrade}
      />

    );
  }
}

export default MainAppContainer;
