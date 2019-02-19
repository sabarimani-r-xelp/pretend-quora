import { sequelize } from "../db/Sequelize";
import { questions as Questions } from "../schema/questions";

class questionsModel {
  list = id => {
    try {
      let queryConditions = [{ isActive: true }];
      if (id) queryConditions.push({ id: id });

      return Questions.findAll({
        raw: true,
        where: queryConditions,
        attributes: [
          "id",
          "question",
          [
            sequelize.literal(
              "(select first_name FROM users WHERE id = userid)"
            ),
            "askedBy"
          ],
          "createdAt"
        ],
        order: [["createdAt", "DESC"]]
      }).then(question => {
        return question;
      });
    } catch (error) {
      throw error;
    }
  };

  create = (question, userid) => {
    try {
      return Questions.create({
        question: question,
        userid: userid
      }).then(result => {
        return result;
      });
    } catch (error) {
      throw error;
    }
  };

  update = (question, userid, id) => {
    try {
      return Questions.update(
        {
          question: question,
          userid: userid
        },
        {
          id: id
        }
      ).then(result => {
        return result;
      });
    } catch (error) {
      throw error;
    }
  };
}

export default new questionsModel();
