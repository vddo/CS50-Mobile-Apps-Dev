# React

In React, components are functions.

### Props

Similar to JavaScript functions, you can design components that accept custom arguments (or props) that change the component's behavior or what is visibly shown when it's rendered to the screen. Then, you can pass down these props from parent components to child components.

- Props are like functions arguments

### State and Hook

React has a set of functions called hooks. Hooks allow you to add additional logic such as state to your components. You can think of state as any information in your UI that changes over time, usually triggered by user interaction.

- State = changable information in UI

Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component. Your can pass the state information to children componnents as props, but the logic for updating the state should be kept within the component where state was initially created

- props are passed to components as the first function parameter
- props is read-only information
- state is initiated and stored within a component
- the logic for updating the state should be kept within the component where state was initially created
- state is information that can change over time


