import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/signup'; 
import Signin from './components/signin/signin'; 
import UserHome from './components/userhome'; 
import Reset from './components/reset/reset'; 
import HeartAttackPrediction from './components/heartattackprediction'; 
import EyeDiseasePrediction from './components/eyediseaseprediction';

const App = () => {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Reset />} /> 
        {user && <Route path="/userhome"  element={<UserHome />}/>}
        <Route path="/heartattackprediction" element={<HeartAttackPrediction />} />
        <Route path="/EyeDiseasePrediction" element={<EyeDiseasePrediction />} />
      </Routes>
    </Router>
  );
};

export default App;