import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import {useState} from 'react'
import DisplayTodo from './components/DisplayTodo';
import Navbar from './components/Navbar';

function App() {
  const [store,setstore]=useState([])
  return (

    <div className="App">
      <Navbar/>
     <TodoInput store={store} setstore={setstore}/>
    <DisplayTodo store={store} setstore={setstore}/>
    
    </div>
  );
}

export default App;
