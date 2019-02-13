import { sequelize } from "../db/Sequelize";
import { Questions } from "../schema/QuestionsSchema";

class QuestionsModel {
  list = async id => {
    try {
      let results = [];
      let QueryConditions = [{ active_flag: 1 }];
      if (id) QueryConditions.push({ id: id });

      await Questions.findAll({
        raw: true,
        where: QueryConditions,
        attributes: [
          "id",
          "question",
          [
            sequelize.literal(
              "(select first_name FROM users WHERE id = userid)"
            ),
            "askedBy"
          ],
          "createdon"
        ],
        order: [["createdon", "DESC"]]
      }).then(question => {
        results = question;
      });
      return results;
    } catch (error) {
      throw error;
    }
  };

  create = async (question, userid) => {
    try {
      return await Questions.create({
        id: id,
        question: question,
        userid: userid,
        active_flag: 1,
        createdon: sequelize.fn("NOW")
      }).then(result => {
        return result;
      });
    } catch (error) {
      throw error;
    }
  };

  update = async (question, userid, id) => {
    try {
      return await Questions.update(
        {
          question: question,
          userid: userid,
          active_flag: 1
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

export default new QuestionsModel();
