import React from 'react';
import '../assets/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Trusted Dealers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           
          </ul>
          <ul className='cards__items'>
            
            
            
            <CardItem
              src='images/asian.png'
              text='No.1 paint'
              label='Paint'
              path='/services'
            />
            <CardItem
              src='images/legrand.png'
              text='Live The Advantage'
              label='Switches'
              path='/products'
            />
            <CardItem
              src='images/philips.jpg'
              text='Lets make things better'
              label='Lights'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
