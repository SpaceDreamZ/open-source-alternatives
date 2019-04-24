import React, { Component } from "react";
import AppItem from "./AppItem";
import securityData from "./securityData";

class Security extends Component {
  constructor(){
    super()
    this.state = {
      apps: securityData
    }
  }

  render() {
    const securityItems = this.state.apps.map(item => <AppItem key={item.id} item={item} />)

    return (
      <div>
      {securityItems}
      </div>
    )
  }
}

export default Security;