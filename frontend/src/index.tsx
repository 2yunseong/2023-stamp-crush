import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

export const BASE_URL = 'http://3.36.13.60/api';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
