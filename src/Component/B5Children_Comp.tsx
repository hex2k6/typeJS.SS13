import React, { Component } from 'react'

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  products: Product;
}

export default class B5Children_Comp extends Component<Props> {
  render() {
    const { id, name, price, quantity} = this.props.products; 
    return (
      <div>
        <h2>Dữ liệu trong component con</h2>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>price: {price}</p>
        <p>quantity: {quantity}</p>
      </div>
    )
  }
}
