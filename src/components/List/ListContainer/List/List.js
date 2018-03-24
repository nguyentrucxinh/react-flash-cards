import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class List extends Component {
  render () {
    return (
      <div>
        {/* Sum */}
        <div className='page-header'>
          <h2>0 Card(s)</h2>
        </div>

        {/* Filter */}
        <div className='btn-group btn-group-md' role='group' aria-label='filters'>
          <a href='' className='btn btn-primary'>All</a>
          <a href='' className='btn btn-default'>General</a>
          <a href='' className='btn btn-default'>Code</a>
          <a href='' className='btn btn-default'>Known</a>
          <a href='' className='btn btn-default'>Unknown</a>
        </div>

        <br />
        <br />

        {/* List */}
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td>
                <a href='/edit' className='btn btn-xs btn-primary'>
                  <i className='fa fa-pencil' aria-hidden='true' /> Edit
                </a>
                <a href='/delete' className='btn btn-xs btn-primary'>
                  <i className='fa fa-trash' aria-hidden='true' /> Delete
                </a>
              </td>
              <td className='cardContent'>
                <h4>
                  From
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
