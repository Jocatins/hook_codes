import React, {useState, useEffect} from 'react'

function Hook7() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 2)
    }
useEffect(() => {
    const interval = setInterval(tick, 2000)
    return () => {
        clearInterval(interval)
    }
}, [])
    
    return (
        <div>
            {count}
        </div>
    )
}

export default Hook7
