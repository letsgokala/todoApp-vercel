import React , {Fragment} from 'react';
import './App.css';

//components
import InputTodo from './component/InputTodo';
import ListTodos from "./component/ListTodos";
import Heading from './component/Header';

function App() {
  return (
    <Fragment>
      <Heading />
      <div className='container'>
      <InputTodo />
      <ListTodos />
      </div>
    </Fragment>
  )
}

export default App;
