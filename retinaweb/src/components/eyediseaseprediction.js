import React, { useState } from 'react';
import axios from 'axios';

const EyeDiseasePrediction = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handlePredictEyeDisease = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      
      const response = await axios.post('http://127.0.0.1:8000/eyedisease/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // Handle prediction result here
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error predicting eye disease:', error);
      setError('Error predicting eye disease. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Eye Disease Prediction</h1>
      <p style={{ marginBottom: '10px' }}>Upload Image Here</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: '20px', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      {image && (
        <div style={{ marginBottom: '20px' }}>
          <img src={URL.createObjectURL(image)} alt="Uploaded" style={{  maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
        </div>
      )}
      <button
        onClick={handlePredictEyeDisease}
        style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}
      >
        Predict Eye Disease
      </button>
      {prediction && <p style={{ marginTop: '20px' }}>Prediction: {prediction}</p>}
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
    </div>
  );
};

export default EyeDiseasePrediction;
