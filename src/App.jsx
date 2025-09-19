import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(0)
  // const tasksP = document.getElementById("taskList");
  // tasksP.innerHTML = "";
  

  function taskList(){
    let value;
    if (tasks == 0) {
           this.innerHTML = 'No tasks yet - add one above!'; 
        } else {
          value = '';
        } 
    return(
      <div></div>
    );
  }
  function newTask(){
    setTasks((tasks)=> tasks + 1);
    tasksP.innerHTML += `<li> ${document.getElementById("task").value} <button onClick=(deleteTask)>X </></li>`

  
  }



  return (
    <>
      <div>
        <h1>Todo List</h1>

        <input type="text" name="task" id="task" placeholder='What needs to be done?' />
        <button id='button' onClick={newTask}>Add</button>
        {/* <div id='taskList' onLoad={checkTask}></div> */}
        <br />
        <taskList></taskList>
      </div>
    </>
  )
}

export default App
