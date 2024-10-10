import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './styles/App.css';
import MainPage from './components/MainPage'; // Importar a nova página

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>FestivaOrg</h1>
          <div className="header-icons">
            <a href="/open-ticket">
              <i className="fa fa-ticket"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=seunumerodetelefone" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<MainPage />} /> {/* Rota para a página principal */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
