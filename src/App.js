import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
