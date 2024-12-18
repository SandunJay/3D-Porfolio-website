import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    apachejmeter,
    django,
    java,
    csharp,
    python,
    mysql,
    sqlite,
    selenium,
    mango,
    rain,
    medishop,
    building,
    diamond,
} from "./icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },{
        imageUrl: csharp,
        name: "C#",
        type: "programming Language",
    },
    
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend Framework",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    {
        imageUrl: sqlite,
        name: "SQLite",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: selenium,
        name: "Selenium",
        type: "Automation Testing Tool",
    },
    {
        imageUrl: apachejmeter,
        name: "JMeter",
        type: "Performance Testing Tool",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
    
];
export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Ksx657',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kavindya-wijayashantha-169589212',
    }
];


export const projects = [
    {
        iconUrl: mango,
        theme: 'btn-back-red',
        name: 'Magro Lanka Inventory System',
        description: 'I developed an Inventory Management System for Magro Lanka Pvt Ltd using the MERN stack. The system streamlined inventory tracking and improved operational efficiency through a user-friendly interface and secure APIs.Technologies Used:MongoDB,Express.js,React.js,Node.js',
        link: 'https://github.com/Ksx657/Inventory_Management_System',
    },
    {
        iconUrl: medishop,
        theme: 'btn-back-green',
        name: 'MediShop',
        description: 'I developed a Django application for a pharmaceutical shop to manage patient records and medicine inventory efficiently. The system ensures secure data handling, streamlines daily operations, and supports accurate tracking for improved service delivery.Technologies Used:Django',
        link: 'https://github.com/kpkmaduwantha9/mediapplication',
    },
    {
        iconUrl: diamond,
        theme: 'btn-back-blue',
        name: 'Jade ChatBot',
        description: 'I created a chatbot using OpenAI GPT-4o designed to provide intelligent and interactive responses. The chatbot enhances user engagement by understanding and responding to queries in natural language, offering a seamless conversational experience.Technologies Used:OpenAi,Streamlit',
        link: 'https://github.com/Ksx657/Jade-ChatBot',
    },
    {
        iconUrl: linkedin,
        theme: 'btn-back-pink',
        name: 'LinkedIn Post Generator',
        description: 'I developed a LinkedIn Post Generator that allows users to select a topic and desired post length, then automatically generates a LinkedIn post. This tool simplifies content creation by providing tailored, engaging posts for various topics.Technologies Used:llama 3model,Streamlit,pandas',
        link: 'https://github.com/Ksx657/Jade-ChatBot',
    },
    
    {
        iconUrl: rain,
        theme: 'btn-back-yellow',
        name: 'Rainfall Prediction System',
        description: 'An ML model that predicts rainfall built using numpy,pandas and sci-kit Learn',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
    {
        iconUrl: building,
        theme: 'btn-back-yellow',
        name: 'Real Estate Price Prediction Website',
        description: 'This is a ML model that can predicts prices of the real estate when they give their requirements and complimented with an easy to use User Intraface.Technologies Used:numpy,pandas,sci-kit learn,Html,css',
        link: 'https://github.com/Ksx657/real-estate-prediction-website',
    }

];

// export const projects = [
//     {
//         iconUrl: pricewise,
//         theme: 'btn-back-red',
//         name: 'Amazon Price Tracker',
//         description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
//         link: 'https://github.com/Ksx657/Inventory_Management_System.git',
//     },
//     {
//         iconUrl: threads,
//         theme: 'btn-back-green',
//         name: 'Full Stack Threads Clone',
//         description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
//         link: 'https://github.com/adrianhajdin/threads',
//     },
//     {
//         iconUrl: car,
//         theme: 'btn-back-blue',
//         name: 'Car Finding App',
//         description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
//         link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
//     },
//     {
//         iconUrl: snapgram,
//         theme: 'btn-back-pink',
//         name: 'Full Stack Instagram Clone',
//         description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
//         link: 'https://github.com/adrianhajdin/social_media_app',
//     },
//     {
//         iconUrl: estate,
//         theme: 'btn-back-black',
//         name: 'Real-Estate Application',
//         description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
//         link: 'https://github.com/adrianhajdin/projects_realestate',
//     },
//     {
//         iconUrl: summiz,
//         theme: 'btn-back-yellow',
//         name: 'AI Summarizer Application',
//         description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
//         link: 'https://github.com/adrianhajdin/project_ai_summarizer',
//     }
// ];
