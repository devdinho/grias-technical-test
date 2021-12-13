import React from 'react';
import Card from './Card';
import '../styles/CardsContainer.css';
import data from '../data';

function CardsContainer() {

  return (
    <div className='main__cards-container'>{data.map((card, i) => (
      <Card key={ i } props={ card } />
    ))}</div>
  );
};

export default CardsContainer;