import DB from "../db/db.js";
import { sequelize } from "../db/Sequelize";
import { Answers } from "../schema/AnswersSchema";

export class AnswerModel {
  list = async (QuestionId, AnswerId = null) => {
    try {
      let QueryConditions = [{ active_flag: 1 }];
      if (QuestionId) QueryConditions.push({ question_id: QuestionId });
      if (AnswerId) QueryConditions.push({ id: AnswerId });

      return await Answers.findAll({
        raw: true,
        attributes: [
          "id",
          "answer",
          "createdon",
          [
            sequelize.literal(
              "(select first_name FROM users WHERE id = userid)"
            ),
            "answeredBy"
          ]
        ],
        where: QueryConditions,
        order: [["createdon", "desc"]]
      }).then(rows => {
        return rows;
      });
    } catch (error) {
      throw error;
    }
  };

  create = async (answer, userId, questionid) => {
    try {
      return await Answers.create({
        question_id: questionid,
        answer: answer,
        userid: userId,
        active_flag: 1,
        createdon: sequelize.fn("NOW")
      }).then(result => {
        return result;
      });
    } catch (error) {
      throw error;
    }
  };

  update = async (answer, userId, questionid, AnswerId) => {
    try {
      return await Answers.update(
        {
          question_id: questionid,
          answer: answer,
          userid: userId,
          active_flag: 1
        },
        {
          where: {
            id: AnswerId
          }
        }
      ).then(result => {
        return result;
      });
    } catch (error) {
      throw error;
    }
  };
}

export default new AnswerModel();
