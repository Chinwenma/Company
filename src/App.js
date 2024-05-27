import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Layout/About';
import Blog from './components/Layout/Blog';
import Counter from './components/Layout/Counter';
import Hero from './components/Layout/Hero';
import Newsletter from './components/Layout/Newsletter';
import Services from './components/Layout/Services';
import Team from './components/Layout/Team';
import Testimonial from './components/Layout/Testimonial';

function App() {
  return (
    <>
      
        <Header />
        <Hero/>
        <Counter/>
        <Services/>
        <About/>
        <Team/>
        <Blog/>,
        <Testimonial/>
        <Newsletter/>
        <Footer/>
      
    </>
  );
}

export default App;
