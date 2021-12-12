import React from 'react';
import '../styles/Card.css';

function Card({ props }) {
  const { name, occupation, level, time, location } = props;

  return (
    <div className='main__card'>
      <span>{ name }</span>
      <strong><span>{ occupation }</span></strong>
      <span>{ level }</span>
      <span>{ time }</span>
      <span>{ location }</span>
    </div>
  );
}

export default Card;