import React from 'react'
import '../css/SearchBox.css';

function SearchBox() {
  return (
    <div className='search-box'>
      <span>Pesquisar por:</span>
      <form className='search-box__form'>
        {/* <div className='search-box__input-wrapper'> */}
          <label htmlFor="">Cargo, habilidades ou empresa</label>
          <input type="text" />
          <label htmlFor="">País, cidade ou estado</label>
          <input type="text" />
        {/* </div> */}
        <div className='search-box__button-wrapper'>
          <button className='search-box__clean-filters'>Limpar filtros</button>
          <button className='search-box__search'>Pesquisar</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;