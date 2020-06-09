import React, {useState} from 'react'

function Hook1() {
    const initialValue = 0
    const [value, setValue] = useState(initialValue)

    const increaseByFive = () => {
        for(let i = 0; i < 5; i ++){
            setValue(previousValue => previousValue + 1)
        }
    }
    return (
        <div>
            Value: {value}
            <button onClick={() => setValue(initialValue)}>Reset Button</button>
            <button onClick={()=> setValue(previousValue => previousValue + 4)}>Increase Button</button>
            <button onClick={() => setValue(previousValue => previousValue - 4)}>Decrease button</button>
            <button onClick={increaseByFive}>Increase by 5</button>
        </div>
    )
}

export default Hook1
