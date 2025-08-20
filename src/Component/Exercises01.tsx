import { Component } from 'react';

interface State {
    name: string;
}

export default class Exercises01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Bui Van Phuong',
        };
    }

    render() {
        return (
            <div>
                <p>Toi la: {this.state.name}</p>
            </div>
        );
    }
}
