import React from 'react'

const Home = () => (
  <div className='row'>
    <div className='panel panel-default'>
      <div className='panel-body'>
        <div className='text-center'>
          <img alt='Nguyen Truc Xinh' src='http://nguyentrucxinh.github.io/img/avatar.png' className='img-circle' width='100' height='100' />
          <h3 className='text-success'><strong>Nguyen Truc Xinh</strong></h3>
          <h4 className='text-default'>Full-stack JavaScript Developer</h4>
        </div>
        <p className='text-center'>
          <strong>JavaScript</strong> junkie & <strong>Java</strong> lover. <br />
          Build the great tools for the convenience of the human. <br />
          Favorite stacks: <strong>Node.js/React/MongoDB - JavaEE/Spring/Hibernate</strong>. <br />
          Mostly.
        </p>
        <a className='btn btn-success center-block' href='https://www.linkedin.com/in/nguyentrucxinh/' target='_blank'>View More</a>
      </div>
    </div>
  </div>
)

export default Home
