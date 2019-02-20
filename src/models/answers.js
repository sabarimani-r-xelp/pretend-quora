import { sequelize } from "../db/Sequelize";
import db from "../schema/index";

class answersModel {
  list = (questionId, answerId = null) => {
    try {
      let queryConditions = [{ isActive: true }];
      if (questionId) queryConditions.push({ question_id: questionId });
      if (answerId) queryConditions.push({ id: answerId });

      return db.answers
        .findAll({
          raw: true,
          attributes: [
            "id",
            "answer",
            "created_at",
            [
              sequelize.literal(
                "(select first_name FROM users WHERE id = answered_by)"
              ),
              "answeredBy"
            ]
          ],
          where: queryConditions,
          order: [["created_at", "desc"]]
        })
        .then(rows => {
          return rows;
        });
    } catch (error) {
      throw error;
    }
  };

  create = (answer, userId, questionId) => {
    try {
      return db.answers
        .create({
          question_id: questionId,
          answer: answer,
          answered_by: userId
        })
        .then(result => {
          return result;
        });
    } catch (error) {
      throw error;
    }
  };

  update = (answer, userId, questionId, answerId) => {
    try {
      return db.answers
        .update(
          {
            question_id: questionId,
            answer: answer,
            answered_by: userId
          },
          {
            where: {
              id: answerId
            }
          }
        )
        .then(result => {
          return result;
        });
    } catch (error) {
      throw error;
    }
  };
}

export default new answersModel();
