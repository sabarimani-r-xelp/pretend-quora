import { Sequelize, sequelize } from "../db/Sequelize";

export const Questions = sequelize.define(
  "questions",
  {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    question: {
      type: Sequelize.STRING
    },
    userid: {
      type: Sequelize.BIGINT
    },
    active_flag: {
      type: Sequelize.TINYINT
    },
    createdon: { type: Sequelize.DATE },
    updatedon: {
      type: Sequelize.DATE,
      default: Sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      )
    }
  },
  {
    timestamps: false
  }
);
