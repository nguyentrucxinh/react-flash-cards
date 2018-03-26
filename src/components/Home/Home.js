import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className='row'>
    <div className='panel panel-default'>
      <div className='panel-body'>
        <div className='text-center'>
          <img alt='Nguyen Truc Xinh' src='http://placehold.it/100x100' className='img-circle' width='100' height='100' />
          <h3 className='text-success'><strong>Spaced Repetition Software (SRS)</strong></h3>
          <h4 className='text-default'>
            SRS is essentially digital flashcard software.
            <br />
            But unlike other flashcard software, it tries to schedule card reviews at efficient intervals.
          </h4>
        </div>
        <p className='text-center'>
          The theory behind spaced repetition is that humans rarely memorize a new fact all at once.
          <br />
          The first time we see a fact, we may only remember for a day or two.
          <br />
          But if we force ourselves to remember or review that fact before we forget it, we'll remember it longer the next time.
          <br />
          So if we review something at increasing intervals, we'll have a good chance of remembering it indefinitely.
          <br />
          It's possible to do this by hand, using index cards and some sort of scheduling system, but most people use special flashcard software with built-in support for scheduling cards.
          <br />
          See also <a href='https://en.wikipedia.org/wiki/Spaced_repetition' target='_blank' rel='noopener noreferrer'>Wikipedia: Spaced repetition.</a>
        </p>
        <Link to='/memorize' className='btn btn-success center-block'>View More</Link>
      </div>
    </div>
  </div>
)

export default Home
