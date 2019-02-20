import { Sequelize, sequelize } from "../db/Sequelize";

export const questions = sequelize.define(
  "questions",
  {
    id: {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    question: {
      type: Sequelize.STRING
    },
    asked_by: {
      type: Sequelize.BIGINT
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  },
  { underscored: true }
);
