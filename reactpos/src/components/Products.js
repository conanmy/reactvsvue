import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, NavLink } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import { getProductById } from '../utility'

class Products extends Component {

  static propTypes = {
    products: PropTypes.array.isRequired,
    loadProducts: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.loadProducts()
  }

  render() {
    let that = this;
    return (
      <div className="product row">
        <div className="product-list col-6">
          <ul>
            {
              that.props.products.map(function(product) {
                return (
                  <NavLink to={that.props.match.path + '/' + product.productID} activeClassName="active" key={product.productID}>
                    <li>{product.productName}</li>
                  </NavLink>
                )
              })
            }
          </ul>
        </div>
        <Route path={that.props.match.path + '/:productId'} render={(props)=>{
          return <ProductDetail product={getProductById(that.props.products, props.match.params.productId)} />
        }} />
      </div>
    );
  }
}

export default Products