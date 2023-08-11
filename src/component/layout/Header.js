import React from 'react'
import logo1 from '../assets/logo.svg'
import group from '../assets/Group.svg'
import search from '../assets/Search.svg'
import shopping from '../assets/shopping bag.svg'
import '../../App.css'



function Header() {
  return (
    <div>
      <div
        className="headerIcon"
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#E7EAEF",padding:'15px 10px'
        }}
      >
        <img src={logo1} alt="" srcset="" />
        <img src={group} alt="" srcset="" />
        <img src={search} alt="" srcset="" />
        <img src={shopping} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Header
