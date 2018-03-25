import Message from './Message/Message'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  message: state.message
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)

export default MessageContainer
