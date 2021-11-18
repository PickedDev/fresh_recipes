import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Router';
import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';
import logo from './logo.svg';
import './App.css';
import 'tailwindcss/tailwind.css';
import GlobalCssOverride from './GlobalStyles';

function App() {
    return (
        <div className="wrapper">
            <Router>
                <GlobalCssOverride />
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
