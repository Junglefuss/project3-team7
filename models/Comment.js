const mongoose = require('../db/connection');

const CommentSchema = new mongoose.Schema({
  bar: String,
  text: String,
  user: [
    {
      ref: 'Visitor',
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
