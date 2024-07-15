import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      todoList: [],
      filteredList: [],
      search: "",
      filter: "All",
    };
  }

  componentDidUpdate(props, prevState) {
    if (prevState.todoList !== this.state.todoList) {
      //DO FILTERING
      this.setState((state) => ({
        filteredList: this.calculateFilteredList(state),
      }));
    }
  }

  calculateFilteredList = (state) => {
    return state.todoList.filter((item) => {
      const search = item.name.includes(state.search);
      switch (state.filter) {
        case "All":
          return search;
        case "Done":
          return search && item.done;
        case "Undone":
          return search && !item.done;
        default:
          return true;
      }
    });
  };

  addTodo = (item) => {
    this.setState({
      todoList: [...this.state.todoList, item],
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((item) => item.id !== id),
    });
  };

  toggleTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      ),
    });
  };

  onFilterChange = (filter) => {
    this.setState((state) => ({
      filter,
    }));

    this.setState((state) => ({
      filteredList: this.calculateFilteredList(state),
    }));
  };

  searchChange = (e) => {
    this.setState(() => ({
      search: e.target.value,
    }));
    this.setState((state) => ({
      filteredList: this.calculateFilteredList(state),
    }));
  };

  render() {
    return (
      <div className="todoWrapper">
        <Header addTodo={this.addTodo} />
        <Filter
          onFilterChange={this.onFilterChange}
          search={this.state.search}
          searchChange={this.searchChange}
          filter={this.state.filter}
        />
        <List
          list={this.state.filteredList}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
