import React from 'react'
import { mount } from 'enzyme'
import Pos from './Pos'
import { getProducts } from '../mock'
import { getProductByBarcode, getTotal } from '../utility'

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      total: 0
    }
    this.checkoutProduct = this.checkoutProduct.bind(this)
    this.submitCheckout = this.submitCheckout.bind(this)
  }

  checkoutProduct(productBarcode) {
    let newProducts = [...this.state.products, Object.assign({quantity: 1}, getProductByBarcode(getProducts(), productBarcode))]
    this.setState({products: newProducts, total: Number(getTotal(newProducts))})
  }

  submitCheckout() {
     this.setState({products: []})
  }
  
  render() {
    return (
      <Pos products={this.state.products} total={this.state.total} checkoutProduct={this.checkoutProduct} submitCheckout={this.submitCheckout}  />
    )
  }
}

describe('Pos checkout', function() {
  it('Pos should be able to handle barcode search and checkout submit', () => {
    const posWrapper = mount(<Wrapper />)
    expect(posWrapper.find('.product-row').length).toBe(0)
    let inputEle = posWrapper.find('input[type="text"]')
    inputEle.simulate('focus')
    inputEle.simulate('change', {target: {value: '4665272350190'}})
    inputEle.simulate('keyUp', {keyCode: 13})
    expect(posWrapper.find('.product-row').length).toBe(1)
    let submitButton = posWrapper.find('.submit-button')
    submitButton.simulate('click')
    expect(posWrapper.find('.product-row').length).toBe(0)
  })
})
