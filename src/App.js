import Header from './components/Header';
import Main from './components/Main';
import SearchBox from './components/SearchBox';
import CardsContainer from './components/CardsContainer';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <SearchBox />
        <h3>Encontramos X oportunidades cadastradas</h3>
        <CardsContainer />
      </Main>
      <Page />
    </div>
  );
}

export default App;
