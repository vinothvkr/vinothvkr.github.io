import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// FONTS
import '@fontsource/public-sans/300.css';
import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
