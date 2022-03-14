import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './scripts/app'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppStartUp } from './scripts/app.js';
import AppDefPage from './AppDefPage';

ReactDOM.render(
  <React.StrictMode>
    {(!window.defPage) ? <App /> : <AppDefPage />}
  </React.StrictMode>,
  document.getElementById('root')
);

document.addEventListener("load", AppStartUp());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
