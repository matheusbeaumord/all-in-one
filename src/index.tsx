import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

  </React.StrictMode>,
  document.getElementById('root')
);
