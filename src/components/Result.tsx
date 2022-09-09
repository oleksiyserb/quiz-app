const Result: React.FC<{
  totalCorrectAnswers: number;
  totalQuestions: number;
}> = ({ totalCorrectAnswers, totalQuestions }) => {
  let congratulationText;

  const correctPersentage = Math.round(
    (totalCorrectAnswers * 100) / totalQuestions
  );

  if (correctPersentage <= 25) {
    congratulationText = "You are kid =(";
  } else if (correctPersentage > 25 && correctPersentage <= 50) {
    congratulationText = "This is not your day, please try later";
  } else if (correctPersentage > 50 && correctPersentage <= 75) {
    congratulationText = "Normal but not good";
  } else if (correctPersentage > 75) {
    congratulationText = "You are best!";
  }

  return (
    <div className="card__result">
      <h1>
        Your score is {totalCorrectAnswers}/{totalQuestions}!
      </h1>
      <p>{congratulationText}</p>
    </div>
  );
};

export default Result;
