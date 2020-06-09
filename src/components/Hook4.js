import React, {useState, useEffect} from 'react'

function Hook4() {
    const [once, setOnce] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('updating for use effect')
        document.title = `You clicked ${once} times`
    }, [once])
    return (
        <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setOnce(once + 1 )}>Click - 
            {once} times </button>
        </div>
    )
}

export default Hook4
