# W07D04 - React Developer Workflow

### To Do
* [x] CRA Alternatives
* [x] Project Structure
* [x] Data Structure/Wireframe
* [x] Component Selection
* [x] Building Components in Isolation
  * [x] Styling with hardcoded values
  * [x] Passing props
  * [x] Conditional rendering
* [x] React DevTools

### CRA Alternatives
* CRA deprecated
* Vite
* NextJS

### Project Organization

src
  components
    Home.jsx
    Home.css
    About.jsx
    About.css

src
  components
    Home.jsx
    About.jsx
  styles
    About.css
    Home.css

import Home from './src/components/Home/Home.jsx'
import Home from './src/components/Home'

src
  components
    Home
      index.jsx
      Home.css
    About
      About.jsx
      About.css

### Todo App Data Structure

```js
const todo = {
  id: 1,
  task: 'walk the dog',
  isComplete: false,
  category: 'activity'
};

const todos = [];
```

### Component Structure

6/6

lifting state up

App - state: todos
  Header - props: todos
  TodoList - props: todos
    TodoListItem - props: todo
  TodoForm - state: formData, props: addTodo

prop drilling

App - state: todos
  Layout - props: todos
    Header - props: todosArr
      TodoListItem - props: todo
    TodoList - props: todos
      TodoListItem - props: todo



















