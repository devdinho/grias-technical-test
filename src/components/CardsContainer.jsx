import React from 'react';
import Card from './Card';
import '../css/CardsContainer.css';

const data = [
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
  { name: 'First', occupation: 'Dev', level: 'Junior', time: 'Integral', location: 'Rio de Janeiro' },
];

function CardsContainer() {

  return (
    <div className='main__cards-container'>{data.map((card, i) => (
      <Card key={ i } props={ card } />
    ))}</div>
  );
};

export default CardsContainer;