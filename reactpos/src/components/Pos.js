import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getProductTotal } from '../utility'
import PosPayment from './PosPayment'

class Pos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productBarcode: ''
    }
    this.onProductBarcodeChange = this.onProductBarcodeChange.bind(this)
    this.onProductBarcodeKeyup = this.onProductBarcodeKeyup.bind(this)
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
    checkoutProduct: PropTypes.func.isRequired,
    submitCheckout: PropTypes.func.isRequired
  }

  onProductBarcodeChange(event) {
    this.setState({productBarcode: event.target.value})
  }

  onProductBarcodeKeyup(event) {
    if (event.keyCode === 13) {
      this.props.checkoutProduct(this.state.productBarcode)
      this.setState({productBarcode: ''})
    }
  }

  render() {
    let that = this
    return (
      <div className="pos row">
        <div className="pos-checkout col-8">
          <p><label>Product Barcode</label><input type="text" value={that.state.productBarcode} onChange={that.onProductBarcodeChange} onKeyUp={that.onProductBarcodeKeyup} /></p>
          <p>Barcode examples: 6928394901243, 774471033330, 9404216045205</p>
          <div className="pos__checkout__table">
            <div className="row thead">
              <div className="col-6">Product Name</div><div className="col-2">Price</div><div className="col-2">Quantity</div><div className="col-2">Total</div>
            </div>
            {
              that.props.products.map(function(product) {
                return (
                  <div key={product.productID} className="row">
                    <div className="col-6">{product.productName}</div>
                    <div className="col-2">{product.salePrice}</div>
                    <div className="col-2">{product.quantity}</div>
                    <div className="col-2">{getProductTotal(product)}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <PosPayment total={that.props.total} submitCheckout={that.props.submitCheckout} />
      </div>
    )
  }
}

export default Pos
