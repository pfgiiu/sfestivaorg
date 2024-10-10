const express = require('express');
const router = express.Router();
const ResourceController = require('../controllers/ResourceController');

// Criar nova solicitação de recurso
router.post('/', ResourceController.createResourceRequest);

// Obter todas as solicitações de recursos
router.get('/', ResourceController.getAllResourceRequests);

module.exports = router;
