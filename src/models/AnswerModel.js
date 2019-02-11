import DB from "../db/db.js";

export class answerDB {
  list = async (id, answerId = null) => {
    try {
      console.log(answerId);

      var results = DB.query(
        "SELECT id, answer, (select first_name FROM users WHERE id = userid) answeredBy FROM answers WHERE active_flag = 1 " +
          (id ? " AND question_id = " + id : "") +
          (answerId ? " AND id = " + answerId : "") +
          " ORDER BY createdon DESC"
      );
      return results;
    } catch (error) {
      throw error;
    }
  };

  create = async (answer, userid, questionid, AnswerId = null) => {
    try {
      var resutls = [];
      var response = await DB.query(
        "INSERT INTO answers SET id = " +
          AnswerId +
          ", answer = '" +
          answer +
          "', userid = " +
          userid +
          ", question_id = " +
          questionid +
          ", active_flag = 1, createdon = NOW() ON DUPLICATE KEY UPDATE id = " +
          AnswerId +
          ", answer = '" +
          answer +
          "', userid = " +
          userid +
          ", question_id = " +
          questionid +
          ", active_flag = 1;"
      );
      return this.list(null, response.insertId);
    } catch (error) {
      throw error;
    }
  };
}

export default new answerDB();
