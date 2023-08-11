import React from "react";
import group from "../assets/Group.svg";
import divider from "../assets/Devider.svg";
import feature1 from "../assets/Miroodles Sticker.png";
import feature2 from "../assets/Miroodles Sticker2.png";
import feature3 from "../assets/Miroodles Sticker3.png";
import feature4 from "../assets/Miroodles Sticker4.png";
import seperator from "../assets/seperator.svg";

function Trendingnfashion() {
  return (
    <div>
      <div className="trending">
        <div className="trendHeader">
          <h4>@ trending</h4>
        </div>
        <div className="trendOptions">
          <p>#2021</p>
          <p>#spring</p>
          <p>#collection</p>
          <p>#fall</p>
          <p>#dress</p>
          <p>#autumncollection</p>
          <p>#openfashion</p>
        </div>
      </div>

      <div className="openFashion" style={{ background: "#f7f7f7" }}>
        <div>
          <img src={group} style={{ margin: "25px 0", width: "30%" }}></img>
        </div>
        <div className="description">
          Making a luxurious lifestyle accessible for a generous group of women
          is our daily drive.
        </div>
        <img src={divider}></img>

        <div className="specialFeature">
          <div className="features">
            <img src={feature1}></img>
            <p>Fast shipping. Free on orders over $25.</p>
          </div>
          <div className="features">
            <img src={feature2}></img>
            <p>Sustainable process from start to finish.</p>
          </div>
          <div className="features">
            <img src={feature3}></img>
            <p>Unique designs and high-quality materials.</p>
          </div>
          <div className="features">
            <img src={feature4}></img>
            <p>Fast shipping. Free on orders over $25.</p>
          </div>
        </div>
        <div className="seperatoir" style={{padding:'20px 0'}}>
          <img src={seperator}></img>
        </div>
      </div>
    </div>
  );
}

export default Trendingnfashion;
