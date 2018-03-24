import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class List extends Component {
  constructor (props) {
    super(props)
    this.props.onGetCards()
  }

  render () {
    return (
      <div>
        {/* Sum */}
        <div className='page-header'>
          <h2>{this.props.cards.length} Card(s)</h2>
        </div>

        {/* Filter */}
        <div className='btn-group btn-group-md' role='group' aria-label='filters'>
          <a className='btn btn-primary'>All</a>
          <a className='btn btn-default'>General</a>
          <a className='btn btn-default'>Code</a>
          <a className='btn btn-default'>Known</a>
          <a className='btn btn-default'>Unknown</a>
        </div>

        <br />
        <br />

        {/* List */}
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td>
                <a className='btn btn-xs btn-primary'>
                  <i className='fa fa-pencil' aria-hidden='true' /> Edit
                </a>
              </td>
              <td>
                <a className='btn btn-xs btn-primary'>
                  <i className='fa fa-trash' aria-hidden='true' /> Delete
                </a>
              </td>
              <td className='cardContent'>
                <h4>
                  Front
                </h4>

                <pre>
                  <code>
                    Back
                  </code>
                </pre>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default List
