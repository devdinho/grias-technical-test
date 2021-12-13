import React from 'react'
import '../styles/SearchBox.css';

function SearchBox() {
  return (
    <div className='search-box'>
      <span>Pesquisar por:</span>
      <form className='search-box__form'>
        <div className='search-box__input-container'>
          <div className='search-box__input-wrapper'>
            <input type='text' />
            <label htmlFor=''>Cargo, habilidade ou empresa</label>
          </div>
          <div className='search-box__input-wrapper'>
            <input type='text' />
            <label htmlFor=''>País, cidade ou estado</label>
          </div>
        </div>
        <div className='search-box__button-wrapper'>
          <button className='search-box__clean-filters'>Limpar filtros</button>
          <button className='search-box__search'>Pesquisar</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
