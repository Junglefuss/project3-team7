const mongoose = require('../db/connection');

const VisitorSchema = new mongoose.Schema({
  username: String,
  email: String,
  favorites: [{}]
});

const Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;
