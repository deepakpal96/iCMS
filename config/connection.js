var Sequelize =require("sequelize");
var sequelize = new Sequelize('basedashboard', 'sa', 'sawan', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
        validateBulkLoadParameters: true,
        trustServerCertificate: true,
        },
        useUTC: false,
        },

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

  module.exports=sequelize
