import { route } from ".";
import answerDB from "../db/answers";

export const create = route(
  async (req, res) => {
    const { answer, userid, questionid } = req.body.length
      ? req.body
      : req.query;
    const newQues = await answerDB.create(answer, userid, questionid);
    res.send({ data: newQues });
  },
  {
    requiredFields: ["answer", "userid", "questionid"]
  }
);
