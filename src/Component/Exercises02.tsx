import { Component } from 'react'

interface State {
    id: number;
    name: string;
    date: string;
    address: string;
}

export default class Exercises02 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: 'Bui Van Phuong',
            date: '2023-10-01',
            address: '123 Main St, Hanoi'
        };
    }
    render() {
        return (
            <div>
                <p><strong>id: {this.state.id}</strong></p>
                <p><strong>name: {this.state.name}</strong></p>
                <p><strong>date: {this.state.date}</strong></p>
                <p><strong>address: {this.state.address}</strong></p>
            </div>
        );
    }
}
