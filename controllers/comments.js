const express = require('express');
const router = express.Router();

// import the user model
const Visitor = require('../models/Visitor');
const Comment = require('../models/Comment');

router.post('/new-comment', (req, res) => {
  Visitor.findOne({ _id: req.body.visitor.id }).then(visitor => {
    Comment.create(req.body).then(newComment => {
      visitor.favorites.push(newComment);
      visitor.save();
      newComment.save();
      res.json(newComment);
    });
  });
});

module.export = router;
