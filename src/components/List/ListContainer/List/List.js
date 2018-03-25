import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  constructor (props) {
    super(props)
    this.props.onGetCards()

    this.handleButtonEdit = this.handleButtonEdit.bind(this)
    this.handleButtonDelete = this.handleButtonDelete.bind(this)
  }

  handleButtonEdit (e) {
    e.preventDefault()
  }

  handleButtonDelete (e) {
    e.preventDefault()
  }

  renderRow (card) {
    return (
      <tr key={card._id}>
        <td className='col-md-1'>
          <a onClick={this.handleButtonEdit} className='btn btn-xs btn-primary'>
            <i className='fa fa-pencil' aria-hidden='true' /> Edit
          </a>
          <br />
          <a className='btn btn-xs btn-danger' data-toggle='modal' data-target='#deleteModal'>
            <i className='fa fa-trash' aria-hidden='true' /> Delete
          </a>
        </td>
        <td className='cardContent col-md-11'>
          <h4>
            {card.front}
          </h4>

          <pre>
            <code>
              {card.back}
            </code>
          </pre>

        </td>
      </tr>
    )
  }

  render () {
    const { cards } = this.props

    return (
      <div>
        {/* Sum */}
        <div className='page-header'>
          <h2>{cards.length} Card(s)</h2>
        </div>

        {/* Filter */}
        <div className='btn-group btn-group-md' role='group' aria-label='filters'>
          <a className='btn btn-primary'>All</a>
          <a className='btn btn-default disabled'>General</a>
          <a className='btn btn-default disabled'>Code</a>
          <a className='btn btn-default disabled'>Known</a>
          <a className='btn btn-default disabled'>Unknown</a>
        </div>

        <br />
        <br />

        {/* List */}
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th>Action</th>
              <th>Card</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((value, index) => this.renderRow(value))}
          </tbody>
        </table>

        {/* Modal */}
        <div className='modal fade' id='deleteModal' role='dialog'>
          <div className='modal-dialog modal-sm'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal'>&times;</button>
                <h4 className='modal-title'>Are you sure?</h4>
              </div>
              <div className='modal-body'>
                <p>This is a small modal.</p>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-danger' data-dismiss='modal'>Delete</button>
                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  onGetCards: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired
}

export default List
