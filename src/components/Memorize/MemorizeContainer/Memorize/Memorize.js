import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Memorize extends Component {
  constructor (props) {
    super(props)
    this.props.onGetCardRandom()
  }

  render () {
    return (
      <div>

        {/* Card Type */}
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <div className='btn-group btn-group-lg' role='group' aria-label='card type'>
              <a href='general' className='btn btn-primary'>General</a>
              <a href='code' className='btn btn-default'>Code</a>
            </div>
          </div>
        </div>

        <hr />

        {/* Card */}
        <div className='row memorizePanel'>
          <div className='col-xs-8 col-xs-offset-2'>
            <div className='panel panel-default cardFront'>
              <div className='panel-body'>
                <div className='alignContainer'>
                  <div className='alignMiddle frontText'>
                    <h3 className='text-center'>{this.props.card.front}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='panel panel-primary cardBack'>
              <div className='panel-body'>
                <div className='alignContainer'>
                  <div className='alignMiddle frontText'>

                    <div className='text-center largerText'>
                      {this.props.card.back}
                    </div>

                    <pre>
                      <code>
                        {this.props.card.back}
                      </code>
                    </pre>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <a href='' className='btn btn-primary btn-lg flipCard'>
              <i className='fa fa-exchange' />
              Flip Card
            </a>
            &nbsp;
            &nbsp;
            <a href='mark_known' className='btn btn-success btn-lg'>
              <i className='fa fa-check' />
              I Know It
            </a>
            &nbsp;
            &nbsp;
            <a href='card_type' className='btn btn-primary btn-lg'>
              Next Card
              <i className='fa fa-arrow-right' />
            </a>
          </div>
        </div>

        {/* Bookmark */}
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <br />
            <br />
            <br />
            <a href='' className='btn btn-default btn-sm'>
              <i className='fa fa-bookmark' />
              bookmark this card (# card.id )
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Memorize
