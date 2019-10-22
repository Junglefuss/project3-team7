const express = require('express');
const router = express.Router();

// import the user model
const Visitor = require('../models/Visitor');
// const Comment = require('../models/Comment');

// Create a new visitor
router.post('/new', (req, res) => {
  const newVisitor = req.body;
  Visitor.create(newVisitor).then(visitor => {
    res.json(visitor);
  });
});

//  Get existing visitor info
router.get('/:email', (req, res) => {
  const visitorEmail = req.params.email;
  Visitor.findOne({ email: visitorEmail }).then(visitor => {
    res.json(visitor);
  });
});

// Update existing visitor info
router.put('/:id', (req, res) => {
  const visitorId = req.params.id;
  Visitor.findOneAndUpdate({ _id: visitorId })
    .then(visitor => {
      visitor.username = req.body.username;
      visitor.email = req.body.email;
    })
    .then(visitor => res.json(visitor));
});

module.exports = router;
