import { route } from ".";
import questionsModel from "../models/questions";

export const create = route(
  async (req, res) => {
    const { question, userId } = req.body.length ? req.body : req.query,
      newQuestion = await questionsModel.create(question, userId);
    res.send({ data: newQuestion });
  },
  {
    requiredFields: ["question", "userId"]
  }
);

export const list = route(async (req, res) => {
  let questionId = req.params.id;
  const questions = await questionsModel.list(questionId);
  res.send({ data: questions });
});

export const answers = route(async (req, res) => {
  let questionId = req.params.questionId;
  const questions = await questionsModel.list(questionId, true);
  res.send({ data: questions });
});

export const update = route(async (req, res) => {
  let questionId = req.params.id;
  const { question, userId } = req.body.length ? req.body : req.query,
    updatedData = await questionsModel.update(question, userId, questionId);
  res.send({ data: updatedData });
});
