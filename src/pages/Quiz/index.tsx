import React from "react";
import { NavLink } from "react-router-dom";
import { RandomQuizList } from "~/components/quiz";
import { useQuiz } from "~/lib/contexts/quiz";

const QuizPage = () => {
  const { quizzes, currentQuizIndex, goNextQuiz } = useQuiz();
  const currentQuiz = quizzes[currentQuizIndex];

  const handleGoNextQuiz = () => {
    const isSelected = true;
    if (isSelected) {
      goNextQuiz(true);
    }
  };

  if (!currentQuiz) {
    return (
      <>
        <h1>풀고 있는 퀴즈가 없습니다. 홈으로 이동합니다.</h1>
        <NavLink to="/">홈으로</NavLink>
      </>
    );
  }

  return (
    <>
      <h1>{currentQuizIndex + 1} 번 문제</h1>
      <h2>{currentQuiz.question}</h2>
      <RandomQuizList
        correctAnswer={currentQuiz.correct_answer}
        inCorrectAnswers={currentQuiz.incorrect_answers}
      />
      {currentQuizIndex + 1 === quizzes.length ? (
        <button type="button">결과 보기</button>
      ) : (
        <button type="button" onClick={handleGoNextQuiz}>
          다음 문제
        </button>
      )}
    </>
  );
};

export default QuizPage;
