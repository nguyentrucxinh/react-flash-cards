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
    return dispatch(deleteCard(id))
      .then(() => dispatch(getCards()))
      .catch(error => {
        throw new Error(error)
      })
  }
})

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer
