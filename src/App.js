import './App.css';
import Header from './components/Header/Header';
import About from './components/Layout/About';
import Counter from './components/Layout/Counter';
import Hero from './components/Layout/Hero';
import Services from './components/Layout/Services';
import Team from './components/Layout/Team';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero/>
        <Counter/>
        <Services/>
        <About/>
        <Team/>
      </div>
    </>
  );
}

export default App;
