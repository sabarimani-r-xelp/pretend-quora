import DB from "../db/db.js";
var Sequelize = require("sequelize");
import sequelize from "../db/Sequelize";
const Questions = sequelize.define(
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
    }
  },
  {
    timestamps: false
  }
);

class QuestionsModel {
  list = async id => {
    try {
      Questions.findAll().then(question => {
        console.log(question.dataValues);
      });
      var results = DB.query(
        "SELECT id,question, (select first_name FROM users WHERE id = userid) askedBy FROM questions WHERE active_flag = 1 " +
          (id ? "AND id = " + id : "") +
          " ORDER BY createdon DESC"
      );
      console.log(results);
      return results;
    } catch (error) {
      throw error;
    }
  };

  create = async (question, userid, id = null) => {
    try {
      var response = await DB.query(
        "INSERT INTO questions SET id = '" +
          id +
          "', question = '" +
          question +
          "', userid = " +
          userid +
          ", active_flag = 1, createdon = NOW() ON DUPLICATE KEY UPDATE id = '" +
          id +
          "', question = '" +
          question +
          "', userid = " +
          userid +
          ", active_flag = 1;"
      );
      return this.list(response.insertId);
    } catch (error) {
      throw error;
    }
  };
}

export default new QuestionsModel();
