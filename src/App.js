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
import Scan from './components/scan';
import TruthAcademy from './components/truthAcademy';
import PropagandaDecoder from './components/propagandadecoder';
import MisinformationMaze from './components/misinformationmaze';

import { 
  BrowserRouter,
  Routes,
  Route 

} from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <BrowserRouter>
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/scan' element={<Scan />} />
            <Route path='/game' element={<Game />} />
            <Route path='/game/pvp' element={<PvpGame />} />
            <Route path='/game/propagandaDecoder' element={<PropagandaDecoder />} />
            <Route path='/game/misinformationMaze' element={<MisinformationMaze />} />
            <Route path='/login' element={<Login />} />
            <Route path='/map' element={<Map />} />
            <Route path='/truthAcademy' element={<TruthAcademy />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
