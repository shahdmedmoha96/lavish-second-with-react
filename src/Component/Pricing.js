

import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import "./Pricing.css"

function Pricing() {
  return (
    <>
      <div className='pricing'>
        <div className='price-content'>
      <h1 className='pricing__heading'>Pricing</h1>
      <div className='price-container'>
        <Link to='/sign-up' className='Bblue' >
        <div className='pricing__container-cardInfo'>
            <div className='icon'>
    <i className='fas fa-fire'/>
</div>
<h3>Starter</h3>
<h4>$8.99</h4>
<span>per month</span>
           <ul className='pricing__container-features'>
<li>100 Transactions</li>
<li>2% Cash Back</li>
<li>$10,000 Limit</li>
</ul>
<Button type="black" buttonSize="btn--large"> Choose Plan</Button>
               </div>
        </Link >
        <Link to='/sign-up'className='Bblack' >
        <div className='pricing__container-cardInfo'>
            <div className='icon'>
    <i className='fas fa-fire'/>
</div>
 <h3>Gold</h3>
              <h4>$29.99</h4>
              <span>per month</span>
                <ul className='pricing__container-features'>
                  <li>1000 Transactions</li>
                  <li>3.5% Cash Back</li>
                  <li>$100,000 Limit</li>
                 </ul>
<Button type="blue" buttonSize="btn--large"> Choose Plan</Button>
               </div>
        </Link>
        <Link to='/sign-up' className='Bblue'>
        <div className='pricing__container-cardInfo'>
            <div className='icon'>
    <i className='fas fa-fire'/>
</div>
<h3>Diamond</h3>
                <h4>$99.99</h4>
                <span>per month</span>
                <ul className='pricing__container-features'>
                  <li>Unlimited Transactions</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul>
<Button type="black" buttonSize="btn--large"> Choose Plan</Button>
               </div>
        </Link>
      </div>
      </div>
      </div>
    </>
  )
}

export default Pricing
