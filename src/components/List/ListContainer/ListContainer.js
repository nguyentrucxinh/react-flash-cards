import List from './List/List'
import { connect } from 'react-redux'
import { getCards } from '../../../actions/getCardsAction'
import { deleteCard } from '../../../actions/deleteCardAction'

const mapStateToProps = (state, ownProps) => ({
  cards: state.cards
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetCards: () => {
    dispatch(getCards())
  },
  onDeleteCard: (id) => {
    dispatch(deleteCard(id))
  }
})

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer
