import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Apod from './pages/apod/Apod';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/apod' element={<Apod/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;