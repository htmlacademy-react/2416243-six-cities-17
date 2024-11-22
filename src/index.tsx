import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const CITI_COUNT = 5;

root.render(
  <React.StrictMode>
    <App cityCount={CITI_COUNT}/>
  </React.StrictMode>
);
