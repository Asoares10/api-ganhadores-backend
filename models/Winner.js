// models/Winner.js
const mongoose = require('mongoose');

const WinnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  prize: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Winner', WinnerSchema);
