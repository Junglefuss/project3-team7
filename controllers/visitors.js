const express = require('express');
const router = express.Router();

// import the user model
const Visitor = require('../models/Visitor');
// const Comment = require('../models/Comment');

// get all visitors
router.get("/all-visitors", (req, res) => {
  Visitor.find({}).then(visitors => res.json(visitors));
})

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
  Visitor.findOneAndUpdate({ _id: visitorId }, req.body, { new: true })
    .then(visitor => {
      visitor.username = req.body.username;
      visitor.email = req.body.email;
      visitor.save();
    })
    .then(visitor => {
      console.log(res);
      res.json(visitor);
    });
});

module.exports = router;
