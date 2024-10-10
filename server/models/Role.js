const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: { type: [String], required: true }, // Ex: ['create', 'edit', 'delete']
});

module.exports = mongoose.model('Role', roleSchema);
