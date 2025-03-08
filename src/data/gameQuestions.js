export const gameQuestions = [
  {
    id: 1,
    question: "Is this image of a person with blue hair a deepfake?",
    correctAnswer: "Fake",
    imageUrl: "https://img.freepik.com/premium-photo/man-with-blue-hair-green-shirt_759095-16172.jpg" // You'll need to add actual image URLs
  },
  {
    id: 2,
    question: "Is this video of a dancing cat real?",
    correctAnswer: "Fake",
    imageUrl: "https://i.imgur.com/example2.jpg" // Replace with actual image URL
  },
  {
    id: 3,
    question: "Is this image of a flying car a deepfake?",
    correctAnswer: "Fake",
    imageUrl: "https://i.imgur.com/example3.jpg" // Replace with actual image URL
  },
  {
    id: 4,
    question: "Is this photo of a sunset real?",
    correctAnswer: "Fake",
    imageUrl: "https://i.imgur.com/example4.jpg" // Replace with actual image URL
  },
  {
    id: 5,
    question: "Is this image of a person walking on water a deepfake?",
    correctAnswer: "Fake",
    imageUrl: "https://i.imgur.com/example5.jpg" // Replace with actual image URL
  }
];

// Predefined opponent answers (can be adjusted as needed)
export const opponentAnswers = {
  1: "Real",
  2: "Real",
  3: "Real",
  4: "Fake",
  5: "Real"
}; 