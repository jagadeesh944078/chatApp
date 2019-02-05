const express = require('express');
const app = express()
const port = 3000
const database = require('./config/database.config');
const mongoose = require('mongoose');
//const server=require('http').createServer(app);
//const io=require('socket.io').listen(server);
const router = require('./router/routes');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router);
app.use(express.static('client'));
users=[];
connections=[];
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
app.listen(port, () => {
    startMongo()
    console.log(`Example app listening on port ${port}!`)
})

/*io.sockets.on('connection',function(socket){
connections.push(socket);
console.log('connected %s sockets connected',connections.length);
//disconnect
socket.on('disconnected',function(data){
    connections.splice(connections.indexOf(socket),1)
    console.log('disconnected %s sockets disconnected',connections.length)
});
socket.on('messsage',function(data){
    console.log(data);
    io.sockets.emit('new message',{msg:data});
})
});*/
