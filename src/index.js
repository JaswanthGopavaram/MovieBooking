import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './components/Home';
import Booktickets from './components/Booktickets';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' Component={ App }></Route>  
      <Route exact path='/home' Component={ Home }></Route> 
      <Route exact path='/booktickets' Component={ Booktickets }></Route>  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


