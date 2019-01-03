const DB = require("./db.js");

console.log(DB);

export class questionsDB {
  list = async () => {
    try {
      var results = DB.query(
        "SELECT id, name, (select first_name FROM users WHERE id = userid) askedBy FROM questions WHERE active_flag = 1 ORDER BY createdon DESC"
      );
      return results;
    } catch (error) {
      throw error;
    }
  };

  create = (name, userid) => {
    try {
      var resutls = [];
      var response = DB.query(
        "INSERT INTO questions SET name = '" +
          name +
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
