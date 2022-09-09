export default interface Question {
  questionText: string;
  answerOptions: Array<{
    answerText: string;
    isCorrect: boolean;
  }>;
}
