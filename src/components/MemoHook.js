import React, {useState, useMemo} from 'react'

function MemoHook() {
    const [counter, setCounter ] = useState(0)
    const [ counterOne, setCounterOne] = useState(0)

    const increase = () => {
        setCounter(counter + 3)
    }
    const increaseOne = () => {
        setCounterOne(counterOne + 3)
    }
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 20000000 ) i ++
        return counter % 2 == 0
    }, [counter])
    
    return (
        <div>
            <div>
            <button onClick={increase}>Counter - {counter}</button>
            <span>{isEven ? 'even' : 'odd'}</span>
            </div>
            <div>
            <button onClick={increaseOne}>CounterOne - {counterOne}</button>
            </div>
        </div>
    )
}

export default MemoHook
