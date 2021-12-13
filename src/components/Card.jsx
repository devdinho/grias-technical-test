import React from 'react';
import '../styles/Card.css';

function Card({ props }) {
  const { name, occupation, level, time, location } = props;

  return (
    <div className='main__card'>
      <div className='main__logo-wrapper'>
        <div className='main__picture'></div>
        <span>{ name }</span>
      </div>
      <strong><span>{ occupation }</span></strong>
      <div class='main__span-wrapper'>
        <span>{ level }</span>
        <span>{ time }</span>
        <span>{ location }</span>
      </div>
      <span>Criada há { Math.random() * 15 + 1 | 0 } dias</span>
    </div>
  );
}

export default Card;