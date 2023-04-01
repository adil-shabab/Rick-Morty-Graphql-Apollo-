import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Character from './pages/Character';
import Episode from './pages/Episode';



function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/characters/:id" element={<Character/>}/>
          <Route path="/episodes" element={<Episodes/>}/>
          <Route path="/episodes/:id" element={<Episode/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
