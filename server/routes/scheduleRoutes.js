const express = require('express');
const router = express.Router();
const ScheduleController = require('../controllers/ScheduleController');

// Criar nova escala
router.post('/', ScheduleController.createSchedule);

// Obter todas as escalas
router.get('/', ScheduleController.getAllSchedules);

module.exports = router;
