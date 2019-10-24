const mongoose = require('../db/connection');

const VisitorSchema = new mongoose.Schema({
  username: String,
  email: String,
  comments: [
    {
      ref: 'Comment',
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;
