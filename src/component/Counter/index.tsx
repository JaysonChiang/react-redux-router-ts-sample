import * as React from "react";

export interface IProps {
    value?:number;
    onIncrement?:()=>void;
    onDecrement?:()=>void;
}
export default class Counter extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                Value: {value}
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        );
    }
}
