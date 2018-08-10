import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import * as axios from 'axios'
import { getProductById } from '../utility'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    let that = this
    axios.get('/products').then(function(response) {
      that.setState({products: response.data})
    })
  }

  render() {
    let that = this;
    return (
      <div className="product row">
        <div className="product-list col-6">
          <ul>
            {
              that.state.products.map(function(product) {
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
          return <ProductDetail product={getProductById(that.state.products, props.match.params.productId)} />
        }} />
      </div>
    );
  }
}

export default Products