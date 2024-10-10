const express = require('express');
const router = express.Router();
const EventController = require('../controllers/EventController');

// Criar novo evento
router.post('/', EventController.createEvent);

// Obter todos os eventos
router.get('/', EventController.getAllEvents);

module.exports = router;
