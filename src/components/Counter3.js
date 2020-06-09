import React, {useReducer} from 'react'

const initState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increase':
            return state +1 
        case 'decrease':
            return state - 1
        case 'reset':
            return initState
        default:
            return state
    }
}

function Counter3() {
    const [value, dispatch] = useReducer(reducer, initState)
    const [value2, dispatch2] = useReducer(reducer,initState)
    return (
        <div>
        <div>Value - {value}</div>
            <button onClick={() => dispatch('increase')}>Increase</button>
            <button onClick={() => dispatch('decrease')}>Decrease</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
            <div>Value2 - {value2}</div>
            <button onClick={() => dispatch2('increase')}>Increase</button>
            <button onClick={() => dispatch2('decrease')}>Decrease</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>
        </div>
        </div>
    )
}

export default Counter3
