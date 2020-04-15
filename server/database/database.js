const Sequelize = require('sequelize');

const database=new Sequelize("Account","admin","admin123",{
    host:"localhost",
    dialect:"sqlite",
    storage:"Accounts.db",
    logging:false,
});

const Users=database.define('user',{
    Name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    Email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    Password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Role:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});

module.exports={database,Users};