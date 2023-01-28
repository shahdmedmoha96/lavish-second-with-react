import React from 'react';
import Hero from '../Hero';
import { homeObjOne, homeObjThree } from './contentofhero';
import Pricing from '../Pricing';

function SignUp() {
  return (
    <>
      <Pricing />
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
    </>
  );
}

export default SignUp;