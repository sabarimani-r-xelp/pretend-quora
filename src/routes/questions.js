import { route } from ".";
import questionsDB from "../db/questions";
import answerDB from "../db/answers";

export const create = route(
  async (req, res) => {
    const { question, userid } = req.body.length ? req.body : req.query;
    const newQues = await questionsDB.create(question, userid);
    res.send({ data: newQues });
  },
  {
    requiredFields: ["question", "userid"]
  }
);

export const list = route(async (req, res) => {
  const questions = await questionsDB.list();
  res.send({ data: questions });
});

export const questionsWithAnswer = route(async (req, res) => {
  var id = req.query.id;
  const questions = await questionsDB.list(id);
  const answers = await answerDB.list(id);
  res.send({ data: questions, answers: answers });
});
