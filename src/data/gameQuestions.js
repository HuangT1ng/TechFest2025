export const gameQuestions = [
  {
    id: 1,
    question: "Is this image of a person with blue hair a deepfake?",
    correctAnswer: "Fake",
    imageUrl: "https://img.freepik.com/premium-photo/man-with-blue-hair-green-shirt_759095-16172.jpg" // You'll need to add actual image URLs
  },
  {
    id: 2,
    question: "Is this gif of a jumping cat real?",
    correctAnswer: "Real",
    imageUrl: "https://media.tenor.com/_hUq1BSUsiMAAAAM/cat-cute.gif" // Replace with actual image URL
  },
  {
    id: 3,
    question: "Is this image of a flying car a deepfake?",
    correctAnswer: "Real",
    imageUrl: "https://ichef.bbci.co.uk/news/1024/branded_news/0465/live/ae6e80b0-f106-11ef-8c03-7dfdbeeb2526.jpg" // Replace with actual image URL
  },
  {
    id: 4,
    question: "Is this video of joe a deepfake?",
    correctAnswer: "Fake",
    imageUrl: "/assets/videos/joe_deepfake.mp4" // Local asset path
  },
  {
    id: 5,
    question: "Is the following article title authentic?\nPope Francis Backs Trump for President",
    correctAnswer: "Fake",
    imageUrl: "" // Removed placeholder value
  }
];

// Predefined opponent answers (can be adjusted as needed)
export const opponentAnswers = {
  1: "Real",
  2: "Fake",
  3: "Fake",
  4: "Fake",
  5: "Real"
}; 