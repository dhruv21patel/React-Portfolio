import bg1 from "../assets/landing-page-beauty-care-template_23-2148669100.avif";
import bg2 from "../assets/Luxury-vehicle-display-garages-1200x750.jpg";
import bg3 from "../assets/chat.avif"
import bg4 from "../assets/weather.jpg"
import bg5 from "../assets/portfolio.png"
import bg5_1 from "../assets/portfolio-contact.png"
import bg5_2 from "../assets/portfolio-project.png"
import bg5_3 from "../assets/portfolio-work.png"

import image2 from "../assets/5542924.jpg";
import image3 from "../assets/6492518.jpg";
import image4 from "../assets/9403184.jpg";



const projects = [
    {
      name: "GlamHub",
      backgroundImage: [`${bg1}`],
      link: "https://github.com/dhruv21patel/django-salon-booking",
      infromation:"GlamHub is an all-in-one web platform for spa and salon services, built using Python Django. It offers users a seamless experience to discover and book appointments at nearby salons and spas through integrated location services. Salon owners can easily register and manage their listings through a dedicated admin panel, while the platform also supports job postings and applications for salon professionals. Additionally, GlamHub features an e-commerce shopping cart for purchasing beauty products, making it a comprehensive solution for both customers and salon owners.",
      Technologies:[
        "Modern Front-End Stack",
        "Python Django",
        "Django Rest Framework (DRF)",
        "Redis",
        "PostgreSQL",
        "Google Maps API",
        "Stripe API",
        "Twilio API",
        "JWT (JSON Web Tokens)",
        "SSL/TLS encryption",
        "Django's built-in security features"
      ],
      Goals:[
        [
          "Enhance User Convenience", 
          "Provide an all-in-one platform for users to easily browse and book salon/spa services, streamlining the booking process with intuitive user interfaces and location-based service discovery."
        ],
        [
          "Support Business Growth", 
          "Enable salon owners to register their businesses, manage appointments, and advertise job postings to attract talent, contributing to the growth and visibility of their business."
        ],
        [
          "Seamless E-commerce Experience", 
          "Integrate a shopping cart for salon products and services, making it easier for customers to purchase beauty products or additional services online while maintaining secure transactions."
        ]
      ],
      images:[]
    },
    {
      name: "ParkVision",
      backgroundImage: [`${bg2}`],
      link: "https://github.com/dhruv21patel/parking-detection",
      infromation:"ParkVision is an innovative parking detection system developed using Python and OpenCV that intelligently analyzes video footage to identify available and occupied parking spots. This system enhances parking management efficiency, allowing users to find free spaces quickly and reducing the time spent searching for parking. By utilizing advanced computer vision techniques, ParkVision provides real-time insights into parking occupancy, helping both drivers and facility managers optimize their parking experience.",
      Technologies:[
        "Python",
        "OpenCV",
        "NumPy",
        "Matplotlib",
        "TensorFlow",
        "Django",
        "Flask",
        "SQLite",
        "Machine Learning",
        "Computer Vision"
      ],
      Goals:[
        ["Improve parking space utilization", "Maximize the efficiency of available parking resources by providing real-time data on occupancy."],
        ["Reduce search time for parking", "Minimize the frustration of drivers by reducing the time spent searching for available spots."],
        ["Enhance user experience", "Provide a user-friendly interface for drivers to quickly find parking spots using real-time detection."]
      ],
      images:[]
    },
    {
      name: "Talkative",
      backgroundImage: [`${bg3}`],
      link: "https://github.com/VisheshMehta21/Talkative",
      infromation:"Talkative is a real-time chat application built using Spring Boot for the backend and React for the frontend. This application employs JWT (JSON Web Token) authentication to ensure secure user login and message transmission. Users can create accounts, join chat rooms, and engage in instant messaging with others. With a sleek and user-friendly interface, ChatWave enhances communication by allowing users to share messages, images, and files seamlessly, making conversations lively and engaging.",
      Technologies:[
        "Spring Boot",
        "React",
        "JWT (JSON Web Tokens)",
        "WebSocket",
        "RESTful APIs",
        "MongoDB",
        "Node.js",
        "CSS",
        "HTML",
        "Redux"
      ],
      Goals:[
        ["Provide secure communication", "Ensure that all messages and user data are protected using JWT authentication."],
        ["Enable real-time messaging", "Allow users to send and receive messages instantly, enhancing the chat experience."],
        ["Create a user-friendly interface", "Design an intuitive and responsive UI that facilitates easy navigation and interaction."]
      ],
      images:[]
    },
    {
      name: "WeatherWise",
      backgroundImage: [`${bg4}`],
      link: "https://github.com/dhruv21patel/weather-app-with-Tkinter-",
      infromation:"WeatherWise is a user-friendly desktop application built using Tkinter that allows users to check the current weather conditions for selected states. With a sleek and intuitive interface, users can easily input a state, and the application fetches real-time weather data from a reliable weather API. The app displays essential information such as temperature, humidity, wind speed, and weather conditions, helping users stay informed about the climate in their chosen location. This project showcases my ability to integrate APIs with a graphical user interface, providing a practical tool for everyday use.",
      Technologies:[
        "Python",
        "Tkinter",
        "Requests",
        "JSON",
        "Weather API",
        "Pip",
        "Virtual Environment"
      ],
      Goals:[
        ["Provide real-time weather updates", "Allow users to get up-to-date weather information for any selected state."],
        ["User-friendly interface", "Design an intuitive and easy-to-navigate interface for seamless user experience."],
        ["Integrate external APIs", "Demonstrate skills in fetching and displaying data from external weather APIs."]
      ],
      images:[]
    },
    {
      name: "Personal Portfolio",
      backgroundImage: [`${bg5}`],
      link: "https://github.com/dhruv21patel/React-Portfolio",
      information: "My Personal Portfolio showcases my skills and projects in web development, including various applications I've built using technologies like React, Django, and more. The portfolio is designed to reflect my personality and style while providing potential employers and collaborators with an overview of my work. It features interactive elements, smooth transitions, and a responsive layout that adapts to different screen sizes, ensuring a great user experience.",
      Technologies: [
        "React",
        "Node",
        "ExpressJS",
        "CSS",
        "JavaScript",
        "HTML",
        "Framer Motion",
        "Tailwind CSS"
      ],
      Goals: [
        ["Showcase my projects", "Provide an organized platform to display all my completed projects and their details."],
        ["Highlight skills", "Demonstrate my proficiency in web development through various technologies."],
        ["Enhance user experience", "Create a visually appealing and user-friendly interface that engages visitors."]
      ],
      images: [`${bg5_1}`, `${bg5_2}`, `${bg5_3}`]
    }
    
  ];
  
  export default projects;