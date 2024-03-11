import './App.css'
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [Task, setTask] = useState([])
    const CreateTask =(Title,TaskDesc) => {
      const CreatedTasks=[
        ...Task,{
          id:Math.round(Math.random()*999999),
          Title,
          TaskDesc
        }
      ]
      setTask(CreatedTasks);
  }
  const onDelete1=(id) => {
    const afterdeleting=Task.filter((Task1)=>{
      return Task1.id !==id;
    })
    setTask(afterdeleting);
  }
  return ( 
    <div className='Task'>
      <TaskCreate onCreate={CreateTask}/>
      <TaskList PropsTask={Task} onDelete={onDelete1}/>
    </div>
  );
}

export default App;
