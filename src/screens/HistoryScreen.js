import React from 'react';
import { useTimers } from '../context/TimerContext';

const HistoryScreen = () => {
  const { timers } = useTimers();
  return (
    <div>
      <h2>Completed Timers</h2>
      <ul>
        {timers.length === 0 ? (
          <p>No completed timers yet.</p>
        ) : (
          timers.map((timer, index) => (
            <li key={index}>{timer.name} - {timer.duration}s</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default HistoryScreen;