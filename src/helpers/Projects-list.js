import project1 from "./../img/projects/01.jpg";
import project2 from "./../img/projects/02.jpg";
import project3 from "./../img/projects/03.jpg";
import project1Big from "./../img/projects/01-big.jpg";
import project2Big from "./../img/projects/02-big.jpg";
import project3Big from "./../img/projects/03-big.jpg";

export const list = [
  {
    index: 1,
    title: "Pizza shop",
    img: project1,
    BigImg: project1Big,
    Skills: "Vanila JS, CSS, HTML",
    link: "https://github.com/BindasDanylo30/my-first-website",
    about: {
      problem:
        "A fully functional Single Page Application (SPA) that simulates the operation of an online store. The application features a product catalog with a dynamic shopping cart and simulated order placement. Registration and login forms are also implemented. Adaptive design for various types of devices is also implemented.",
      // bug: "приложение",
    },
  },
  {
    index: 2,
    title: "Weather-Web-App",
    img: project2,
    BigImg: project2Big,
    Skills: "React, Node.js, MongoDB",
    link: "https://github.com/BindasDanylo30/Weather-Web-App",
    about: {
      problem:
        "A simple and user-friendly web application for checking current weather in any city worldwide. The app uses the OpenWeatherMap API to fetch real-time data.",
      // bug: "приложение",
    },
  },
  {
    index: 3,
    title: "QrCode_React",
    img: project3,
    BigImg: project3Big,
    Skills: "React, Node.js, MongoDB",
    link: "https://github.com/BindasDanylo30/QrCode_React",
    about: {
      problem:
        "A modern React application for handling QR codes. The project combines generation, scanning, and history storage functionalities, built with Vite for maximum performance.",
      // bug: "приложение",
    },
  },
];
