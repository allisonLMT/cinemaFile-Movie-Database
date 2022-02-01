import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './styles/normalize-fwd.css';
import './styles/index.css';
import AppRouter from './routers/AppRouter';



ReactDOM.render(
  <BrowserRouter basename="cinemafile">
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('root')
);