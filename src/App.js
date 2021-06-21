import Home from './pages/Home'
import CharacterProvider from './contexts/CharacterContext';

function App() {
  return (
    <CharacterProvider>
      <div className="App">
        <Home />
      </div>
    </CharacterProvider>
  );
}

export default App;
