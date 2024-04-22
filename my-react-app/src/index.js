import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Tailwind CSS direktiflerini içeren CSS dosyasını import edin
import App from './App'; // App bileşenini import edin

// StrictMode, uygulamanızın daha iyi bir versiyonu için potansiyel problemleri belirlemenize yardımcı olur.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Bu, index.html dosyasındaki div#root elemanına uygulamanızı monte eder.
);
