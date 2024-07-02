import React from "react";
import Clock, { ClockClass } from "./components/Clock";
import Asd from "./components/Asd";
import Form from "./components/Form";
import Parent from "./components/Parent";

class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      showClockClassCpm: true,
    };
  }

  onToggleBtnClick = () => {
    this.setState({
      showClockClassCpm: !this.state.showClockClassCpm,
    });
  };

  render() {
    return (
      <div>
        {/* <h1 id="asdasd">hello</h1>
        <Asd />
        <Clock
          isClockClassShown={this.state.showClockClassCpm}
          showHideClockClassCpm={this.onToggleBtnClick}
        />
        <button onClick={this.onToggleBtnClick}>
          {this.state.showClockClassCpm ? "Hide" : "Show"}
        </button>
        {this.state.showClockClassCpm && <ClockClass asd={123} />}
        <Form /> */}
        <Parent />
      </div>
    );
  }
}

export default App;
