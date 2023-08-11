import React from "react";
import { SocialIcon } from "react-social-icons";
import people1 from '../assets/Rectangle 7.png'
import people2 from '../assets/Rectangle 8.png'
import people3 from '../assets/Rectangle 9.png'
import people4 from '../assets/Rectangle 10.png'

function Followus() {
  return (
    <div>
      <div className="followUS">

        <div className="followicon">
          <h1>Follow Us</h1>
          <SocialIcon network="instagram" bgColor="white" fgColor="black" />
        </div>

        <div className="peoples">
            <div>
                <img src={people2}></img>
                <p>@mia</p>
            </div>
            <div>
                <img src={people3}></img>
                <p>@_jihyn</p>
            </div>
            <div>
                <img src={people4}></img>
                <p>@mia</p>
            </div>
            <div>
                <img src={people1}></img>
                <p>@_jihyn</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Followus;