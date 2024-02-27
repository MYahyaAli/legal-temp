import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/Signup";
import './Components/LoginSignup/LoginSignup.css'
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
