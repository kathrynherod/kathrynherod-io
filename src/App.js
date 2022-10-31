import './App.scss';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import * as React from 'react';
import './index.scss';

const Routes = () => {
    return useRoutes([
        { element: <Home />, path: "/" },
        { element: <Work />, path: "/work" },
    ]);
}

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes />
    </Router>
  );
};

export default App;