const Sequelize = require('sequelize');

const database=new Sequelize("Account","admin","admin123",{
    host:"localhost",
    dialect:"sqlite",
    storage:"Accounts.db",
    logging:false,
});


module.exports=database;