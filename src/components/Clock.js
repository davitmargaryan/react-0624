import React from "react";

const Clock = ({ asd, isClockClassShown, showHideClockClassCpm }) => {
  console.log("Clock component rendered");
  const time = new Date().toLocaleTimeString();

  return (
    <p>
      <h3>ClockClass cpm is {isClockClassShown ? "shown" : "hidden"}</h3>
      this is Clock <strong>function</strong> component
      <div>this time is - {time}</div>
      <div>{asd}</div>
    </p>
  );
};

export default Clock;

export class ClockClass extends React.Component {
  constructor(...props) {
    // console.log("ClockClass constructor called");
    super(...props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      someNumber: 111,
    };
  }

  componentDidMount() {
    // console.log("ClockClass componentDidMount called");
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      // console.log(`interval called with new time - ${this.state.time}`);
    }, 1000);
  }

  componentDidUpdate() {
    // console.log("ClockClass componentDidUpdate called");
  }

  componentWillUnmount() {
    // console.log("ClockClass componentWillUnmount called");
    clearInterval(this.intervalId);
  }

  render() {
    // console.log("Clock class render method called");

    const { asd } = this.props;
    const { time, someNumber } = this.state;
    return (
      <p>
        this is Clock <strong>class</strong> component
        <div>this time is - {time}</div>
        <div>{asd}</div>
        <div>
          <button
            onClick={() =>
              this.setState({
                someNumber: this.state.someNumber - 1,
              })
            }
          >
            -
          </button>
          <span>{someNumber}</span>
          <button
            onClick={() =>
              this.setState({
                someNumber: this.state.someNumber + 1,
              })
            }
          >
            +
          </button>
        </div>
      </p>
    );
  }
}
