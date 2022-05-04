import logo from './logo.svg';
import TopBar from './components/TopBar/TopBar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home';
import MemoryGame from './components/Games/IconMemory/memoryGame';
import MemoryStart from './components/Games/IconMemory/MemoryStart';
import './App.css';

function App() {
  return (
    <Router class=' bg-slate-900 ...'>
      <div className="App">
        <TopBar/>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/game-memory' element={<MemoryStart/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
