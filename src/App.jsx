import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(0)
  function newTask(){
    setTasks(()=> tasks++);

  }
  
  return (
    <>
      <div>
        <h1>Todo List</h1>

        <input type="text" name="task" id="task" placeholder='What needs to be done?' />
        <button id='button' onClick={newTask}>Add</button>
        <div id='tasks'></div>
        
      </div>
    </>
  )
}

export default App
