import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Memorize extends Component {
  constructor (props) {
    super(props)
    this.props.onGetCardRandom()

    this.state = {
      isFront: true
    }

    this.handleButtonNextCard = this.handleButtonNextCard.bind(this)
    this.handleButtonKnown = this.handleButtonKnown.bind(this)
    this.handleButtonFlipCard = this.handleButtonFlipCard.bind(this)
  }

  handleButtonNextCard (e) {
    e.preventDefault()

    // Back to front card
    this.setState({ isFront: true })

    this.props.onGetCardRandom()
  }

  handleButtonKnown (e) {
    e.preventDefault()
    this.props.onUpdateCard(this.props.card._id, { known: true })
  }

  handleButtonFlipCard (e) {
    e.preventDefault()
    this.setState({ isFront: !this.state.isFront })
  }

  renderContent () {
    // Front
    if (this.state.isFront) {
      return <h3 className='text-center'>{this.props.card.front}</h3>
    }

    // Back
    if (this.props.card.type === 1) {
      return (
        <div className='text-center largerText'>
          {this.props.card.back}
        </div>
      )
    } else {
      return (
        <pre>
          <code>
            {this.props.card.back}
          </code>
        </pre>
      )
    }
  }

  render () {
    const { card } = this.props

    return (
      <div>

        {/* Card Type */}
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <div className='btn-group btn-group-lg' role='group' aria-label='card type'>
              <a className={'btn btn-' + (card.type === 1 ? 'primary' : 'default')}>General</a>
              <a className={'btn btn-' + (card.type === 2 ? 'primary' : 'default')}>Code</a>
            </div>
          </div>
        </div >

        <hr />

        {/* Card */}
        <div className='row memorizePanel'>
          <div className='col-xs-8 col-xs-offset-2'>

            <div className='panel panel-default cardFront'>
              <div className={'panel-body ' + (this.state.isFront ? '' : 'bg-info')}>
                <div className='alignContainer'>
                  <div className='alignMiddle frontText'>
                    {this.renderContent()}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <a onClick={this.handleButtonFlipCard} className='btn btn-primary btn-lg flipCard'>
              <i className='fa fa-exchange' />
              Flip Card
            </a>
            &nbsp;
            &nbsp;
            <a onClick={this.handleButtonKnown} className='btn btn-success btn-lg'>
              <i className='fa fa-check' />
              I Know It
            </a>
            &nbsp;
            &nbsp;
            <a onClick={this.handleButtonNextCard} className='btn btn-primary btn-lg'>
              Next Card
              <i className='fa fa-arrow-right' />
            </a>
          </div>
        </div>

      </div >
    )
  }
}

Memorize.propTypes = {
  onGetCardRandom: PropTypes.func.isRequired,
  onUpdateCard: PropTypes.func.isRequired,
  card: PropTypes.PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
    known: PropTypes.bool.isRequired
  }).isRequired
}

export default Memorize
