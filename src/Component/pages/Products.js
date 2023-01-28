import React from 'react';
import Hero from '../Hero';
import { homeObjOne, homeObjTwo } from './contentofhero';
import Pricing from '../Pricing';

function Products() {
  return (
    <>
      <Pricing />
      <Hero {...homeObjOne} />
    </>
  );
}

export default Products;