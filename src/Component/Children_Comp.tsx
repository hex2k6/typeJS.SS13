import React, { Component } from 'react'

interface State {
    fullName: string;
}

export default class Children_Comp extends Component <State> {
  render() {
    return (
      <div>
        <p>Họ và tên bên component con: {this.props.fullName}</p>
      </div>
    )
  }
}
