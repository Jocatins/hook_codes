import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch(action.type){
        case 'Fetch_Success':
            return{
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'Fetch_Error':
            return {
                loading: false,
                post:{},
                error:'something gone gaga'
            }
        default:
            return state
    }
}

function DataFetch1() {
    const [state, dispatch] = useReducer(reducer, initState)

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com.posts/3')
        .then(res => {
            dispatch({type: 'Fetch_Success', payload: res.data})
        })
        .catch(error => {
            dispatch({type: 'Fetch_Error'})
        })
},[])
    return (
        <div>
            {state.loading ? 'loading ....' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetch1
