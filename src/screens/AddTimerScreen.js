import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimers } from '../context/TimerContext';

const AddTimerScreen = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const { addTimer } = useTimers();
  const navigate = useNavigate();

  const handleAddTimer = () => {
    if (!name || !duration) return;
    addTimer({ name, duration: parseInt(duration, 10) });
    navigate('/');
  };

  return (
    <div>
      <input type="text" placeholder="Timer Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Duration (seconds)" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <button onClick={handleAddTimer}>Add Timer</button>
    </div>
  );
};

export default AddTimerScreen;