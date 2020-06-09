import React, {useReducer} from 'react'

const initState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {...state, firstCounter: state.firstCounter + action.value} 
        case 'decrease':
            return {...state, firstCounter: state.firstCounter - action.value}
            case 'increase2':
            return {...state, secondCounter: state.secondCounter + action.value} 
        case 'decrease2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initState
        default:
            return state
    }
}

function Counter2() {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
        <div>First Value - {count.firstCounter}</div>
        <div>Second Value - {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increase', value:2})}>Increase 2</button>
            <button onClick={() => dispatch({type:'decrease', value:2})}>Decrease 2</button>
            <button onClick={() => dispatch({type: 'increase', value:5})}>Increase 5</button>
            <button onClick={() => dispatch({type:'decrease', value:5})}>Decrease 5</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
            <div>
            <button onClick={() => dispatch({type: 'increase2', value:2})}>Increase Counter 2</button>
            <button onClick={() => dispatch({type:'decrease2', value:2})}>Decrease Counter 2</button>
            </div>
        </div>
    )
}

export default Counter2
