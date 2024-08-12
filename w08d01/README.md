# W08D01 - React Review

### To Do
- [x] Build a backend server
- [x] Build the React frontend
- [x] Data fetching with `useEffect`
- [x] Managing state with a custom hook

### `useEffect` hook
* Controlling when our side effects run
* Common side effects include:
  * console.log
  * interacting with the DOM directly (`document`)
  * setting intervals and timers
  * data fetching
* used to keep your app in sync with an external resource

```js
useEffect(() => {}); // runs on every render
useEffect(() => {}, [props.photo]); // called on the first render and only if something in the array changes
useEffect(() => {}, []); // called on first render only
```





















