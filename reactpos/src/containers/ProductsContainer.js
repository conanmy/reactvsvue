import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Products from '../components/Products'
import { loadProducts } from '../stores/ProductsStore'

function mapStateToProps(state) {
  const { products } = state
  const { all } = products
  return { products: all }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)