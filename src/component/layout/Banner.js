import React from 'react'
import accessories from '../assets/accessories.png'
import group12 from '../assets/Group12.svg'
import './Custom.css'

function Banner() {
  return (
    <div>
      <div className="bannerSection">
        <div className="subBanner">
          <div className="backgroundImage">
            <img src={accessories} alt="" srcset="" />
          </div>
          <div className="positionDiv">

            <div className="bannerHeading">
              <h1>Luxury fashion & Accessories</h1>
            </div>

            <div className="banner">
              <button className="explorenow">Explore Now</button>
              <img src={group12}></img>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
