import * as React from "react";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <a href="/counter">Go Counter</a>
                <a href="/todoapp">Go TodoApp</a>
            </div>
        );
    }
}

export default App;
