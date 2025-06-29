import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

// import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Contact />
      {/* <Footer /> */}
      
      {/* Temporary content for development */}
      <main style={{ padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <h1>Precision Contractor Website</h1>
        <p>Your website is being built. Components will be added here as they're created.</p>
      </main>
    </div>
  );
}

export default App;