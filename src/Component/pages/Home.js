import React from 'react'

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../pages/contentofhero';
import Hero from '../Hero.js'
import Pricing from '../Pricing';

function Home() {
  return (
    <>
     < div className='home-page'>
           <Hero {...homeObjOne} />
           <Hero {...homeObjThree} />
           <Hero {...homeObjTwo} />
         <Pricing/>
           <Hero {...homeObjFour} />
    </div>
    </>
   
  )
}

export default Home
