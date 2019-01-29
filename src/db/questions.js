const DB = require("./db.js");

export class questionsDB {
  list = async id => {
    try {
      var results = DB.query(
        "SELECT id, (select first_name FROM users WHERE id = userid) askedBy FROM questions WHERE active_flag = 1 " +
          (id ? "AND id = " + id : "") +
          " ORDER BY createdon DESC"
      );
      console.log(results);
      return results;
    } catch (error) {
      throw error;
    }
  };

  create = (question, userid) => {
    try {
      var response = DB.query(
        "INSERT INTO questions SET id = '" +
          question +
          "', userid = " +
          userid +
          ", active_flag = 1, createdon = NOW();"
      );
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default new questionsDB();
