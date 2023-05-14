import React from 'react'

import './index.css'

const FabricDetail = (props) => {
  const {eachData}=props;
  const {title,cost,imageUrl,materialCost,makingCost,side1,side2,side3}=eachData
  return (
    <div className="card-container">
          <div className="card-image-container">
            <img src={imageUrl} alt="shirt1" className="card-image"/>
            <div className='side-images-container'>
                <img src={side1} alt="side1" className='side-image'/>
                <img src={side2} alt="side2" className='side-image'/>
                <img src={side3} alt="side3" className='side-image'/>
            </div>
          </div>
          <div className="card-description">
            <h1 className="card-title">{title}</h1>
            <p className='cost-description'>Cost : {cost}₹</p>
            <div className='cost-container'>
                <p className='cost-description'>Material Cost : {materialCost}₹</p>
                <p className='cost-description des1'>Making Cost : {makingCost}₹</p>
            </div>
            <div className="card-button-container">
            <button className='card-button'>Add to cart</button>
            </div>
          </div>
        </div>
  )
}

export default FabricDetail