import logo from './logo.svg';
import './App.css';
import Presentation from './Presentation/Presentation';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About me/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
