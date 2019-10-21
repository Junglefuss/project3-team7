const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
