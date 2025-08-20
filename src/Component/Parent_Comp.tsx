import React, { Component } from 'react'
import Children_Comp from './Children_Comp';

interface State {
    fullName: string;
}

export default class Parent_Comp extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fullName: 'Bui Van Phuong'
        };
    }
  render() {
    return (
      <div>
        <h1>Họ và tên bên component cha: {this.state.fullName}</h1>
        <Children_Comp fullName={this.state.fullName} />
      </div>
    )
  }
}
