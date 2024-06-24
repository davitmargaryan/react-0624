import React from "react";
import Clock, { ClockClass } from "./components/Clock";
import Asd from "./components/Asd";

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
    console.log("App component rendered");

    return (
      <div>
        {/* <h1 id="asdasd">hello</h1> */}
        <Asd />
        <Clock />
        <button onClick={this.onToggleBtnClick}>
          {this.state.showClockClassCpm ? "Hide" : "Show"}
        </button>
        {this.state.showClockClassCpm && <ClockClass asd={123} />}
      </div>
    );
  }
}

export default App;
