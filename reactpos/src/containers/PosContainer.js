import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pos from '../components/Pos'
import { checkoutProduct, submitCheckout } from '../stores/PosStore'

function mapStateToProps(state) {
  const { pos } = state
  const { products, total } = pos
  return { products, total }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkoutProduct, submitCheckout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pos)