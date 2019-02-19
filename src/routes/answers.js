import { route } from ".";
import answersModel from "../models/answers";

export const create = route(
  async (req, res) => {
    const questionId = req.params.questionId;
    const { answer, userId } = req.body.length ? req.body : req.query;
    const newAnswer = await answersModel.create(answer, userId, questionId);
    res.send({ data: newAnswer });
  },
  {
    requiredFields: ["answer", "userId"]
  }
);

export const update = route(
  async (req, res) => {
    const questionId = req.params.questionId,
      answerId = req.params.id,
      { answer, userId } = req.body.length ? req.body : req.query;

    const updatedData = await answersModel.update(
      answer,
      userId,
      questionId,
      answerId
    );
    res.send({ data: updatedData });
  },
  {
    requiredFields: ["answer", "userId"]
  }
);
