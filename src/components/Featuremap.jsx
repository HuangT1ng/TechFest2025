import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import truthmapIcon from "../assets/tr.png";
import truthscanIcon from "../assets/truthscan.png";
import truthquestIcon from "../assets/truthquest.png";
import truthacademyIcon from "../assets/truthacademy.png";
import browserIcon from "../assets/browser.png";

const features = [
  {
    id: 1,
    title: "TruthMap",
    description: "Tracks misinformation globally.",
    link: "/truthmap",
    icon: truthmapIcon,
  },
  {
    id: 2,
    title: "TruthScan",
    description: "Analyzes and verifies user-submitted content.",
    link: "/truthscan",
    icon: truthscanIcon,
  },
  {
    id: 3,
    title: "TruthQuest",
    description: "Engages users through gamified misinformation detection.",
    link: "/truthquest",
    icon: truthquestIcon,
  },
  {
    id: 4,
    title: "TruthAcademy",
    description: "Educates users on detecting and preventing fake news.",
    link: "/truthacademy",
    icon: truthacademyIcon,
  },
  {
    id: 5,
    title: "Browser Plugin",
    description: "Provides real-time misinformation detection across the web.",
    link: "/browser",
    icon: browserIcon,
  },
];

const FeatureMap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-extrabold text-indigo-800 mb-6">🧠 Sentinel AI Feature Map</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-12">
        Explore our powerful tools designed to combat misinformation effectively.
      </p>

      <div className="relative w-full max-w-4xl h-96 flex justify-between items-center">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="absolute flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            style={{ left: `${10 + index * 20}%`, top: `${index % 2 === 0 ? "20%" : "60%"}` }}
          >
            <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-3" />
            <Link to={feature.link} className="text-indigo-700 text-lg font-bold hover:underline">
              {feature.title}
            </Link>
            <p className="text-gray-600 text-center text-sm w-40">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureMap;
