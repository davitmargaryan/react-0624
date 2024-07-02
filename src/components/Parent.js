import React from "react";
import Child from "./Child";
import Child1 from "./Child1";

class Parent extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      childNumber: 20,
    };
  }

  incrementNumber = () =>
    this.setState({
      childNumber: this.state.childNumber + 1,
    });

  decrementNumber = () =>
    this.setState({
      childNumber: this.state.childNumber - 1,
    });

  render() {
    return (
      <div>
        <h1>I am Parent</h1>
        <button onClick={this.hideShowChild}>
          {this.state.showChild ? "HideChild" : "ShowChild"}
        </button>
        <div style={{ border: "1px solid black" }}>
          <Child number={this.state.childNumber} />
          <Child1
            incrementNumber={this.incrementNumber}
            decrementNumber={this.decrementNumber}
          />
        </div>
      </div>
    );
  }
}

export default Parent;
