import React from 'react'

const Ex2 = () => {
    /* const [state,dispatcher] = useReducer(reducer,initialstate or InitialValue)

    State = Is used for declare variables or state
    dispatcher = 1) Is used for call state Object.
                2) Helps to passing an action constants through dispatcher
    reducer = 1) Is a function, is used for handle the actions. 
                2) Action is used for to determine what kind of action try to take */
  return (
    <div className="container my-3">
        <div className="row">
            <div className="col text-center">
            <h5 className="display-3 text-success">useReducer Hook</h5>
            <p className="text-secondary">
                useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
            </p>
            <p className="text-secondary">useReducer also lets you optimize performance for components that trigger deep updates.</p>
            </div>
        </div>
    </div>
  )
}

export default Ex2