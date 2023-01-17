import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';
import Preloader from './components/preloader/Preloader';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Suspense fallback={<Preloader />}>
    <App />
  </Suspense>,
);
