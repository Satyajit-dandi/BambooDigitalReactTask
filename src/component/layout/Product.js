import React from "react";
import "./Custom.css";
import productimg from '../assets/Rectangle5.png'
import productimg2 from '../assets/Rectangle6.png'
import divider from '../assets/Devider.svg'
import group12 from '../assets/Indicator.svg'


function Product() {
  return (
    <div>
      <div className="products">
        <h4>Just for you</h4>
        <img src={divider}></img>
        <div className="productList">
          <div className="prod">
            <div className="prodImg">
              <img src={productimg}></img>
            </div>
            <div>
              <p className="arrival3Desc" style={{padding: '0 42px',opacity:'0.7'}}>Harris Tweed Three button Jacket</p>
              <p className="arrival3Cost">$120</p>
            </div>
          </div>
          <div className="prod">
            <div className="prodImg">
              <img src={productimg2}></img>
            </div>
            <div>
              <p className="arrival3Desc" style={{padding: '0 42px',opacity:'0.7'}}>Cashmer Jacket</p>
              {/* <p className="arrival3Cost">$120</p> */}
            </div>
          </div>
        </div>

        <img src={group12}></img>
      </div>
    </div>
  );
}

export default Product;
