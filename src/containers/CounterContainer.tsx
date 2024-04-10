import React from "react";
import Counter from "../views/Counter";

type CounterContainerState = {
    count: number;
};

class CounterContainer extends React.Component<{}, CounterContainerState> {
    state: CounterContainerState;

    constructor() {
        super({});
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState((state) => (
            { count: state.count + 1 }
        ));
    };

    decrement() {
        this.setState((state)=> (
            { count: state.count - 1}
        ))
    }

    reset() {
        this.setState(()=>(
            { count: 0 }
        ))
    }

    render() {
        return (
            <Counter
                state={this.state.count}
                increment={this.increment}
                decrement={this.decrement}
                reset={this.reset}
            />
        )
    }

}

export default CounterContainer
