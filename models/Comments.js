const mongoose = require('../db/connection');

const CommentsSchema = new mongoose.Schema({
  users: [],
  bars: [],
  text: []
});

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;
