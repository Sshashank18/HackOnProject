const express = require('express');
const cors = require("cors");

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const {database}=require('../server/database/database');

const { socket } = require('./socket');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

database.sync().then(()=>{
    console.log('SQL database synced');
    server.listen(7500, ()=> {
        socket(io);
        console.log('Server Up and running at http://127.0.0.1:7500')
    
    });
})

