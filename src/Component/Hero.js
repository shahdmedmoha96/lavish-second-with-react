import React from 'react'
import { Link } from 'react-router-dom';
import Button from "./Button"
import "./Hero.css"
function Hero({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart
}) {
  return (
    <>
    <div className={lightBg ? "hero-home": "hero-home darkBg"} >
        <div className='container'>
            <div className='row row-home' style={{display: "flex" , flexDirection :imgStart ==='start' ?  'row-reverse': 'row'}}>
<div className='col'>
    <div className='home-text'>
        <div className='top-Line'> {topLine}</div>
        <h1 className={lightText ? "heading": "heading dark"}>{headline}</h1>
        <p className={lightTextDesc ? "hero-subtitle": "hero-subtitle dark"}>{description}</p>
<Link to="/sign-up"> 
<Button type="blue" buttonSize="btn--large">{buttonLabel}</Button>
</Link>
    </div>
</div>
<div className='col'>
    <div className='img-hero'>
        <img src={img} alt ={alt} className="image"/>
    </div>

</div>
            </div>
             </div>

    </div>
      
    </>
  )
}

export default Hero
