import { Component } from 'react'

interface User {
    id: number;
    name: string;
    address: string;
}

interface State  {
    users: User[];
}

export default class Exercises03 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: 'Bui Van Phuong', address: '123 Main St, Hanoi' },
                { id: 2, name: 'Nguyen Van A', address: '456 Secondary St, Hanoi' },
                { id: 3, name: 'Tran Thi B', address: '789 Tertiary St, Hanoi' }
            ]
        };
    }
            
  render() {
    return (
      <div>
        <h2>Danh sanh user</h2>
        <table border={1} cellPadding={8}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}
