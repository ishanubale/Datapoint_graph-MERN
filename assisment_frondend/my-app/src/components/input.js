import React, { useState } from 'react';
import axios from 'axios';

const InputComponent = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [label, setLabel] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/datapoint/store', { x, y, label });
      alert('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={x}
        onChange={(e) => setX(e.target.value)}
        placeholder="Enter x"
      />
      <input
        type="number"
        value={y}
        onChange={(e) => setY(e.target.value)}
        placeholder="Enter y"
      />
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Enter label"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputComponent;
