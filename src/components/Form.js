import React from "react";

class Form extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      value: "123",
      value1: "123",
      value2: "123",
      checked: true,
    };
  }

  onChange = (e, stateName) => {
    this.setState({
      [stateName]: e.target.value,
    });
  };

  onCheckboxChange = (e) =>
    this.setState({
      checked: e.target.checked,
    });

  onAddBtnClick = () => {
    console.log(this.state.value);
  };

  render() {
    const { value, value1, value2, checked } = this.state;

    return (
      <>
        <input
          type="text"
          id="myInput"
          value={value}
          onChange={(e) => this.onChange(e, "value")}
        />
        <input
          type="text"
          id="myInput"
          value={value1}
          onChange={(e) => this.onChange(e, "value1")}
        />
        <input
          type="text"
          id="myInput"
          value={value2}
          onChange={(e) => this.onChange(e, "value2")}
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={this.onCheckboxChange}
        />
        <button onClick={this.onAddBtnClick}>Add</button>
      </>
    );
  }
}

export default Form;
