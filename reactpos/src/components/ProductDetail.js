import React, { Component } from 'react'

class ProductDetail extends Component {
  render() {
    return (
      <div className="product-detail col-6">
        <h3>Product detail</h3>
        <p>${this.props.product.salePrice}</p>
        <p>{this.props.product.productName}</p>
        <p>{this.props.product.productDesc}</p>
      </div>
    );
  }
}

export default ProductDetail