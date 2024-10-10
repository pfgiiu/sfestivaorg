const mongoose = require('mongoose');

const resourceRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  resource: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, default: 'pending' }, // Ex: 'pending', 'approved', 'rejected'
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ResourceRequest', resourceRequestSchema);
