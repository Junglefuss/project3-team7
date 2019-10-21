const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');

const visitorsController = require('./controllers/visitors');
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride('_method'));

app.use(cors());
// mongoose.set('useFindAndModify', false);

app.use('/', visitorsController);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
