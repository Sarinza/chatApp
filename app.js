//App.js
const express = require('express');
const app = express();
const server = require('http').Server(app);

//Socket.io
const io = require('socket.io')(server);
io.on("connection", (socket) => {
    console.log("New user connected");
    require('./sockets/chat.js')(io, socket);
});

//Express View Engine for handlebars
const exphbs = require('express-handlebars');
var hbs = exphbs.create({
    defaultLayout: 'main',
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//Establish public folder
app.use('/public', express.static('public'));

//Routes
app.get('/', (req,res) => {
    res.render('index.handlebars');
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});