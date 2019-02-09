const express = require('express');
const app = express()
const port = 3000
const database = require('./config/database.config');
const mongoose = require('mongoose');
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
var expressValidator = require('express-validator');
const router = require('./router/routes');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router);
app.use(expressValidator());
app.use(express.static('client'));
users = [];
connections = [];
io.on('connection', (socket) => {
    console.log("New user connected");
    socket.on('createMessage', (message) => {
        console.log("message: in server is ", message);
        io.emit('newMessageSingle', message);
        socket.on('disconnect', () => {
            console.log("User was disconnected");
        });
    });
});
function startMongo() {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(database.databaseName, { useNewUrlParser: true });
    mongoose.connection.on("connected", () => {
        console.log("connected to mongodb on %s", database.databaseName);
    })
    mongoose.connection.on("error", (err) => {
        if (err) {
            console.log("not connected to mongodb due to %s", err);
            process.exit();
        }
    })
}
// app.listen(port, () => {
//     startMongo()
//     console.log(`Example app listening on port ${port}!`)
// })

server.listen(process.env.PORT || 3000);
startMongo()
console.log('server running')
// app.get('/',function(req,res){
// res.sendFile(__dirname+'/index.html');
// })
// io.sockets.on('connection', function (socket) {
//     connections.push(socket);
//     console.log('connected %s sockets connected', connections.length);
//     //disconnect
//     socket.on('disconnect', function (data) {

//         users.splice(users.indexOf(socket.username), 1);
//         updateUsernames();
//         connections.splice(connections.indexOf(socket), 1)
//         console.log('disconnected %s sockets disconnected', connections.length)
//     });
//     socket.on('send messsage', function (data) {
//         console.log(data);
//         io.sockets.emit('new message', { msg: data });
//     });
//     socket.on('new user', function (data, callback) {
//         callback(true);
//         socket.username = data;
//         users.push(socket.username);
//         updateUsernames();
//     });
//     function updateUsernames() {
//         io.sockets.emit('get users', usernames);

//     }
// });
