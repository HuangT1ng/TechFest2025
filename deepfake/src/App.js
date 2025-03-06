import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Welcome from './components/Home';
import Map from './components/Map';
import News from './components/News';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


import { 
  BrowserRouter,
  Routes,
  Route 

} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<><Navigation/><Map/><Welcome/><News/><Footer/></>} />
            
          </Routes>
      </BrowserRouter>
         
    
     </div>
  
  
  );
}

export default App;
