import React from 'react';
import './CSS/Home.css';
import logo from './assets/logo.png';

function Home() {
  return (

    <div className='home'>
        <div className="HomeTitle">
          <img id="logo" src={logo}/>
          <h3> ALRihla Staking</h3>
        </div>
    </div>
  )
}

export default Home
