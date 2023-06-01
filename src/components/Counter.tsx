import React, {useState} from 'react';
import s from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementHandler = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={s.btn} onClick={incrementHandler}>incr</button>
        </div>
    );
};

