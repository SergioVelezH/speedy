import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Presale from './components/Presale';
import Ecosystem from './components/Ecosystem';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="appWrapper">
      <Nav />
      <Hero />
      <Presale />
      <Ecosystem />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;