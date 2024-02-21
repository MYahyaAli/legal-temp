import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar";
import Login from "./Components/LoginSignup/Login";
import './Components/LoginSignup/LoginSignup.css'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            {/* <Route path="/" element={<Signup />} /> */}
            <Route path="/" element={<Login />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
