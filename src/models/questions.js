import { sequelize } from "../db/Sequelize";
import db from "../schema/index";

class questionsModel {
  list = (id, isAnswer = false) => {
    try {
      let queryConditions = [{ isActive: true }];
      if (id) queryConditions.push({ id: id });

      return db.questions
        .findAll({
          where: queryConditions,
          include: [
            {
              model: db.answers,
              attributes: isAnswer
                ? [
                    "id",
                    "answer",
                    "created_at",
                    [
                      sequelize.literal(
                        "(select first_name FROM users WHERE id = answered_by)"
                      ),
                      "answeredBy"
                    ]
                  ]
                : []
            }
          ],
          attributes: [
            "id",
            "question",
            [
              sequelize.literal(
                "(select first_name FROM users WHERE id = asked_by)"
              ),
              "askedBy"
            ],
            "created_at"
          ]
          // order: [["created_at", "DESC"]]
        })
        .then(question => {
          return question;
        });
    } catch (error) {
      throw error;
    }
  };

  create = (question, userid) => {
    try {
      console.log(question,userid);
      
      return db.questions
        .create({
          question: question,
          asked_by: userid
        })
        .then(result => {
          return result;
        });
    } catch (error) {
      throw error;
    }
  };

  update = (question, userid, id) => {
    try {
      return db.questions
        .update(
          {
            question: question,
            asked_by: userid
          },
          {
            id: id
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

export default new questionsModel();
