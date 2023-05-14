import React from 'react'
import Header from '../Header'

import { useNavigate } from 'react-router-dom';


import {BiArrowBack} from 'react-icons/bi'
import './index.css'

const Cart = () => {

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
        <h1 className='sub-head2'>CART</h1>
        <h1 className='sub-head2'>TOTAL</h1>
      </div>
      <hr  className='line'/>
      <div className='fabric-item-container'>
        <h1 className='main-head'>Under Maintenance</h1>
      </div>
    </div>
  )
}

export default Cart