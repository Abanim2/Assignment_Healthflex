import React, { createContext, useContext, useState, useEffect } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState(() => {
    return JSON.parse(localStorage.getItem('timers')) || [];
  });

  useEffect(() => {
    localStorage.setItem('timers', JSON.stringify(timers));
  }, [timers]);

  const addTimer = (timer) => {
    setTimers([...timers, timer]);
  };

  const removeTimer = (index) => {
    setTimers(timers.filter((_, i) => i !== index));
  };

  return (
    <TimerContext.Provider value={{ timers, addTimer, removeTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimers = () => useContext(TimerContext);