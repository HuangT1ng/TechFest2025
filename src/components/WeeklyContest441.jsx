import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaListAlt, FaClock, FaMedal, FaExclamationTriangle, FaCheck, FaTimes } from 'react-icons/fa';
import { gameQuestions } from '../data/gameQuestions';

const WeeklyContest441 = () => {
  const navigate = useNavigate();
  const [contestStarted, setContestStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Handle starting the contest
  const handleStartContest = () => {
    console.log("Starting Weekly Contest #441");
    setContestStarted(true);
    // Initialize answers object with empty values
    const initialAnswers = {};
    gameQuestions.forEach(q => {
      initialAnswers[q.id] = null;
    });
    setAnswers(initialAnswers);
  };

  // Handle selecting an answer
  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Handle submitting the contest
  const handleSubmit = () => {
    // Calculate score
    let totalScore = 0;
    gameQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        totalScore += 10;
      }
    });
    setScore(totalScore);
    setSubmitted(true);

    // Optionally track contest history for the current session (for "Past Contests" section)
    // This will only show in Past Contests until the browser tab is closed
    try {
      const contestHistory = JSON.parse(sessionStorage.getItem('contestHistory')) || {};
      contestHistory['441'] = {
        contestId: '441',
        contestName: 'Weekly Contest #441',
        date: new Date().toISOString(),
        score: totalScore,
        maxScore: gameQuestions.length * 10
      };
      sessionStorage.setItem('contestHistory', JSON.stringify(contestHistory));
    } catch (error) {
      console.error("Error saving to session storage:", error);
    }
  };

  // Timer effect
  useEffect(() => {
    if (contestStarted && !submitted && timeRemaining > 0) {
      const timerId = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      
      return () => clearTimeout(timerId);
    } else if (timeRemaining === 0 && !submitted) {
      // Auto-submit when time runs out
      handleSubmit();
    }
  }, [contestStarted, timeRemaining, submitted]);

  // Format time (mm:ss)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Check if all questions have been answered
  const areAllQuestionsAnswered = () => {
    return Object.values(answers).every(answer => answer !== null);
  };

  // Render intro screen with rules
  const renderIntroScreen = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Contest Header */}
        <div className="bg-indigo-800 text-white p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold">Weekly Contest #441</h1>
            <span className="px-4 py-1 bg-green-500 text-white rounded-full text-sm font-medium">Active</span>
          </div>
          <p className="mt-2 text-indigo-200 text-lg">Test your skills at identifying AI-generated text from human text</p>
        </div>

        {/* Contest Details */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center">
              <FaClock className="text-indigo-600 text-2xl mr-3" />
              <div>
                <p className="text-gray-500 text-sm">Time Limit</p>
                <p className="font-semibold text-indigo-900">15 minutes</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaListAlt className="text-indigo-600 text-2xl mr-3" />
              <div>
                <p className="text-gray-500 text-sm">Questions</p>
                <p className="font-semibold text-indigo-900">{gameQuestions.length} questions</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMedal className="text-indigo-600 text-2xl mr-3" />
              <div>
                <p className="text-gray-500 text-sm">Difficulty</p>
                <p className="font-semibold text-indigo-900">Medium</p>
              </div>
            </div>
          </div>

          {/* Rules Section */}
          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-indigo-800 mb-4">Rules & Guidelines</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>You will be presented with {gameQuestions.length} questions about real vs. fake content.</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>For each question, you must determine if the content is real or fake.</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>You have 15 minutes to complete all questions. Time remaining is displayed during the contest.</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Each correct answer earns you 10 points. Incorrect answers earn 0 points.</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>The faster you answer, the higher your position on the leaderboard if you tie with other participants.</span>
              </li>
            </ul>
          </div>

          {/* Warning */}
          <div className="flex items-start bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-8">
            <FaExclamationTriangle className="text-yellow-500 mr-3 mt-1" />
            <div>
              <h3 className="text-yellow-800 font-medium">Important Notice</h3>
              <p className="text-yellow-700">Once you start the contest, the timer cannot be paused. Make sure you have 15 minutes of uninterrupted time before beginning.</p>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-xl rounded-full shadow-lg transition-colors"
              onClick={handleStartContest}
            >
              Start Contest
            </motion.button>
            <p className="mt-3 text-gray-500">Good luck!</p>
          </div>
        </div>
      </motion.div>
    );
  };

  // Render contest questions
  const renderQuestions = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Contest Header */}
        <div className="bg-indigo-800 text-white p-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Weekly Contest #441</h1>
          <div className="bg-indigo-700 px-4 py-2 rounded-lg">
            <span className="font-mono text-xl">Time: {formatTime(timeRemaining)}</span>
          </div>
        </div>

        {/* Questions Section */}
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-indigo-800 mb-4">AI-Generated vs. Human Content Quiz</h2>
            <p className="text-indigo-700">For each question, determine if the content is real or AI-generated.</p>
          </div>

          <div className="space-y-10">
            {gameQuestions.map((question) => (
              <div key={question.id} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-indigo-800 mb-4">Question {question.id}</h3>
                <p className="text-gray-800 mb-4">{question.question}</p>
                
                {/* Display image if present */}
                {question.imageUrl && (
                  <div className="my-4 flex justify-center">
                    {question.imageUrl.endsWith('.mp4') ? (
                      <video 
                        controls 
                        className="max-w-full h-auto rounded-lg shadow-md"
                        style={{ maxHeight: '300px' }}
                      >
                        <source src={question.imageUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img 
                        src={question.imageUrl} 
                        alt="Question media" 
                        className="max-w-full h-auto rounded-lg shadow-md"
                        style={{ maxHeight: '300px' }}
                      />
                    )}
                  </div>
                )}
                
                {/* Answer Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button
                    className={`py-3 rounded-lg transition-colors ${
                      answers[question.id] === "Real"
                        ? "bg-indigo-600 text-white"
                        : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                    }`}
                    onClick={() => handleAnswerSelect(question.id, "Real")}
                  >
                    Real
                  </button>
                  <button
                    className={`py-3 rounded-lg transition-colors ${
                      answers[question.id] === "Fake"
                        ? "bg-indigo-600 text-white"
                        : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                    }`}
                    onClick={() => handleAnswerSelect(question.id, "Fake")}
                  >
                    Fake
                  </button>
                </div>

                {/* Show correct/incorrect after submission */}
                {submitted && (
                  <div className={`mt-4 p-2 rounded-lg ${
                    answers[question.id] === question.correctAnswer
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    <div className="flex items-center">
                      {answers[question.id] === question.correctAnswer ? (
                        <FaCheck className="mr-2" />
                      ) : (
                        <FaTimes className="mr-2" />
                      )}
                      <span>
                        {answers[question.id] === question.correctAnswer
                          ? "Correct!"
                          : `Incorrect. The correct answer is "${question.correctAnswer}".`}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          {!submitted ? (
            <div className="mt-10 text-center">
              <button
                className={`px-8 py-4 font-bold text-xl rounded-lg shadow-lg transition-colors ${
                  areAllQuestionsAnswered()
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!areAllQuestionsAnswered()}
                onClick={handleSubmit}
              >
                Submit Answers
              </button>
              <p className="mt-2 text-sm text-gray-500">
                {areAllQuestionsAnswered()
                  ? "Review your answers before submitting."
                  : "Please answer all questions before submitting."}
              </p>
            </div>
          ) : (
            <div className="mt-10 text-center">
              <div className="bg-indigo-100 rounded-lg p-6 inline-block">
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">Quiz Complete!</h3>
                <p className="text-xl mb-4">Your score: <span className="font-bold text-indigo-600">{score}/{gameQuestions.length * 10}</span></p>
                <button
                  className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
                  onClick={() => navigate('/game/weekly-challenge')}
                >
                  Return to Challenges
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 py-10">
      <div className="container mx-auto px-4">
        {contestStarted ? renderQuestions() : renderIntroScreen()}
      </div>
    </div>
  );
};

export default WeeklyContest441; 