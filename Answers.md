1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

 - Filter, Concat and Map. Map can create a new object, extending the properties of another.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  - 'Actions' sends the data from the application to the store. 'Reducers' relays new state changes to the 'store' that are directly from the 'actions' responses.
  - The 'store' is the global state for the entire application, that's why is called a single source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

 - Applications state is a a 'global' state for the entire applications contained within the store. 
 - Component state is local to that particular component. 
 - You would use an application state for the entire application and only use component state if only that one component needs a state not needed anywhere else in the application.

1.  What is middleware?

 -  Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

 - Redux-thunk is a way to dispatch asynchornous change from one state to another, it is a part of middleware.

1.  Which `react-redux` method links up our `components` with our `redux store`?

 - connect()