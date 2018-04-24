import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { CARD_TYPE } from '../../../../constants/cardTypes'

const DEFAULT_CARD = {
  type: CARD_TYPE.general,
  front: '',
  back: '',
  known: false
}

class Form extends Component {
  constructor (props) {
    super(props)

    // Set default state
    this.state = {
      card: DEFAULT_CARD
    }

    // Get card if is update mode
    if (!this.isCreate()) {
      this.props.onGetCard(this.props.mode)
    }

    this.handleButtonSubmit = this.handleButtonSubmit.bind(this)
    this.handleButtonDelete = this.handleButtonDelete.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleChangeFront = this.handleChangeFront.bind(this)
    this.handleChangeBack = this.handleChangeBack.bind(this)
    this.handleChangeKnown = this.handleChangeKnown.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ card: nextProps.card })
  }

  isCreate () {
    return this.props.mode === 'create'
  }

  handleButtonSubmit (e) {
    e.preventDefault()
    if (this.isCreate()) {
      this.props.onCreateCard(this.state.card)
        .then(() => {
          this.setState({
            card: DEFAULT_CARD
          })
        })
        .catch(error => {
          throw new Error(error)
        })
    } else {
      this.props.onUpdateCard(this.props.card._id, this.state.card)
    }
  }

  handleButtonDelete () {
    this.props.onDeleteCard(this.props.card._id)
  }

  handleChangeType (e) {
    this.setState({ card: { ...this.state.card, type: e.target.value } })
  }

  handleChangeFront (e) {
    this.setState({ card: { ...this.state.card, front: e.target.value } })
  }

  handleChangeBack (e) {
    this.setState({ card: { ...this.state.card, back: e.target.value } })
  }

  handleChangeKnown (e) {
    this.setState({ card: { ...this.state.card, known: e.target.checked } })
  }

  render () {
    const { mode } = this.props

    return (
      <div className='well'>

        {/* Title */}
        <h2>{mode}</h2>

        <form onSubmit={this.handleButtonSubmit} className='cardForm'>

          {/* Card Type */}
          <div className='form-group'>
            <label htmlFor='title' className='btn btn-default btn-lg'>Title &nbsp;
                <input value={CARD_TYPE.title} onChange={this.handleChangeType} checked={Number(this.state.card.type) === CARD_TYPE.title} type='radio' name='type' id='title' />
            </label>
            <label htmlFor='general' className='btn btn-default btn-lg'>General &nbsp;
                <input value={CARD_TYPE.general} onChange={this.handleChangeType} checked={Number(this.state.card.type) === CARD_TYPE.general} type='radio' name='type' id='general' />
            </label>
            <label htmlFor='code' className='btn btn-default btn-lg'>Code &nbsp;
                <input value={CARD_TYPE.code} onChange={this.handleChangeType} checked={Number(this.state.card.type) === CARD_TYPE.code} type='radio' name='type' id='code' />
            </label>
          </div>

          {/* Card */}
          <div className='form-group'>
            <label htmlFor='front'>Front of Card</label>
            <input value={this.state.card.front} onChange={this.handleChangeFront} type='text' name='front' id='front' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='back'>Back of Card</label>
            <textarea value={this.state.card.back} onChange={this.handleChangeBack} name='back' className='form-control' id='back' rows='12' />
          </div>
          <div className='row'>
            <div className='col-xs-6'>
              <div className='checkbox'>
                <label>
                  <input value={this.state.card.known} onChange={this.handleChangeKnown} checked={this.state.card.known} type='checkbox' name='known' /> Known
                </label>
              </div>
            </div>
            <div className='col-xs-6 text-right'>
              {this.isCreate() ? ''
                : (
                  <RemoveButton id={this.state.card._id} handleButtonDelete={this.handleButtonDelete} />
                )}
            </div>
          </div>

          <hr />

          {/* Button */}
          <div className='form-group'>
            <button type='submit' className='saveButton btn btn-lg btn-primary'>Save</button>
          </div>

        </form>
      </div>
    )
  }
}

Form.propTypes = {
  card: PropTypes.object.isRequired,
  onCreateCard: PropTypes.func.isRequired,
  onUpdateCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onGetCard: PropTypes.func.isRequired
}

const RemoveButton = withRouter(
  ({ history, id, handleButtonDelete }) =>
    <a onClick={() => {
      handleButtonDelete()
      history.push(`/list`)
    }} className='btn btn-danger btn-xs'>
      <i className='fa fa-trash' aria-hidden='true' /> Remove
    </a>
)

export default Form
