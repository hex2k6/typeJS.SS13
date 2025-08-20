import React, { Component } from 'react'
import B5Children_Comp from './B5Children_Comp';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface State {
  products: Product;
}

export default class B5Parent_Comp extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            products: {
                id: 1,
                name: "Bưởi ba roi",
                price: 12000,
                quantity: 6,
            }
        }
    }
  render() {
    return (
      <div>
        <B5Children_Comp products={this.state.products} />
      </div>
    )
  }
}
