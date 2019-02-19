import { sequelize } from "../db/Sequelize";
import { answers as answersSchema } from "../schema/answers";

class answersModel {
  list = (questionId, answerId = null) => {
    try {
      let queryConditions = [{ isActive: true }];
      if (questionId) queryConditions.push({ question_id: questionId });
      if (answerId) queryConditions.push({ id: answerId });

      return answersSchema
        .findAll({
          raw: true,
          attributes: [
            "id",
            "answer",
            "createdAt",
            [
              sequelize.literal(
                "(select first_name FROM users WHERE id = userid)"
              ),
              "answeredBy"
            ]
          ],
          where: queryConditions,
          order: [["createdAt", "desc"]]
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
      return answersSchema
        .create({
          question_id: questionId,
          answer: answer,
          userid: userId
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
      return Answers.update(
        {
          question_id: questionId,
          answer: answer,
          userid: userId
        },
        {
          where: {
            id: answerId
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

export default new answersModel();
