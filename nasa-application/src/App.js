import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Apod from './pages/apod/Apod';
import RoverPics from './pages/roverPics/RoverPics';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/apod' element={<Apod/>}></Route>
        <Route path='/rover' element={<RoverPics/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;