/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SettingsPage from 'containers/SettingsPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
