import Memorize from './Memorize/Memorize'
import { connect } from 'react-redux'
import { getCardRandom } from '../../../actions/getCardRandom'
import { updateCard } from '../../../actions/updateCardAction'
import { getCardNext } from '../../../actions/getCardNextAction'
import { getCardPrev } from '../../../actions/getCardPrevAction'
import { getCardFirst } from '../../../actions/getCardFirstAction'

const mapStateToProps = (state, ownProps) => ({
  card: state.card
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetCardFirst: () => {
    dispatch(getCardFirst())
  },
  onGetCardRandom: () => {
    dispatch(getCardRandom())
  },
  onGetCardNext: (id) => {
    dispatch(getCardNext(id))
  },
  onGetCardPrev: (id) => {
    dispatch(getCardPrev(id))
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
