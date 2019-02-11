import { route } from ".";
import AnswerModel from "../models/AnswerModel";

export const create = route(
  async (req, res) => {
    const QuestionId = req.params.QuestionId;
    const { answer, userId } = req.body.length ? req.body : req.query;
    const newQues = await AnswerModel.create(answer, userId, QuestionId);
    res.send({ data: newQues });
  },
  {
    requiredFields: ["answer", "userId"]
  }
);

export const update = route(
  async (req, res) => {
    const QuestionId = req.params.QuestionId,
      AnswerId = req.params.AnswerId;
    const { answer, userId } = req.body.length ? req.body : req.query;
    const newQues = await AnswerModel.create(
      answer,
      userId,
      QuestionId,
      AnswerId
    );
    res.send({ data: newQues });
  },
  {
    requiredFields: ["answer", "userId"]
  }
);
