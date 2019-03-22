const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const formsubmit = require('./controllers/formsubmit');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'manolsharma',
      password : '',
      database : 'wp-formsubmit'
    }
  });

const app = express();

//BODY PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//STATIC FOLDER
app.use('/public', express.static(path.join(__dirname, 'public')))

//SET VIEW ENGINE

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//ROOT ROUTE
app.get('/', (req, res)=> {
   res.render('index');
})

//SEND END POINT
app.post('/formsubmit', (req, res) => {formsubmit.handleFormSubmit(req, res)})

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
})