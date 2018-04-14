import * as React from "react";
import Counter from "./Counter";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: 0
        };
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    public onIncrement(): void {
        this.setState({ value: this.state.value + 1 });
    }

    public onDecrement(): void {
        this.setState({ value: this.state.value - 1 });
    }

    public render() {
        return (
            <div>
                <Counter
                    value={this.state.value}
                    onIncrement={this.onIncrement}
                    onDecrement={this.onDecrement}
                />
            </div>
        );
    }
}

export default App;
