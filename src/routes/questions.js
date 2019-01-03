import { route } from ".";
import questionsDB from "../db/questions";

/**
 * Route to create a user. Returns the new user in the payload
 */
export const create = route(
  async (req, res) => {
    const { name, userid } = req.body.length ? req.body : req.query;
    const newQues = await questionsDB.create(name, userid);
    res.send({ data: newQues });
  },
  {
    requiredFields: ["name", "userid"]
  }
);

/**
 * Route to list out all users. Returns a list of all users in the payload.
 */
export const list = route(async (req, res) => {
  const questions = await questionsDB.list();
  res.send({ data: questions });
});
