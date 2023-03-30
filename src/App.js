import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';



function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/episodes" element={<Episodes/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
