const conn = require("./mysql_database.js");

const query = sql => {
  return new Promise(async function(resolve, reject) {
    try {
      var response = await conn.query(sql, function(err, row) {
        if (!err) resolve(row);
        else reject(err);
        return row;
      });
      return [];
    } catch (error) {
      throw error;
    }
  });
};

module.exports = { query: query };
