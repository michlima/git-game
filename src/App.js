import logo from './logo.svg';
import TopBar from './components/TopBar/TopBar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home';
import MemoryGame from './components/Games/IconMemory/memoryGame';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar/>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/game-memory' element={<MemoryGame/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
