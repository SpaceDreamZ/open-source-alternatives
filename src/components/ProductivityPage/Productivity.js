import React, {Component} from "react";
import AppItem from "../AppCards/AppItem";
import productivityData from "./productivtyData";

class Productivity extends Component {
  constructor(){
    super()
    this.state = {
      apps: productivityData
    }
  }

  render() {
    const productivityItems = this.state.apps.map(item => <AppItem key={item.id} item={item} />)

    return (
      <div>
      {productivityItems}
      </div>
    )
  }
}

export default Productivity;

