import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Header from './components/ui/Header'

function App() {
  return (
    <div className="App">
      <Header >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </Header >
    </div>
  );
}

export default App;
