import React, { Component } from 'react'
// import PropTypes from 'prop-types'

const TYPE = {
  general: 1,
  code: 2
}

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      card: {
        type: 1,
        front: '',
        back: '',
        known: false
      }
    }

    this.handleButtonSubmit = this.handleButtonSubmit.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleChangeFront = this.handleChangeFront.bind(this)
    this.handleChangeBack = this.handleChangeBack.bind(this)
    this.handleChangeKnown = this.handleChangeKnown.bind(this)
  }

  handleButtonSubmit (e) {
    e.preventDefault()
    console.log(this.state.card)
    if (this.props.mode === 'create') {

    } else {

    }
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
            <label htmlFor='general' className='btn btn-default btn-lg'>General &nbsp;
                <input value={TYPE.general} onChange={this.handleChangeType} checked={Number(this.state.card.type) === TYPE.general} type='radio' name='type' id='general' />
            </label>
            <label htmlFor='code' className='btn btn-default btn-lg'>Code &nbsp;
                <input value={TYPE.code} onChange={this.handleChangeType} checked={Number(this.state.card.type) === TYPE.code} type='radio' name='type' id='code' />
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
              <a href='delete' className='btn btn-danger btn-xs'>
                <i className='fa fa-trash' />
                Remove
                </a>
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

export default Form
