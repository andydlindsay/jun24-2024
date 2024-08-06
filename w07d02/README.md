# W07D02 - What is React State?

### To Do
- [x] Review of components and props
- [x] What is state?
- [x] Closure review
- [x] Reading and setting state

### Props vs State
* props => data from the outside
* state => data that the component created (belongs to a component)

### React Hooks
* JS helper functions
* to tap into the React ecosystem
* possible to create custom hooks

### Rules for React Hooks
1. a hook cannot be called conditionally or inside a helper function (they must be called top-level)
2. they have to be called in the same order on every render
3. they have to be used inside a react functional component
4. all hooks start with the prefix `use`

How does React know to re-render? (call your component again?)
If oldState !== newState

if state or props change, react will call your function again


Counter - state: count
  Display - props: count
  Button - props: myFunc














