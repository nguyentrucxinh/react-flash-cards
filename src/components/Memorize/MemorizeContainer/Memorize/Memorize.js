import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-remarkable'
import highlight from '../../../highlight'
import { CARD_TYPE } from '../../../../constants/cardTypes'

class Memorize extends Component {
  constructor (props) {
    super(props)
    this.props.onGetCardFirst()

    this.state = {
      isFront: true
    }

    this.handleButtonNextCard = this.handleButtonNextCard.bind(this)
    this.handleButtonPrevCard = this.handleButtonPrevCard.bind(this)
    this.handleButtonRandomCard = this.handleButtonRandomCard.bind(this)
    this.handleButtonKnown = this.handleButtonKnown.bind(this)
    this.handleButtonFlipCard = this.handleButtonFlipCard.bind(this)
  }

  handleButtonNextCard (e) {
    e.preventDefault()

    this.backToFrontCard()

    this.props.onGetCardNext(this.props.card._id)
  }

  handleButtonPrevCard (e) {
    e.preventDefault()

    this.backToFrontCard()

    this.props.onGetCardPrev(this.props.card._id)
  }

  handleButtonRandomCard (e) {
    e.preventDefault()

    this.backToFrontCard()

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

  backToFrontCard () {
    this.setState({ isFront: true })
  }

  renderContent () {
    // Front
    if (this.state.isFront) {
      return (
        <div className='text-center'>
          <Markdown options={{ highlight }}>{this.props.card.front}</Markdown>
        </div>
      )
    }

    // Back
    if (this.props.card.type === 1) {
      return (
        <div className='text-center'>
          <Markdown options={{ highlight }}>{this.props.card.back}</Markdown>
        </div>
      )
    } else {
      return (
        <Markdown options={{ highlight }}>{this.props.card.back}</Markdown>
      )
    }
  }

  render () {
    const { card } = this.props

    return (
      <div>

        {/* Buttons */}
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <a onClick={this.handleButtonPrevCard} className='btn btn-primary btn-lg'>
              <i className='fa fa-arrow-left' />
              Prev Card
            </a>
            &nbsp;
            &nbsp;
            <a onClick={this.handleButtonFlipCard} className='btn btn-primary btn-lg flipCard'>
              <i className='fa fa-exchange' />
              Flip Card
            </a>
            &nbsp;
            &nbsp;
            <a onClick={this.handleButtonNextCard} className='btn btn-primary btn-lg'>
              Next Card
              <i className='fa fa-arrow-right' />
            </a>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 text-center'>
            <a onClick={this.handleButtonRandomCard} className='btn btn-primary btn-lg'>
              Random Card
              <i className='fa fa-random' />
            </a>
            &nbsp;
            &nbsp;
            <a onClick={this.handleButtonKnown} className='btn btn-success btn-lg'>
              <i className='fa fa-check' />
              I Know It
            </a>
          </div>
        </div>

        <hr />

        {/* Card Type */}
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <div className='btn-group btn-group-lg' role='group' aria-label='card type'>
              <a className={'btn btn-' + (card.type === CARD_TYPE.title ? 'primary' : 'default')}>Title</a>
              <a className={'btn btn-' + (card.type === CARD_TYPE.general ? 'primary' : 'default')}>General</a>
              <a className={'btn btn-' + (card.type === CARD_TYPE.code ? 'primary' : 'default')}>Code</a>
            </div>
          </div>
        </div >

        {/* Card */}
        <div className='row memorizePanel'>
          <div className='col-md-8 col-md-offset-2 col-xs-12'>

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

      </div >
    )
  }
}

Memorize.propTypes = {
  onGetCardRandom: PropTypes.func.isRequired,
  onUpdateCard: PropTypes.func.isRequired,
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
    known: PropTypes.bool.isRequired
  }).isRequired
}

export default Memorize
