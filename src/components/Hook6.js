import React, {useState} from 'react'
import Hook5 from './Hook5'

function Hook6() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display && <Hook5/>}
        </div>
    )
}

export default Hook6
