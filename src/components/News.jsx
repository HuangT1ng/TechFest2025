import React from 'react';
import {useEffect, useState} from 'react';
import { Carousel, Card, Badge, Image,Button, Container, Row, Col} from 'react-bootstrap';
import "./css/banner.css";

import faketweet from '../assets/sddefault.jpg'

import realnews2 from '../assets/Mona-Lisa-oil-wood-panel-Leonardo-da.webp'
import realnews1 from '../assets/newsheadlines1.webp'
import fakenews3 from '../assets/face-swap.png'
import fakenews2 from '../assets/aifaceswap-c3e1a938ca7efb93506adb1638f2c76c.jpg'
import realnews3 from '../assets/640px--Dictators_-_Kim_Jong-Un_by_RepresentUs.webm.webp'

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
      description:
        "Higher traffic of tourist visit this painting in 2024",
      img: realnews2,
      link: "#",
      type: "real",
    },
    {
        title: "Dictators Warning About the Death of Democracy",
        description:
          "Kim Jong Un addresses the Nation on World Issues.",
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
        description:
            "Anne Hathaway hired artist to replace famous Mono Lisa painting",
        img: fakenews2,
        link: "#",
        type: "fake",
    },
    {
        title: "Dictators Warning About the Death of Democracy",
        description:
            "The campaign focuses on voter suppression and misinformation that threatens open elections.",
        img: fakenews3,
        link: "#",
        type: "fake",
    },
  ];
const News = () => {
    const realNews = newsData.filter((news) => news.type === "real");
    const fakeNews = newsData.filter((news) => news.type === "fake");
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
        {/* Real Articles Card */}
        <div className="space-y-6">
          
        {realNews.map((news, index) => ( 
        <div key={index} className="bg-white rounded-lg p-6 flex flex-col hover:shadow-md transition-shadow border-2 h-[550px]">
            
            <div className="p-4 flex flex-col h-full">
            <div className="flex items-center mb-4">
            
                <div className="bg-green-100 p-4 rounded-full">
                <svg className="h-12 w-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                </svg>
                </div>
            
          </div>
          <div className="flex items-center mb-4 h-[280px] overflow-hidden">
            <div className="w-full flex justify-center">
                <img src={news.img} className="max-h-[260px] object-contain" />
            </div>
          </div>
            <div className="flex items-start mb-4 flex-grow">
                
                <div>
                  <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {news.title}
                  </h3>
                  <p className="mb-3 font-normal text-gray-700 line-clamp-4">
                    {news.description}
                  </p>
               </div>
               </div>
               <a href="#" className="inline-flex items-center text-red-600 hover:underline mt-auto">
                Read more
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
                    
            </div>
            
        </div>
        ))}
        </div>
        <div className="space-y-6">
          
        {fakeNews.map((news, index) => ( 
        <div key={index} className="bg-white rounded-lg p-6 flex flex-col hover:shadow-md transition-shadow border-2 h-[550px]">
            
            <div className="p-4 flex flex-col h-full">
            <div className="flex items-center mb-4">
            
            <div className="bg-red-100 p-4 rounded-full">
                    <svg className="h-12 w-12 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" />
                </svg>
            </div>
            
          </div>
          <div className="flex items-center mb-4 h-[280px] overflow-hidden">
            <div className="w-full flex justify-center">
                <img src={news.img} className="max-h-[260px] object-contain" />
            </div>
          </div>
            <div className="flex items-start mb-4 flex-grow">
                
                <div>
                  <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {news.title}
                  </h3>
                  <p className="mb-3 font-normal text-gray-700 line-clamp-4">
                    {news.description}
                  </p>
               </div>
               </div>
               <a href="#" className="inline-flex items-center text-red-600 hover:underline mt-auto">
                Read more
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
                    
            </div>
            
        </div>
        ))}
       </div>
       </div>
            
        
        
       
       
       
     
     
    
    //     <div className="relative h-full w-full bg-gradient-to-r from-cyan-50 via-blue-200 to-blue-50">
    //     <div className=" max-w-6xl mx-auto p-8 h-screen items-center "   >
    //         <h2 className="text-3xl font-bold text-gray-900 dark:text-black mb-6 text-center">
    //             Latest News on Deepfake
    //         </h2>

    //   <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center" >
    //     {newsData.map((news, index) => (
    //       <div
    //         key={index}
    //         className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm  "
    //       >
    //         <img
    //           src={news.img}
    //           alt={news.title}
    //           className="w-full h-48 object-cover rounded-md mb-4"
    //         />
    //         <a href={news.link}>
    //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
    //             {news.title}
    //           </h5>
    //         </a>
    //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //           {news.description}
    //         </p>
    //         <a
    //           href={news.link}
    //           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //         >
    //           Read more
    //           <svg
    //             className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 14 10"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M1 5h12m0 0L9 1m4 4L9 9"
    //             />
    //           </svg>
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // </div>
    )
}

export default News;
