import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Markdown from 'react-remarkable'
import highlight from '../../../highlight'

class List extends Component {
  constructor (props) {
    super(props)
    this.props.onGetCards()

    this.handleButtonDelete = this.handleButtonDelete.bind(this)
  }

  handleButtonDelete (id) {
    this.props.onDeleteCard(id)
  }

  renderRow (card) {
    return (
      <tr key={card._id}>
        <td className='col-md-1'>

          <Link to={'/form/' + card._id} className='btn btn-xs btn-primary'>
            <i className='fa fa-pencil' aria-hidden='true' /> Edit
          </Link>

          <br />
          <a onClick={() => this.handleButtonDelete(card._id)} className='btn btn-xs btn-danger'>
            <i className='fa fa-trash' aria-hidden='true' /> Delete
          </a>
        </td>
        <td className='cardContent col-md-11'>
          <Markdown options={{ highlight }}>{card.front}</Markdown>

          <Markdown options={{ highlight }}>{card.back}</Markdown>

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

      </div>
    )
  }
}

List.propTypes = {
  onGetCards: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired
}

export default List
