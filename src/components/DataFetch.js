import React, {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetch() {
    
    const [loading, setLoading] = useState(true)
    const [post, setPost ] = useState({})
    const [error, setError] = useState('')

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/post/1')
        .then(res => {
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('oops some shit went wrong')
        })
},[])
    return (
        <div>
            {loading ? 'loading .....' : post.title}
            {error ? error : null }
        </div>
    )
}

export default DataFetch

