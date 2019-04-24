import React, { Component } from "react";
import AppItem from "./AppItem";
import utilityData from "./utilityData";

class Utility extends Component {
  constructor(){
    super()
    this.state = {
      apps: utilityData
    }
  }

  render() {
    const utilityItems = this.state.apps.map(item => <AppItem key={item.id} item={item} />)

    return (
      <div>
      {utilityItems}
      </div>
    )
  }
}

export default Utility;