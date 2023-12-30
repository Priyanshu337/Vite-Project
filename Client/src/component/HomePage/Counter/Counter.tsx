import React from 'react'
import { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const addClicked = () => {
        setCounter(counter + 1);
    }
    const minusClicked = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>COUNTER</h1>
            <h3>{counter}</h3>

            <br />
            <button onClick={addClicked}>+</button>
            <button onClick={minusClicked}>-</button>
        </div>
    )
}

export default Counter