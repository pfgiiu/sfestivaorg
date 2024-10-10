// routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const router = express.Router();

// Configuração do transportador do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // ou outro serviço de email
  auth: {
    user: process.env.EMAIL_USER, // Seu email
    pass: process.env.EMAIL_PASS, // Sua senha
  },
});

// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Verifica se o email já está em uso
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send('Email já em uso.');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Enviar email de verificação (opcional)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verificação de Email',
      text: 'Por favor, clique no link para verificar seu email: [LINK_DE_VERIFICAÇÃO]',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Erro ao enviar email de verificação.');
      }
      res.status(201).send('Usuário criado com sucesso. Verifique seu email para confirmar a conta.');
    });
  } catch (error) {
    res.status(500).send('Erro ao criar usuário');
  }
});

// Rota para login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Senha incorreta');
    }

    res.send('Login realizado com sucesso');
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).send('Erro ao fazer login');
  }
});

module.exports = router;
