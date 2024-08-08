/**
 * props:
 *   todos: []
 * 
 */

import TodoListItem from '../TodoListItem';

const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />;
  });

  return (
    <div>
      { mappedTodos }
    </div>
  );
};

export default TodoList;
