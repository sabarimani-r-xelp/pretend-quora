import { Sequelize, sequelize } from "../db/Sequelize";
import { Questions } from "./QuestionsSchema";

let AnswersSchema = sequelize.define(
  "answers",
  {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    question_id: { type: Sequelize.BIGINT },
    answer: {
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

export const Answers = AnswersSchema;
