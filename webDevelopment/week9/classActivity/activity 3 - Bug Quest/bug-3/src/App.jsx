import React from "react";

import "./index.css";

//   Investigate why the newly added tasks are not displaying and fix the issue.

// As reminder :
//  1 - First carrefully read the console errors
//  2 - Then check possible errors on code
//  3- Finaly use the debuger/inspection tools on the browser if needed


// there was nothing wrong with the code 
function App() {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
