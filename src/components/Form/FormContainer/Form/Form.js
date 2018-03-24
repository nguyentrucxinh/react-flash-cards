import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Form extends Component {
  render () {
    return (
      <div>
        <div className='well'>
          <h2>Edit Card # card.id </h2>
          <form action='edit_card' method='post' className='cardForm'>

            <div className='form-group'>
              <label htmlFor='general' className='btn btn-default btn-lg'>General &nbsp;
                <input type='radio' name='type' value='1' id='general' checked />
              </label>
              <label htmlFor='code' className='btn btn-default btn-lg'>Code &nbsp;
                <input type='radio' name='type' value='2' id='code' />
              </label>
            </div>
            <div className='form-group'>
              <label htmlFor='front'>Front of Card</label>
              <input type='text' name='front' id='front' className='form-control' value='card.front' />
            </div>
            <div className='form-group'>
              <label htmlFor='back'>Back of Card</label>
              <textarea name='back'
                className='form-control'
                id='back'
                placeholder='back of card'
                rows='12'>card.back</textarea>
            </div>
            <div className='row'>
              <div className='col-xs-6'>
                <div className='checkbox'>
                  <label>
                    <input type='checkbox' name='known' value='1' /> Known
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
            <div className='form-group'>
              <input type='hidden' name='card_id' value='card.id' />
              <button type='submit' className='saveButton btn btn-lg btn-primary'>Save</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default Form
