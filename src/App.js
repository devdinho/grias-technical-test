import Header from './components/Header';
import Main from './components/Main';
import SearchBox from './components/SearchBox';
import CardsContainer from './components/CardsContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <SearchBox />
        <CardsContainer />
      </Main>
    </div>
  );
}

export default App;
