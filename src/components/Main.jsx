import React from 'react';
import '../styles/Main.css';

const Main = (props) => {
  return (
    <main className='main'>{ props.children }</main>
  );
};

export default Main;