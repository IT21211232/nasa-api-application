import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Apod from './pages/apod/Apod';
import RoverPics from './pages/roverPics/RoverPics';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

import LoginRegisterContextProvider from './context/LoginRegisterContext';
import { useContext } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <LoginRegisterContextProvider>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/apod' element={<Apod/>}></Route>
            <Route path='/rover' element={<RoverPics/>}></Route>
          </Routes>
        </LoginRegisterContextProvider>
      </Router>

    </div>
  );
}
export default App;