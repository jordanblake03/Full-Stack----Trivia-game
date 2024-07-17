import React, { useState } from "react";
import "./App.css";
import Questionaire from "./Component/Questionaire";
import Header from "./Component/Header";

const initialQuestions = [
  {
    question: "What is most infamous for wearing number 23?",
    correct_answer: "Michael Jordan",
    incorrect_answers: ["Allen Iverson", "Scottie Pippen", "Kendrick Perkins"],
    answers: ["Allen Iverson", "Scottie Pippen", "Kendrick Perkins", "Michael Jordan"].sort(() => Math.random() - 0.5)
  },
  {
    question: "Which player has the most assists of all time?",
    correct_answer: "John Stockton",
    incorrect_answers: ["James Harden", "Russel Westbrook", "Anthony Edwards"],
    answers: ["John Stockton", "James Harden", "Russel Westbrook", "Anthony Edwards"].sort(() => Math.random() - 0.5)
  },
  {
    question: "Which player has the most points of all time?",
    correct_answer: "Lebron James",
    incorrect_answers: ["Kareem Abdul-Jabaar", "Kyle Lowry", "Anthony Edwards"],
    answers: ["Lebron James", "Kareem Abdul-Jabaar", "Kyle Lowry", "Anthony Edwards"].sort(() => Math.random() - 0.5)
  },
  {
    question: "Who is the only player to score 100 points in a single NBA game?",
    correct_answer: "Wilt Chamberlain",
    incorrect_answers: ["Lebron James", "Michael Jordan", "Magic Johnson"],
    answers: ["Lebron James", "Wilt Chamberlain", "Michael Jordan", "Magic Johnson"].sort(() => Math.random() - 0.5)
  },
  {
    question: "Which of these basketball players retired from the NBA with the highest career scoring average?",
    correct_answer: "Michael Jordan",
    incorrect_answers: ["Lebron James", "Wilt Chamberlain", "Oscar Robertson"],
    answers: ["Lebron James", "Wilt Chamberlain", "Michael Jordan", "Oscar Robertson"].sort(() => Math.random() - 0.5)
  },
  {
    question: "Which country captured the 1972 Olympic gold medal in basketball, breaking the United States’ unbeaten streak in Olympic competition?",
    correct_answer: "Soviet Union",
    incorrect_answers: ["East Germany", "China", "Brazil"],
    answers: ["Soviet Union", "East Germany", "China", "Brazil"].sort(() => Math.random() - 0.5)
  },
  {
    question: "Who invented basketball?",
    correct_answer: "James Naismith",
    incorrect_answers: ["Maurice Podoloff", "Wilt Chamberlain", "Oscar Robertson"],
    answers: ["Maurice Podoloff", "Wilt Chamberlain", "James Naismith", "Oscar Robertson"].sort(() => Math.random() - 0.5)
  },
  {
    question: "Who was Dr. J?",
    correct_answer: "Julius Erving",
    incorrect_answers: ["Connie Hawkins", "Wilt Chamberlain", "Michael Jordan"],
    answers: ["Connie Hawkins", "Wilt Chamberlain", "Julius Erving", "Michael Jordan"].sort(() => Math.random() - 0.5)
  }
];

function App() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      } else {
        setScore(score - 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswers(false);
    } else {
      setCurrentIndex(currentIndex + 1); // This will trigger the end screen
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswers(false);
    }
  };

  

  return questions.length > 0 ? (
    <div className="container">
      <Header />
      <h2>Score: {score}</h2>
      {currentIndex < questions.length ? (
        <>
          <h2>
            {currentIndex + 1} out of {questions.length} Questions
          </h2>
          <Questionaire
            handleAnswer={handleAnswer}
            showAnswers={showAnswers}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
            data={questions[currentIndex]}
          />
        </>
      ) : (
        <h1>Game Over, Your Score is {(score / questions.length) * 100}%</h1>
      )}
    </div>
  ) : (
    <div className="container">..Loading</div>
  );
}

export default App;
