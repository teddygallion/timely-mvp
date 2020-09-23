import React, {useState, useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState(false);
  useEffect(() => {
    getTasks();
  }, []);
  function getTask() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setTasks(data);
      });
  }
  function createTasks() {
    let name = prompt('Tasks');
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getTasks();
      });
  }
  function deleteTask() {
    let id = prompt('Enter task id');
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getTasks();
      });
  }
  return (
    <div>
      {tasks ? tasks : 'There are no tasks available'}
      <br />
      <button onClick={createTask}>Add Task</button>
      <br />
      <button onClick={deleteTask}>Delete Task</button>
    </div>
  );
}
export default App;





















