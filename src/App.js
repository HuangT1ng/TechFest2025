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
import Game from './components/Game';
import PvpGame from './components/PvpGame';

import { 
  BrowserRouter,
  Routes,
  Route 

} from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/game' element={<Game />} />
          <Route path='/game/pvp' element={<PvpGame />} />
          <Route path='/login' element={<Login />} />
          <Route path='/map' element={<Map />} />
          <Route path='/news' element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>

         
    
     </div>
  
  
  );
}

export default App;
