import './App.scss';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Intro from './routes/Intro';
import Work from './routes/Work';
import * as React from 'react';
import './index.scss';

const Routes = () => {
    return useRoutes([
        { element: <Intro />, path: "/" },
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