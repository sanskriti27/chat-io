import React from 'react';
import { Switch } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';
import Signin from './pages/Signin';
import './styles/main.scss';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/home/index';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

const App = () => {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <Signin />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
};

export default App;
