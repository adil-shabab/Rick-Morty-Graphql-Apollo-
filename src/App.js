import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Character from './pages/Character';



function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/characters/:id" element={<Character/>}/>
          <Route path="/episodes" element={<Episodes/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
