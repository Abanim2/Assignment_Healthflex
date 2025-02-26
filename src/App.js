import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TimerProvider } from './context/TimerContext';
import HomeScreen from './screens/HomeScreen';
import AddTimerScreen from './screens/AddTimerScreen';
import HistoryScreen from './screens/HistoryScreen';
import './App.css';

export default function App() {
  return (
    <TimerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/add-timer" element={<AddTimerScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
        </Routes>
      </Router>
    </TimerProvider>
  );
}