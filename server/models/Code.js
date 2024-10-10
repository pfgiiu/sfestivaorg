// models/Code.js
const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now, expires: '1d' } // O código expira após 30 dias
});

module.exports = mongoose.model('Code', codeSchema);
