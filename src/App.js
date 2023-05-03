
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
