import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      {/* <h1>Project Portfolio</h1> */}
      <br />
      <br />
      <Projects />
      {/* <h1>Contact</h1> 
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
