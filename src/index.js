import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
//import App from './App'; //commented out - using app.css instead
import './App.css';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //Adding this line using JSX instead of the REACT component below
  <LoginForm />
  /*<React.StrictMode> //Not used 
    <App />
  </React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
