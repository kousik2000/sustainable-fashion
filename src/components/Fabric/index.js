import React from 'react'
import Header from '../Header'

import { useNavigate } from 'react-router-dom';

import {BiArrowBack} from 'react-icons/bi'
import './index.css'

import FabricDetail from '../FabricDetail'

const fabricData= [
  {
    id:1,
    title:'Pure Cotton Aquamarine Shirt',
    cost:300,
    materialCost:150,
    makingCost:150,
    imageUrl:'https://cdn.shopify.com/s/files/1/0508/5813/1628/products/FormalGreen_3_1800x1800.jpg?v=1624012145',
    side1:'https://cdn.shopify.com/s/files/1/0508/5813/1628/products/FormalGreen_1_540x.jpg?v=1624012154',
    side2:'https://cdn.shopify.com/s/files/1/0508/5813/1628/products/FormalGreen_2_360x.jpg?v=1624012165',
    side3:'https://cdn.shopify.com/s/files/1/0508/5813/1628/products/FormalGreen_4_1800x1800.jpg?v=1624012171'
  },
  {
    id:2,
    title:'Sustainable Cotton Cave stripes Slim Fit Shirt',
    cost:500,
    materialCost:200,
    makingCost:300,
    imageUrl:'https://cdn.shopify.com/s/files/1/0508/5813/1628/products/SLIMBlack_Yellow_4_1800x1800.jpg?v=1624026094',
    side1:'https://cdn.shopify.com/s/files/1/0508/5813/1628/products/SLIMBlack_Yellow_2_360x.jpg?v=1624026080',
    side2:'https://cdn.shopify.com/s/files/1/0508/5813/1628/products/SLIMBlack_Yellow_1_360x.jpg?v=1624026085',
    side3:'https://cdn.shopify.com/s/files/1/0508/5813/1628/products/SLIMBlack_Yellow_3_360x.jpg?v=1624026090'
  }
]

const Fabric = () => {

  const navigate = useNavigate();

  const handleBack =()=>{
    navigate('/');
  }

  return (
    <div className='bg-container'>
      <Header/>
      <div className='back-arrow-heading-container'>
        <button className='arrow-button-container' onClick={handleBack}>
        <BiArrowBack className='arrow'/>
        </button>
        <h1 className='sub-head2'>HANDMADE FABRIC</h1>
        <select className='select-input'>
          <option value="shirt">Shirt</option>
          <option value="shirt">T-shirts</option>
          <option value="shirt">Fabric</option>
        </select>
      </div>
      <hr  className='line'/>
      <div className='fabric-item-container'>
        {fabricData.map(eachData=>(
          <FabricDetail eachData={eachData} key={eachData.id}/>
        ))}
      </div>
    </div>
  )
}

export default Fabric