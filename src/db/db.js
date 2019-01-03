const conn = require("./mysql_database.js");

const query = sql => {
  console.log(sql);
  return new Promise(async function(resolve, reject) {
    try {
      var resutls = [];
      console.log("=========================== START ========================");
      var response = await conn.query(sql, function(err, row) {
        console.log(
          "=========================== INSIDE ========================"
        );
        if (!err) resolve(row);
        else reject(err);
        return row;
      });
      console.log("=========================== AFTER ========================");
      return [];
    } catch (error) {
      throw error;
    }
  });
};
const chumma = () => {};
module.exports = { query: query, chumma: chumma };
