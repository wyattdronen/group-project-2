const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connections');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'super secret key',
  resave: false,
  saveUninitialized: true,
};

const hbs = exphbs.create({})
app.engine('handlebars', hbs.engine)
// app.engine('handlebars', exphbs())
// app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

app.use(routes);

const syncValue = (process.env.NODE_ENV === "production" ? false : true)

sequelize.sync({ force: syncValue }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
