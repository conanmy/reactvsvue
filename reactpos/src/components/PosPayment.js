import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getTotal } from '../utility'
import * as axios from 'axios'

class PosPayment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paymentMethod: 'eftpos'
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
    clearProductList: PropTypes.func.isRequired
  }

  onSubmit() {
    let that = this
    axios.post('/bill', {
      paymentMethod: that.state.paymentMethod,
      products: that.props.products,
      priceTotal: getTotal(that.props.products)
    }).then(function() {
      that.props.clearProductList()
    })
  }

  render() {
    let that = this
    let total = getTotal(that.props.products)
    return (
      <div className="pos-payment col-4">
        <p>Total: {total}</p>
        <p>Payment method</p>
        <p>
          <input id="payment-method-eftpos" name="payment-method" type="radio"
            checked={that.state.paymentMethod === 'eftpos'} onChange={()=>that.setState({paymentMethod: 'eftpos'})} />
          <label htmlFor="payment-method-eftpos">Eftpos</label>
        </p>
        <p>
          <input id="payment-method-cash" name="payment-method" type="radio"
            checked={that.state.paymentMethod === 'cash'} onChange={()=>that.setState({paymentMethod: 'cash'})} />
          <label htmlFor="payment-method-cash">Cash</label>
        </p>
        <p><span className="button" onClick={that.onSubmit}>Submit</span></p>
      </div>
    );
  }
}

export default PosPayment