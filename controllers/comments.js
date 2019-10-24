const express = require('express');
const router = express.Router();

// import the user model
const Visitor = require('../models/Visitor');
const Comment = require('../models/Comment');

// Get all the comments
router.get("/all-comments", (req, res) => {
  Comment.find({}).then(comments => res.json(comments));
})

// Get comment by id
router.get('/:id', (req, res) => {
  const commentId = req.params.id;
  Comment.findOne({ _id: commentId }).then(comment => {
    res.json(comment);
  });
});

// Create new comment
router.post('/:id', (req, res) => {
  Visitor.findOne({ _id: req.params.id }).then(visitor => {
    Comment.create(req.body).then(newComment => {
      visitor.comments.push(newComment);
      visitor.save();
      newComment.save();
      res.json(newComment);
    });
  });
});

// Edit comment
router.put('/:id', (req, res) => {
  const commentId = req.params.id;
  //   console.log(req.params.id);
  Comment.findOneAndUpdate({ _id: commentId }, req.body, { new: true })
    .then(comment => {
      comment.bar = req.body.bar;
      comment.text = req.body.text;
    })
    .then(comment => res.json(comment));
});

router.delete('/:id', (req, res) => {
  Comment.findOneAndDelete({ _id: req.params.id }).then(comment => {
    res.json(comment);
  });
});

module.exports = router;
