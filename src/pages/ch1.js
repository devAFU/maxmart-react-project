// src/App.js
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>React Dark/Light Mode</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>
      <main>
        <p>
          This is a simple React application demonstrating dark and light mode.
        </p>
      </main>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
