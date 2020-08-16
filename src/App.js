import React, { Component } from "react";
import TodoItems from "./component/TodoItems/TodoItems";
import AddItem from "./component/AddItem/AddItem";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        description: "Get out of bed",
      },
      {
        id: 2,
        description: "Brush teeth",
      },
      {
        id: 3,
        description: "Eat breakfast",
      },
    ],
  };

  // deleteItem = (id)=>{
  //   console.log(id);
  //   let items =this.state.todos;
  //   let i = items.findIndex(item => item.id === id)
  //   items.splice(i,1)
  //   this.setState({ todos:items })
  //   console.log(items);
  // }

  // another way
  deleteItem = (id) => {
    console.log(id);
    let items = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todos: items });
    console.log(items);
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.todos;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="App container">
       <h1 className="text-center">TodoList App</h1> 
        <AddItem addItem={this.addItem} />
        <TodoItems items={this.state.todos} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
export default App;
