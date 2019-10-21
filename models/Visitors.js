const mongoose = require('../db/connection');

const VisitorsSchema = new mongoose.Schema({
  username: String,
  email: String,
  favorites: []
});

const Visitors = mongoose.model('Visitors', VisitorsSchema);

module.exports = Visitors;
