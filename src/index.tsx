import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './routes/landing';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Suspense>
    <Landing />
  </React.Suspense>
);
reportWebVitals();
