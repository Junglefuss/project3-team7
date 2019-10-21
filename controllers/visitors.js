const express = require('express');
const router = express.Router();

// import the user model
const Visitor = require('../models/Visitor');
// const Comment = require('../models/Comment');

router.get('/:email', (req, res) => {
  const visitorEmail = req.params.email;
  Visitor.findOne({ email: visitorEmail }).then(visitor => {
    res.json(visitor);
  });
});

router.post('/new', (req, res) => {
  const newVisitor = req.body;
  Visitor.create(newVisitor).then(visitor => {
    res.json(visitor);
  });
});

module.exports = router;
