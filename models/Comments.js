const mongoose = require('../db/connection');

const CommentsSchema = new mongoose.Schema({
  bar: String,
  text: String,
  user: [
    {
      ref: 'Visitor',
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;
