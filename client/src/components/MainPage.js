import React from 'react';
import './styles/MainPage.css';
import { FaWhatsapp, FaTicketAlt } from 'react-icons/fa'; // Importar ícones do react-icons

const MainPage = () => {
  return (
    <div className="main-page">
      <header className="header">
        <h1>FestivaOrg</h1>
        <div className="contact-icons">
          <a href="https://api.whatsapp.com/send?phone=seunumerodetelefone" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} />
          </a>
          <a href="/open-ticket">
            <FaTicketAlt size={24} />
          </a>
        </div>
      </header>

      <main className="content">
        <h2>Bem-vindo ao sistema!</h2>
        <p>Aqui você pode gerenciar eventos, acessar materiais de treinamento e muito mais.</p>
        {/* Adicione mais conteúdo relevante aqui */}
      </main>

      <footer className="footer">
        <p>© 2024 FestivaOrg. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default MainPage;
