import React, { Component } from "react";
import Task from "./task.jsx";

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, value: "Work on a React app" },
      { id: 2, value: "Make Pasta" },
      { id: 3, value: "Play Piano" },
    ],
  };

  addTask = () => {
    const text = document.getElementById("taskInput").value;
    if (text.length === 0) return;
    const tasks = this.state.tasks.map((c) => {
      c.id = this.state.tasks.indexOf(c) + 1;
      return c;
    });
    tasks.push({
      id: tasks.length + 1,
      value: text,
    });
    this.setState({ tasks });
  };

  resetTask = () => {
    const tasks = [];
    this.setState({ tasks });
    document.getElementById("taskInput").value = "";
  };

  deleteTask = () => {
    let text = document.getElementById("taskInput").value;
    if (text.length === 0 || isNaN(text)) return;
    text = parseInt(text);
    const filtered = this.state.tasks.filter((task) => task.id !== text);
    const tasks = filtered.map((c) => {
      c.id = filtered.indexOf(c) + 1;
      return c;
    });
    this.setState({ tasks });
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Task/ID
            </span>
          </div>
          <input
            id="taskInput"
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter New-Task to add or the current Task-Id to delete"
          ></input>
        </div>
        <button onClick={this.addTask} className="btn btn-primary m-1">
          {" "}
          Add
        </button>
        <button onClick={this.resetTask} className="btn btn-secondary m-1">
          {" "}
          Reset
        </button>
        <button onClick={this.deleteTask} className="btn btn-success m-1">
          {" "}
          Delete
        </button>
        <div>
          <ul className="list-group">
            {this.state.tasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Tasks;
