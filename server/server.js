const express = require('express');

const app = express();

const database=require('../database/database');


database.sync().then(()=>{
    console.log('SQL database synced');
    app.listen(7500,()=>console.log('Server Up and running at http://127.0.0.1:/7500'));
})