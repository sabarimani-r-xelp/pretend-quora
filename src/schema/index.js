import { questions } from "./questions";
import { answers } from "./answers";
answers.belongsTo(questions);
questions.hasMany(answers);

const db = [];
db.answers = answers;
db.questions = questions;

// questions.sync()
// answers.sync()

export default db;
