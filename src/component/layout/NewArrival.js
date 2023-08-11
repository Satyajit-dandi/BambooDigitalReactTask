import React from 'react'
import divider from '../assets/Devider.svg'
import './Custom.css'
import arrival1 from '../assets/Rectangle325.png'
import arrival2 from '../assets/Rectangle2.png'
import arrival3 from '../assets/Rectangle3.png'
import arrival4 from '../assets/Rectangle4.png'
import forwarArrow from '../assets/Forward Arrow.svg'
// import NewArrival from './NewArrival';

function NewArrival() {
  return (
    <div> 
        <div className='newArrivalHeading'>New Arrival</div>
        <img src={divider} alt="" srcset="" />
        
        <div className='options'>
          <span>All</span>
          <span>Apparel</span>
          <span>Dress</span>
          <span>Tshirt</span>
          <span>Bag</span>
        </div>


        <div className='collectedArrivals'>
          <div className='arrival1'>
            <div className='arrivalImg'>
              <img src={arrival1}></img>
            </div>
            <div>
              <p className='arrival1Desc'>21WN reversible angora cardigan</p>
              <p className='arrival1Cost'>$120</p>
            </div>
          </div>
          <div className='arrival1'>
            <div className='arrivalImg'>
              <img src={arrival2}></img>
            </div>
            <div>
              <p className='arrival2Desc'>21WN reversible angora cardigan</p>
              <p className='arrival2Cost'>$120</p>
            </div>
          </div>
          <div className='arrival1'>
            <div className='arrivalImg'>
              <img src={arrival3}></img>
            </div>
            <div>
              <p className='arrival3Desc'>21WN reversible angora cardigan</p>
              <p className='arrival3Cost'>$120</p>
            </div>
          </div>
          <div className='arrival1'>
            <div className='arrivalImg'>
              <img src={arrival4}></img>
            </div>
            <div>
              <p className='arrival4Desc'>Oblong bag</p>
              <p className='arrival4Cost'>$120</p>
            </div>
          </div>
        </div>

        <div className='exploreMore'>
          <p className='explore'>Explore More</p>
          <img src={forwarArrow} style={{width:'7%'}}></img>
        </div>

    </div>
  )
}

export default NewArrival
