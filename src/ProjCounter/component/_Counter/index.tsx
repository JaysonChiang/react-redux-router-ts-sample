import * as React from "react";

interface IProps {
    value?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const Counter = ({ value, onIncrement, onDecrement }: IProps) => (
    <div>
        Value: {value}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

export default Counter;
