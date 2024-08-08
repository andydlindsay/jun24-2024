import './App.css'
import {useState} from 'react';

import Header from './components/Header';
import TodoList from './components/TodoList';

const todosArr = [
  {
    id: 1,
    task: 'walk the dog',
    isComplete: true,
    category: 'chore',
  },
  {
    id: 2,
    task: 'clean the dishes',
    isComplete: false,
    category: 'chore',
  },
  {
    id: 3,
    task: 'study React',
    isComplete: false,
    category: 'fun',
  },
];

const App = () => {
  const [todos, setTodos] = useState(todosArr);

  const numCompletes = todos.reduce((total, todo) => {
    if (todo.isComplete) {
      total = total + 1;
    }
    return total;
  }, 0);

  return (
    <>
      <Header numTodos={todos.length} numCompletes={numCompletes}/>
      <TodoList todos={todos} />
    </>
  )
}

export default App
