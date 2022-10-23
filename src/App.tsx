import './App.scss';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import * as React from 'react';

const Routes = () => {
    return useRoutes([
        { element: <Layout />, path: "/" },
    ]);
}

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;