const express = require('express');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({});

const app = express();

const PORT = process.env.PORT || 3001;

// template engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(PORT, () => console.log(`App started on PORT ${PORT}`));