//App.js
const express = require('express');
const app = express();
//Socket.io
const server = require('http').Server(app);

//Express View Engine for handlebars
const exphbs = require('express-handlebars');
var hbs = exphbs.create({
    defaultLayout: 'main',
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Routes
app.get('/', (req,res) => {
    res.render('index.handlebars');
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});