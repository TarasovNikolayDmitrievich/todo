import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, doDone, doImportant } from './redux/redusers/tasks';



function App() {

  const dispatch = useDispatch();

  const todos = useSelector((store) => store.tasks.todos)
  // console.log(todos);
  const [task, setTask] = useState('')


  return (
    <div className="App">
      <div>
        <input value={task} type='text' onChange={(e) => setTask(e.target.value)} />
        <button type='button' onClick={() => {
          dispatch(addTask(task))
          setTask('')
        }}>ADD</button>
      </div>

      <ul>
        {
          todos.map((item) => (
            <li  key={item.id} style={{margin: ' 20px 0', backgroundColor: item.isImportant ? 'red' : '',textDecoration: item.isDone ? 'line-through' : 'none' }}>{item.title} 
            <button style={{marginLeft: '40px'}} type="button" onClick={() => dispatch(deleteTask(item.id))}>DEL</button>
            <button style={{marginLeft: '40px'}} type="button" onClick={() => dispatch(doImportant(item.id))}>IMPORTANT</button>
            <button style={{marginLeft: '40px'}} type="button" onClick={() => dispatch(doDone(item.id))}>DONE</button>
            </li>
          ))
        }
      </ul>

      <div>
        <input type="search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
