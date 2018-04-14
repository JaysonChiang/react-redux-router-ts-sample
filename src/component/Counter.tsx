import * as React from "react";

interface ICounterProps {
    value: number;
    onIncrement(): void;
    onDecrement(): void;
}

export default class Counter extends React.Component<ICounterProps, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                Value: {this.props.value}
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        );
    }
}
