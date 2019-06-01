import React from 'react';
import { MainLayout } from './components';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'
import logo from './logo.svg';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <MainLayout>
          <Switch>
            <Routes />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
