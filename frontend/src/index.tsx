import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/pages/mainPage';
import './components/shared/global.css'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import ComponentPage from './components/pages/componentLibraryPage';
import BrowserPage from './components/pages/browsePage';
import TrainerPage from './components/pages/trainerPage';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/Components" component={ComponentPage} />
        <Route path="/Browse" component={BrowserPage} />
        <Route path="/Trainer" component={TrainerPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
