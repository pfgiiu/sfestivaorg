import React from 'react';
import './styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Bem-vindo ao FestivaOrg</h1>
            <p>Aqui você pode gerenciar suas atividades e informações de eventos.</p>
            <div className="dashboard-cards">
                <div className="card">
                    <h2>Gerenciamento de Usuários</h2>
                    <p>Adicione, edite ou remova usuários.</p>
                </div>
                <div className="card">
                    <h2>Escalas de Trabalho</h2>
                    <p>Crie e gerencie as escalas de trabalho da equipe.</p>
                </div>
                <div className="card">
                    <h2>Relatórios de Performance</h2>
                    <p>Analise o desempenho da equipe e dos fornecedores.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
