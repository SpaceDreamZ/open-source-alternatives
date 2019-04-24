import React, { Component } from "react";
import AppItem from "./AppItem";
import entertainmentData from "./entertainmentData";

class Entertainment extends Component {
  constructor(){
    super()
    this.state = {
      apps: entertainmentData
    }
  }

  render() {
    const entertainmentItems = this.state.apps.map(item => <AppItem key={item.id} item={item} />)

    return (
      <div>
      {entertainmentItems}
      </div>
    )
  }
}

export default Entertainment;