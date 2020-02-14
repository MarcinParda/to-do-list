import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Zagrać w Wiedźmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Zrobić pranie",
        date: "2020-12-15",
        important: false,
        active: false,
        finishDate: null
      },
      {
        id: 2,
        text: "Przytyć 5 kilo",
        date: "2019-03-18",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "Zagrać na ukulele",
        date: "2020-02-14",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="App">
        TODO LIST
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
