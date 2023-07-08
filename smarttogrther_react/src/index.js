import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Dashbord from './admindashboard/Dashbord';
import LoginComponent from './components/LoginComponent';
import Register from './components/Register';
import RouteDashboard from './admindashboard/RouteDashboard';
import FeedbackPopup from './components/FeedBackForm';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Dashbord/> */}
      {/* <Register/> */}
      {/* <LoginComponent/> */}
      {/* <RouteDashboard/> */}

   
    
    </BrowserRouter>
  </React.StrictMode>
);

