import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Dashbord from './components/Dashbord';
import LoginComponent from './components/LoginComponent';
import Register from './components/Register';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Dashbord/>
      {/* <Register/> */}
      {/* <LoginComponent/> */}

   
    
    </BrowserRouter>
  </React.StrictMode>
);

