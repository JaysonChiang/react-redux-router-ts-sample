import * as React from "react";

interface IProps {
    value?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const Counter = ({ value, onIncrement, onDecrement }: IProps) => (
    <div>
        Value: {value}
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
    </div>
);

export default Counter;
