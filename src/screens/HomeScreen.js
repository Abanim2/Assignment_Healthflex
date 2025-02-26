import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTimers } from '../context/TimerContext';

const HomeScreen = () => {
  const { timers, removeTimer } = useTimers();
  const [runningTimers, setRunningTimers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRunningTimers((prev) =>
        prev.map((t) => (t.time > 0 ? { ...t, time: t.time - 1 } : t))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setRunningTimers(timers.map((t) => ({ ...t, time: t.duration })));
  }, [timers]);

  return (
    <div>
      <div className='history'><Link to="/history"><button>History</button></Link></div>
      <Link to="/add-timer"><button>Add Timer</button></Link>
      <ul>
        {runningTimers.map((timer, index) => (
          <li key={index}>
            {timer.name} - {timer.time}s
            <button onClick={() => removeTimer(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeScreen;