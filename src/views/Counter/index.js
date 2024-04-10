import React from "react";
import PropTypes from 'prop-types'

const Counter = (props) => {
    return (
        <div>
            <h1>{props.state}</h1>
            <div>
                <button onClick={props.increment}>+</button>
                <button onClick={props.decrement}>-</button>
                <button onClick={props.reset}>Reset</button>
            </div>
        </div>
    );
};

Counter.propTypes = {
    state: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    reset: PropTypes.func
};

export default Counter;
