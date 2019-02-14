export const Sequelize = require("sequelize");
export const sequelize = new Sequelize(
  "DATABASE_NAME",
  "USERNAME",
  "PASSWORD",
  {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
