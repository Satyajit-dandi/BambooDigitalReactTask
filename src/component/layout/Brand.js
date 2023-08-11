import React from 'react'
import divider from '../assets/Devider.svg'
// import divider from '../assets/Devider.svg'
import prada from '../assets/Prada.svg'
import burberry from '../assets/Burberry.svg'
import boss from '../assets/Boss.svg'
import cartier from '../assets/Catier.svg'
import gucci from '../assets/Gucci.svg'
import tiffany from '../assets/Tiffany & Co.svg'
import './Custom.css'

function Brand() {
  return (
    <div>
        <div className='brandList'>
            <img src={divider}></img>
            <div className='brandLogo'>
                <div>
                    <img src={prada}></img>
                </div>
                <div>
                    <img src={burberry}></img>
                </div>
                <div>
                    <img src={boss}></img>
                </div>
                <div>
                    <img src={cartier}></img>
                </div>
                <div>
                    <img src={gucci}></img>
                </div>
                <div>
                    <img src={tiffany                                                                                                            }></img>
                </div>
            </div>
            <img src={divider}></img>
        </div>
    </div>
  )
}

export default Brand
