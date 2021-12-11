import React from 'react';
import '../css/Card.css';

function Card({ props }) {
  const { name, occupation, level, time, location } = props;
  console.log(props)

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