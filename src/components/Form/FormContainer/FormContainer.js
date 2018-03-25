import Form from './Form/Form'
import { connect } from 'react-redux'
import { createCard } from '../../../actions/createCardAction'
import { deleteCard } from '../../../actions/deleteCardAction'
import { updateCard } from '../../../actions/updateCardAction'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreateCard: (data) => {
    dispatch(createCard(data))
  },
  onUpdateCard: (id, data) => {
    dispatch(updateCard(id, data))
  },
  onDeleteCard: (id) => {
    dispatch(deleteCard(id))
  }
})

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer
