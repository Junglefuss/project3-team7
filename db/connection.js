const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/visitors');
mongoose.Promise = Promise;
module.exports = mongoose;
