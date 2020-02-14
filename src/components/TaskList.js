import React from "react";
import Task from "./Task";

const TaskList = () => {
  return (
    <div>
      <div>Lista tasków</div>
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;
