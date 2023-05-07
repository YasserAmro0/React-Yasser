import React from 'react';

export function Counter() {

    const [count, setCount] = React.useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    };

    const DecrementCounter = () => {
        setCount(count - 1);
    }
    const ClearCounter = () => {
        setCount(0);
    }
    return (
        <div>
            <p>The Counter state is: {count}</p>
            <button onClick={incrementCounter}>Add 1</button>
            <button onClick={DecrementCounter}>sub 1</button>
            <button onClick={ClearCounter}>Reset</button>
        </div>
    );
}