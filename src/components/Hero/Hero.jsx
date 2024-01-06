import React from 'react';
import './Hero.css';
import herobanner from '../../images/wepik-export-2.png';
import Grid from '@mui/material/Grid';

const Hero = () => {
  return (
   
    <div className="section hero" aria-label="hero" >
        <div className="container">

      
          <div className="hero-content">

            <h1 className="h1 hero-title">Trade Digital Assets Seamlessly on CoinCrafters</h1>

            <p className="hero-text">
            CoinCrafters provides the simplest, most secure, and quickest platform <br /> for buying and selling a wide range of digital assets.
            </p>

            <a href="/coins" className="btn btn-primary">Get started now</a>

          

          </div>
        


         

          <div className="hero-banner">

          <img src={herobanner} width="570" height="600" alt="hero banner"  className='w-100'/>
            
          </div>
         

        </div>
      </div>
    
  );
};

export default Hero;