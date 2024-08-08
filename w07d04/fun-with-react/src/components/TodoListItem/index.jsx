/*
* props:
    todo
      id
      task
      isComplete
      category
*/

import './TodoListItem.scss';

// const props = {
//   todo: {
//     id: 1,
//     task: 'buy LOTR boxed set',
//     isComplete: true,
//     category: 'to buy'
//   }
// }

const TodoListItem = (props) => {
  return (
    <div className="TodoListItem">
      <header>
        { props.todo.isComplete && <h2>✅</h2> }
        { !props.todo.isComplete && <h2>🟩</h2> }
        <h2>Task: {props.todo.task}</h2>
      </header>
      <p>Category: {props.todo.category}</p>
    </div>
  );
};

export default TodoListItem;
