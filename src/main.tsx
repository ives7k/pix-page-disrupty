import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function getUTMParams(): { [key: string]: string } {
  const params: { [key: string]: string } = {};
  const queryString = window.location.search.substring(1);
  const urlParams = new URLSearchParams(queryString);

  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }
  return params;
}

const utmParams = getUTMParams();

if (utmParams) {
  localStorage.setItem('utmParams', JSON.stringify(utmParams));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
