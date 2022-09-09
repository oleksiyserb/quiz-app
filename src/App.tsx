import { useEffect, useState } from "react";

import Result from "./components/Result";
import Quiz from "./components/Quiz";
import "./App.css";
import Question from "./models/questions";

const App = () => {
  const [isQuizEnd, setIsQuizEnd] = useState<boolean>(false);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const response = await fetch("questions.json");

      const data: { questions: Question[] } = await response.json();
      setQuestions(data.questions);
    })();
  }, []);

  const changeVariantHandler = (isCorrect: boolean) => {
    if (isCorrect) {
      setTotalCorrectAnswers((correctAnswer) => {
        return correctAnswer + 1;
      });
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizEnd(true);
    }
  };

  return (
    <div className="container">
      <div className="card">
        {isQuizEnd && (
          <Result
            totalCorrectAnswers={totalCorrectAnswers}
            totalQuestions={questions.length}
          />
        )}
        {!isQuizEnd && questions.length > 0 && (
          <Quiz
            onChangeVariant={changeVariantHandler}
            currentQuestionNumber={currentQuestion}
            questions={questions}
          />
        )}
      </div>
    </div>
  );
};

export default App;
