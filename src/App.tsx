import React from 'react';
import { MainLayout } from './components';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
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
