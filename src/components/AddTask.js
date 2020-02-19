import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false
  };
  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
        />
        <input type="checkbox" checked={this.state.checked} id="important" />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić </label>
        <input
          type="date"
          value="2019-01-25"
          min="2019-01-01"
          max="2020-12-31"
        />
        <br />
        <button>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
