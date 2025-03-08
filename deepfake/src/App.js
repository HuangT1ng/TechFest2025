import logo from './logo.svg';
import './App.css';
import React from 'react';

import Welcome from './components/Home';
import Map from './components/Map';
import News from './components/News';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login'
import Navigation from './components/Navigation';
 

import { 
  BrowserRouter,
  Routes,
  Route 

} from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<><Header/><Footer/></>} />
          </Routes>
      </BrowserRouter>

         
    
     </div>
  
  
  );
}

export default App;
