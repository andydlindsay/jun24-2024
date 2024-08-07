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

### React DevTools
* Most modern browsers have extensions/plugins that give us insight into our React applications.
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for Chrome.
* The React DevTools allows us to see/edit state and props for a component and see which hooks are being used within a component.
* They also allow us to view the _component hierarchy_ (the parent/child relationship between components).

### Building Components in Isolation
* Ideally, components should be developed in isolation. This makes them easier to style and forces us to think of just this component, not how it fits into the overall app.
* We want to consider the props that the component will accept and the various different ways that the component might be displayed (eg. disabled, loading, error).
* There are a variety of tools that can help us with this such as [Storybook](https://storybook.js.org/), but a straight-forward way to develop components in isolation is to render them individually in `App.js`.
