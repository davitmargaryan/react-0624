import React from "react";
import { v4 as uuid } from "uuid";

class Header extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      todoName: "",
    };
  }

  onTodoNameChange = (e) => {
    this.setState({
      todoName: e.target.value,
    });
  };

  onAddBtnClick = () => {
    const itemName = this.state.todoName;
    if (itemName.trim()) {
      const newItem = {
        id: uuid(),
        name: itemName,
        done: false,
      };
      this.props.addTodo(newItem);
      this.setState({
        todoName: "",
      });
    }
  };

  onInputKeyDown = (e) => {
    if (e.key === "Enter") {
      this.onAddBtnClick();
    }
  };

  render() {
    const { todoName } = this.state;
    return (
      <div>
        <input
          value={todoName}
          onChange={this.onTodoNameChange}
          onKeyDown={this.onInputKeyDown}
        />
        <button onClick={this.onAddBtnClick}>Add</button>
      </div>
    );
  }
}

export default Header;
