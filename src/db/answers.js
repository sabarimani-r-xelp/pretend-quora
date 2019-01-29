const DB = require("./db.js");

export class answerDB {
  list = async id => {
    try {
      var results = DB.query(
        "SELECT id, answer, (select first_name FROM users WHERE id = userid) answeredBy FROM answers WHERE active_flag = 1 AND question_id = " +
          id +
          " ORDER BY createdon DESC"
      );
      console.log("results");
      console.log(results);
      return results;
    } catch (error) {
      throw error;
    }
  };

  create = (answer, userid, questionid) => {
    try {
      var resutls = [];
      var response = DB.query(
        "INSERT INTO answers SET answer = '" +
          answer +
          "', userid = " +
          userid +
          ", question_id = " +
          questionid +
          ", active_flag = 1, createdon = NOW();"
      );
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default new answerDB();
