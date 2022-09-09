import type Question from "../models/questions";

const Quiz: React.FC<{
  questions: Question[];
  onChangeVariant: (isCorrect: boolean) => void;
  currentQuestionNumber: number;
}> = ({ questions, onChangeVariant, currentQuestionNumber }) => {
  return (
    <>
      <h1 className="card__title">
        Question {currentQuestionNumber + 1}/{questions.length}
      </h1>
      <div>
        <p className="card__question">
          {questions[currentQuestionNumber].questionText}
        </p>
        <ul className="card__answers">
          {questions[currentQuestionNumber].answerOptions.map((answer) => (
            <li key={answer.answerText}>
              <button onClick={onChangeVariant.bind(null, answer.isCorrect)}>
                {answer.answerText}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Quiz;
