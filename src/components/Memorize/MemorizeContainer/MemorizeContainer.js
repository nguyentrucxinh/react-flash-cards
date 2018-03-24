import Memorize from './Memorize/Memorize'
import { connect } from 'react-redux'
import { getCardRandom } from '../../../actions/getCardRandom'
import { updateCard } from '../../../actions/updateCardAction'

const mapStateToProps = (state, ownProps) => ({
  card: state.card
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetCardRandom: () => {
    dispatch(getCardRandom())
  },
  onUpdateCard: (id, data) => {
    dispatch(updateCard(id, data))
  }
})

const MemorizeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Memorize)

export default MemorizeContainer
