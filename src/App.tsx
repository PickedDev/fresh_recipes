import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Router';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/footer/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
