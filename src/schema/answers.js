import { Sequelize, sequelize } from "../db/Sequelize";

export const answers = sequelize.define("answers", {
  id: {
    allowNull: false,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  question_id: { type: Sequelize.UUID },
  answer: {
    type: Sequelize.STRING
  },
  userid: {
    type: Sequelize.BIGINT
  },
  isActive: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
});
