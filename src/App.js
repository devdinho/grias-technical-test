import Header from './components/Header';
import Main from './components/Main';
import SearchBox from './components/SearchBox';
import CardsContainer from './components/CardsContainer';
import Page from './components/Page';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <SearchBox />
        <h2>Encontramos { data.length } oportunidades cadastradas</h2>
        <CardsContainer />
      </Main>
      <Page />
    </div>
  );
}

export default App;
