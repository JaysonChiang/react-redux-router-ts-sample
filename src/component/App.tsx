import * as React from "react";
import Counter from "../container/Counter";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

export default App;
