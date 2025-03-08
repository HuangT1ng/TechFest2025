import React from "react";
import "./css/banner.css";

import faketweet from "../assets/sddefault.jpg";
import realnews2 from "../assets/Mona-Lisa-oil-wood-panel-Leonardo-da.webp";
import realnews3 from "../assets/640px--Dictators_-_Kim_Jong-Un_by_RepresentUs.webm.webp";
import fakenews3 from "../assets/face-swap.png";
import fakenews2 from "../assets/aifaceswap-c3e1a938ca7efb93506adb1638f2c76c.jpg";

const newsData = [
  {
    title: "AI Creates Fake Obama",
    description:
      "Deepfake technology is a growing concern in the digital age. Learn more about its implications and how it can be used to spread misinformation.",
    img: faketweet,
    link: "#",
    type: "real",
  },
  {
    title: "Monolisa",
    description: "Higher traffic of tourists visiting this painting in 2024.",
    img: realnews2,
    link: "#",
    type: "real",
  },
  {
    title: "Dictators Warning About the Death of Democracy",
    description: "Kim Jong Un addresses the nation on world issues.",
    img: realnews3,
    link: "#",
    type: "real",
  },
  {
    title: "Obama back in office starting May 2025",
    description:
      "Understanding AI-generated media is crucial in today's digital world. Learn techniques to differentiate real from fake content.",
    img: faketweet,
    link: "#",
    type: "fake",
  },
  {
    title: "New art displayed in MET museum",
    description: "Anne Hathaway hired an artist to replace the famous Mona Lisa painting.",
    img: fakenews2,
    link: "#",
    type: "fake",
  },
  {
    title: "Dictators Warning About the Death of Democracy",
    description: "The campaign focuses on voter suppression and misinformation that threatens open elections.",
    img: fakenews3,
    link: "#",
    type: "fake",
  },
];

const News = () => {
  const realNews = newsData.filter((news) => news.type === "real");
  const fakeNews = newsData.filter((news) => news.type === "fake");

  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-16 px-6 md:px-12">
      {/* ✅ Header Section */}
      <h2 className="text-4xl font-extrabold text-indigo-800 mb-12 text-center">
        📰 Latest News on Deepfake
      </h2>

      {/* ✅ Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* ✅ Real News Section */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
            ✅ Verified Real News
          </h3>
          {realNews.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-green-200 hover:shadow-xl transition transform hover:-translate-y-2 mb-6 flex flex-col justify-between hover:scale-[1.03]"
            >
              <img
                src={news.img}
                alt={news.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{news.title}</h3>
              <p className="mt-2 text-gray-700">{news.description}</p>
              <a href={news.link} className="mt-4 text-green-600 font-semibold hover:underline flex items-center group transition">
                Read more
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* ❌ Fake News Section */}
        <div>
          <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
            ❌ Misinformation Detected
          </h3>
          {fakeNews.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-red-200 hover:shadow-xl transition transform hover:-translate-y-2 mb-6 flex flex-col justify-between hover:scale-[1.03]"
            >
              <img
                src={news.img}
                alt={news.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{news.title}</h3>
              <p className="mt-2 text-gray-700">{news.description}</p>
              <a href={news.link} className="mt-4 text-red-600 font-semibold hover:underline flex items-center group transition">
                Read more
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
