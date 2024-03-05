import React, { useState } from 'react';
import axios from 'axios';

const HeartAttackPrediction = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [cp, setCp] = useState('');
  const [trtbps, setTrtbps] = useState('');
  const [chol, setChol] = useState('');
  const [fbs, setFbs] = useState('');
  const [restecg, setRestecg] = useState('');
  const [thalachh, setThalachh] = useState('');
  const [exng, setExng] = useState('');
  const [oldpeak, setOldpeak] = useState('');
  const [error, setError] = useState('');

  const handlePredictHeartAttack = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/heartattack/', {
        age: age,
        sex: sex,
        cp: cp,
        trtbps: trtbps,
        chol: chol,
        fbs: fbs,
        restecg: restecg,
        thalachh: thalachh,
        exng: exng,
        oldpeak: oldpeak
      });
      // Handle prediction result here
      alert(`The prediction result is: ${response.data.prediction}`);
    } catch (error) {
      console.error('Error predicting heart attack:', error);
      setError('Error predicting heart attack. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Enter User Details for Prediction</h1>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
        />
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Sex"
          onChange={(e) => setSex(e.target.value)}
          value={sex}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Chest Pain Type"
          onChange={(e) => setCp(e.target.value)}
          value={cp}
        />
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Resting Blood Pressure"
          onChange={(e) => setTrtbps(e.target.value)}
          value={trtbps}
          type="number"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Cholesterol"
          onChange={(e) => setChol(e.target.value)}
          value={chol}
          type="number"
        />
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Fasting Blood Sugar"
          onChange={(e) => setFbs(e.target.value)}
          value={fbs}
          type="number"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Resting Electrocardiographic Results"
          onChange={(e) => setRestecg(e.target.value)}
          value={restecg}
        />
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Maximum Heart Rate Achieved"
          onChange={(e) => setThalachh(e.target.value)}
          value={thalachh}
          type="number"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Exercise Induced Angina"
          onChange={(e) => setExng(e.target.value)}
          value={exng}
          type="number"
        />
        <input
          style={{ width: '45%', height: '50px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxSizing: 'border-box' }}
          placeholder="Previous Peak"
          onChange={(e) => setOldpeak(e.target.value)}
          value={oldpeak}
          type="number"
        />
      </div>
      <button
        onClick={handlePredictHeartAttack}
        style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}
      >
        Predict Heart Attack
      </button>
      {error ? <p style={{ color: 'red', marginTop: '10px' }}>{error}</p> : null}
    </div>
  );
};

export default HeartAttackPrediction;
