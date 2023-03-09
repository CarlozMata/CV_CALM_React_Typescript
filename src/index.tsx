import React from 'react';
import ReactDOM from 'react-dom/client';
import CvPages from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CvPages />
  </React.StrictMode>
);
