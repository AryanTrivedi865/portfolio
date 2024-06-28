import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './app';
import reportWebVitals from './utils/react-default/report-web-vitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
