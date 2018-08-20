import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PosPayment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paymentMethod: 'eftpos'
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  static propTypes = {
    total: PropTypes.number.isRequired,
    submitCheckout: PropTypes.func.isRequired
  }

  onSubmit() {
    this.props.submitCheckout(this.state.paymentMethod)
  }

  render() {
    let that = this
    return (
      <div className="pos-payment col-4">
        <p className="pos-payment__total">Total: {that.props.total}</p>
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
        <p><span className="submit-button button" onClick={that.onSubmit}>Submit</span></p>
      </div>
    );
  }
}

export default PosPayment