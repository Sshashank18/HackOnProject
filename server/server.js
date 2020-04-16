const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const {database}=require('../server/database/database');

const { socket } = require('./socket');

database.sync().then(()=>{
    console.log('SQL database synced');
    app.listen(7500, ()=> {
        socket(io);
        console.log('Server Up and running at http://127.0.0.1:7500')
    
    });
})

