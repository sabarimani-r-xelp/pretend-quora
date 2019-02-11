const conn = require("./mysql_database.js");
class DB {
  query = sql => {
    return new Promise(async function(resolve, reject) {
      try {
        var response = await conn.query(sql, function(err, row) {
          console.log(row);
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
}
// export { DB as default };
export default new DB();
