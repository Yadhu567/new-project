import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/navbar'; 

const UserHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/> 
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Welcome to Your Dashboard!</h1>
        <button onClick={() => navigate('/heartattackprediction')} style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Predict Heart Attack
        </button>
        <button onClick={() => navigate('/eyediseaseprediction')} style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Predict eye disease
        </button>
      </div>
    </div>
  );
};

export default UserHome;
