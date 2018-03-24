import List from './List/List'
import { connect } from 'react-redux'
import { getCards } from '../../../actions/getCardsAction'

const mapStateToProps = (state, ownProps) => ({
  cards: state.cards
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetCards: () => {
    dispatch(getCards())
  }
})

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer
