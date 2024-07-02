import { v4 as uuidv4 } from "uuid";
import ListItem from "./ListItem";
import React from "react";

class Asd extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      arr: [{ id: uuidv4(), value: 1 }],
    };
  }

  onAddClick = () => {
    const newItem = {
      id: uuidv4(),
      value: this.state.arr[this.state.arr.length - 1].value + 1,
    };

    this.state.arr.push(newItem);

    this.setState({
      arr: [...this.state.arr],
    });
  };

  render() {
    // console.log("Asd component rendered");

    return (
      <div className="asd-list">
        <button onClick={this.onAddClick}>Add item</button>
        {this.state.arr.map((el) => (
          <ListItem key={el.id} item={el.value} />
        ))}
      </div>
    );
  }
}

export default Asd;
