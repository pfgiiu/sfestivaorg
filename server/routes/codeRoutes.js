// routes/codeRoutes.js
const express = require('express');
const router = express.Router();
const Code = require('../models/Code');

// Rota para gerar um novo código
router.post('/generate-code', async (req, res) => {
    const code = Math.random().toString(36).substring(2, 10); // Gera um código aleatório

    try {
        const newCode = new Code({ code });
        await newCode.save();
        res.status(201).json({ message: 'Código gerado com sucesso!', code: newCode.code });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao gerar código.', error });
    }
});

module.exports = router;
