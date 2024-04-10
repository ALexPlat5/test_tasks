import React from "react";

type CounterProps = {
    state: number,
    increment: () => void,
    decrement: () => void,
    reset: () => void
}

const Counter = ({state, increment, decrement, reset}: CounterProps) => {
    return (
        <div>
            <h1>{state}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
