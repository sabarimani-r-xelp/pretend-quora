export const Sequelize = require("sequelize");
export const sequelize = new Sequelize("db_quora", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  define: {
    underscored: true,
    charset: "utf8",
    dialectOptions: {
      collate: "utf8_general_ci"
    },
    timestamps: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
