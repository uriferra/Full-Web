import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import ClickCount from './components/ClickCount';
import reportWebVitals from './reportWebVitals';

const App = () => (
  <div>
    <Header />
    <ClickCount />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
