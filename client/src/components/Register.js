import React, { useState } from 'react';
import './styles/Register.css';

const Register = () => {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para mensagem de feedback

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, email, password }),
      });
      
      if (response.ok) {
        setMessage('Usuário registrado com sucesso!'); // Mensagem de sucesso
      } else {
        const errorMessage = await response.text();
        setMessage(`Erro: ${errorMessage}`); // Mensagem de erro
      }
    } catch (error) {
      setMessage('Erro ao registrar usuário. Tente novamente.'); // Mensagem de erro genérica
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Código" 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Registrar</button>
      </form>
      {message && <p className="feedback-message">{message}</p>} {/* Exibindo a mensagem de feedback */}
      <p>Ou <a href="/">faça login</a></p>
    </div>
  );
};

export default Register;
