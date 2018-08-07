import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ProductDetail from './ProductDetail';

class Products extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-list">
          <NavLink to={this.props.match.path + '/75'} activeClassName="active">Product 75</NavLink>
          A list of products
        </div>
        <Route path={this.props.match.path + '/:productId'} component={ProductDetail} />
      </div>
    );
  }
}

export default Products;