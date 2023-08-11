import React from 'react'
import './Custom.css'
import videoimg from '../assets/videoImg.png'
import play from '../assets/Group 11.svg'
function Video() {
  return (
    <div>
        <div className='videos'>
            <div className='videoImg' style={{position:'relative'}}>
                <img src={videoimg}></img>
                <img style={{position:'absolute',right:'45%',top:'45%'}} src={play}></img>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default Video
