// mimicking componentDidMount

import React, {useState, useEffect} from 'react'

function Hook5() {
    const [x, setX ] = useState(0)
    const [y, setY ] = useState(0)

    const logPosition = e => {
        console.log('mouse event called')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect (() => {
        console.log('uesEffect called')
        window.addEventListener('mousemove', logPosition)

    return () => {
        console.log('unMounting mouse event')
        window.removeEventListener('mousemove', logPosition)
    }
    }, [])
    return (
        <div>
            C-ordinates X {x} and Y {y}
        </div>
    )
}

export default Hook5
