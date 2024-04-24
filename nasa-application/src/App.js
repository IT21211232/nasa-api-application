import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Link to='/home'>Take me home country roads</Link>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
