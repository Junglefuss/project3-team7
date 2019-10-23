const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
// const yelpApi = require('./yelp-api/yelpAPI')

const visitorsController = require('./controllers/visitors');
const commentsController = require('./controllers/comments');
const yelpController = require('./controllers/yelps')

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride('_method'));

app.use(cors());
// mongoose.set('useFindAndModify', false);

app.use('/visitors/', visitorsController);
app.use('/comments/', commentsController);
app.use('/yelps', yelpController);


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
