import React from "react";
import "./Custom.css";
import collection1 from "../assets/image 12.png";
import collection2 from "../assets/image 9.png";
// import Collection from './Collection';

function Collection() {
  return (
    <div>
      <div className="collections">
        <h1 className="collectionHeading">Collections</h1>

        <div >
          <div style={{height:'280px'}}>
            <div>
              <img src={collection1}></img>
            </div>
            <div className="relative">
              <p className="ten">10</p>
              <p className="octoberCollection">October</p>
              <p className="octoberCollection2">Collection</p>
            </div>
          </div>
          <div style={{height:'338px'}}>
            <div>
            <img src={collection2}></img>
            </div>
            <div className="relative2">
                <p className="autumn">Autumn</p>
                <p className="collection">Collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
