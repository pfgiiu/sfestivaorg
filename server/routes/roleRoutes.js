const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');

// Criar novo cargo
router.post('/', RoleController.createRole);

// Obter todos os cargos
router.get('/', RoleController.getAllRoles);

module.exports = router;
