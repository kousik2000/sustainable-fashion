import React from 'react'
import Header from '../Header'

import { useNavigate } from 'react-router-dom';

import {BiArrowBack} from 'react-icons/bi'
import './index.css'

import ProductDetail from '../ProductDetail'

const fabricData= [
  {
    id:1,
    title:'Zeyar Terracotta Serving Bowl',
    cost:300,
    materialCost:150,
    makingCost:150,
    imageUrl:'https://media.craftmaestros.com/media/catalog/product/cache/a01441fde58691fd2d38c1b8ed6a019d/d/s/dsc02659_3.jpg',
    side1:'https://media.craftmaestros.com/media/catalog/product/cache/a01441fde58691fd2d38c1b8ed6a019d/d/s/dsc02659_3.jpg',
    side2:'https://media.craftmaestros.com/media/catalog/product/cache/10400f3b76c5cb964935649fe71ae22a/d/s/dsc02430_1.jpg',
    side3:'https://media.craftmaestros.com/media/catalog/product/cache/10400f3b76c5cb964935649fe71ae22a/d/s/dsc02431_1.jpg'
  },
  {
    id:2,
    title:'Nandar Tealight Holder',
    cost:500,
    materialCost:200,
    makingCost:300,
    imageUrl:'https://media.craftmaestros.com/media/catalog/product/cache/530c5d681172142dbd7080ff811a9b17/d/s/dsc02560.jpg',
    side1:'https://media.craftmaestros.com/media/catalog/product/cache/530c5d681172142dbd7080ff811a9b17/d/s/dsc02560.jpg',
    side2:'https://media.craftmaestros.com/media/catalog/product/cache/530c5d681172142dbd7080ff811a9b17/d/s/dsc02462.jpg',
    side3:'https://media.craftmaestros.com/media/catalog/product/cache/530c5d681172142dbd7080ff811a9b17/d/s/dsc02463.jpg'
  }
]

const Product = () => {

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
        <h1 className='sub-head2'>HANDMADE PRODUCTS</h1>
        <select className='select-input'>
          <option value="shirt">Terracota</option>
          <option value="shirt">Wooden</option>
          <option value="shirt">Bamboo</option>
        </select>
      </div>
      <hr  className='line'/>
      <div className='fabric-item-container'>
        {fabricData.map(eachData=>(
          <ProductDetail eachData={eachData} key={eachData.id}/>
        ))}
      </div>
    </div>
  )
}

export default Product