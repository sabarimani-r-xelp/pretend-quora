import { route } from ".";
import QuestionsModel from "../models/QuestionsModel";
import AnswerModel from "../models/AnswerModel";
import { log } from "util";

export const create = route(
  async (req, res) => {
    const { question, userId } = req.body.length ? req.body : req.query;
    const newQues = await QuestionsModel.create(question, userId);
    res.send({ data: newQues });
  },
  {
    requiredFields: ["question", "userId"]
  }
);

export const list = route(async (req, res) => {
  var QuestionId = req.params.QuestionId;
  const questions = await QuestionsModel.list(QuestionId);
  res.send({ data: questions });
});

export const questionsWithAnswer = route(async (req, res) => {
  var QuestionId = req.params.QuestionId;
  const questions = await QuestionsModel.list(QuestionId);
  const answers = await AnswerModel.list(QuestionId);
  res.send({ data: questions, answers: answers });
});

export const update = route(async (req, res) => {
  var QuestionId = req.params.QuestionId;
  const { question, userId } = req.body.length ? req.body : req.query;
  const newQues = await QuestionsModel.update(question, userId, QuestionId);
  res.send({ data: newQues });
});
