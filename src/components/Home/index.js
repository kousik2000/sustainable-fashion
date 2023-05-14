import React from 'react'
import Header from '../Header'

import { useNavigate } from 'react-router-dom';

import './index.css'

const Home = () => {

    const navigate = useNavigate();

    const fabricButtonClick=()=>{
        navigate("/fabric")
    }

    const productButtonClick=()=>{
        navigate("/product")
    }


  return (
    <>
    <div className='bg-container'>
        <Header/>
        <div className="home-container">
            <h1 className='main-head'>SUSTAINABLE FASHION</h1>
            <p className="description">Sustainable fashion is the movement towards creating clothing products and processes that have greater environmental and social integrity. The goal of the movement is for the fashion industry to do less harm and do more good. Sustainable fashion is about balancing the needs of people, planet, and profit.</p>
            <div className="earth-image-container">
            <img src="https://i.ibb.co/Jq8jxWm/112222.png" className="earth" alt="earth" />
            </div>
        </div>
    </div>
    <div className="product-container">
        <h1 className='main-head'>OUR PRODUCTS</h1>
        <div className='fabric-container'>
            <div className='fabric-description-container'>
                <h1 className='sub-head'>HANDMADE FABRICS</h1>
                <p className='description_a'>Handmade fabrics have been a part of the Indian way of living since time immemorial.
Indian fabrics reflect the traditional heritage and cultural wealth of India.</p>
                <button type="button" className='button' onClick={fabricButtonClick}>View Product</button>
            </div>
            <div className='main-vetcor-container'>
                <img src="https://i.ibb.co/VJQDMCQ/8636.png" alt="vector1" className='main-vector'/>
            </div>
        </div>

        <div className='fabric-container'>
        <div className='main-vetcor-container product-image-order'>
                <img src="https://i.ibb.co/2nD96k4/8585.png" alt="vector1" className='main-vector'/>
            </div>
            <div className='fabric-description-container'>
                <h1 className='sub-head'>HANDMADE PRODUCTS</h1>
                <p className='description_a'>Handmade products are great for the environment. Most of handmade products do not require a large production facility or noisy factories.</p>
                <button type="button" className='button' onClick={productButtonClick}>View Product</button>
            </div>
            
        </div>
    </div>
    <div className="over-view-container">
        <h1 className="main-head">OVERVIEW</h1>
        <p className="description_b">At our website, we believe that there's no need to spend a fortune on designer goods just to show off your status. Instead, we encourage our customers to invest in sustainable and locally made products that not only benefit the environment but also support local communities. We aim to promote the value of craftsmanship and uniqueness over false status symbols, and we're committed to providing transparent pricing information so that our customers can trust the quality and value of their purchases. Join us in making conscious and responsible choices for a better future.</p>
    </div>
    </>
  )
}

export default Home