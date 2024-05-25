import './App.css';
import Header from './components/Header/Header';
import Counter from './components/Layout/Counter';
import Hero from './components/Layout/Hero';
import Services from './components/Layout/Services';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero/>
        <Counter/>
        <Services/>
      </div>
    </>
  );
}

export default App;
