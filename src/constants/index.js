import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    p1,
    p2,
    p3
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: web,
    },
    {
      title: "Automation Engineer",
      icon: mobile,
    },
    {
      title: "Cloud Enthusiast",
      icon: backend,
    },
    {
      title: "Webapp Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },

    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

    {
      name: "docker",
      icon: docker,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
  ];
  
  const experiences = [
    {
      title: "Web + ML Developer Intern",
      company_name: "AUR Consulant",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2022 - June 2022",
      points: [
        "Made Webapps and ML Projects building the tech-consultant side of thefirm.",
        "Also Designed CMS System for the Hiring Firm of the Company.",
        "Inter for 2 months",
      ],
    },
    {
      title: "Fest Web Developer",
      company_name: "NMIMS",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - March 2022(Part Time)",
      points: [
        "Developed and Maintained the Official Website of the Annual Tech Fest of NMIMS.",
        "Two Fest : Ignite and Tvaran",
        "Deployment Inclusion",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "CredenceSoft ",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - Current(PART TIME)",
      points: [
        "API Building",
        "Automation Tasks",
        "Worked on HotelMate",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "MyWellaBee NZ",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2022 - Present",
      points: [
        "work for NZ Client Mywellabee as Data Engineer managing tasks initiating from Data extraction, Cleaning, and Loading. Managing Data in Cloud (AWS).",
      
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ritish has done a good job in Automating Data Pipeline Tasks Smoothly.",
      name: "Mr. Aziz Shariff",
      designation: "CEO",
      company: "MyWellaBee",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Both Majaha and I appreciate continued hard work and dedication of Ritish to mywellabee",
      name: "Mr. Samaya Muduli",
      designation: "CEO",
      company: "CRENDENCESOFT",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Ritish has displayed impressive dedication and commitment toward achieving his goals. Managing Studies, Industry projects impressively.",
      name: "Variza Negi",
      designation: "Professor",
      company: "NMIMS",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ignite Fest Website",
      description:
        "Web-based application for College Fest Website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Deployment",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/RitishMohapatra/ignite2k23",
    },
    {
      name: "MyWellaBee Pricing Automation",
      description:
        "Automation of Pricing for MyWellaBee NZ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Selenium",
          color: "green-text-gradient",
        },
        {
          name: "Requests",
          color: "pink-text-gradient",
        },
      ],
      image: p3,
      source_code_link: "https://mywellabee.com/",
    },
    {
      name: "Python Specialization",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Using Databases with Python",
          color: "blue-text-gradient",
        },
        {
          name: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
          color: "green-text-gradient",
        },
        {
          name: "Python Data Structures",
          color: "pink-text-gradient",
        },
        {
          name: "Using Python to Access Web Data",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.coursera.org/account/accomplishments/specialization/HVH5CN7VJMB4",
    },
    {
      name: "Google - Digital Marketing",
      description:
        "Digital marketing course by Google.",
      tags: [
        {
          name: "Google ",
          color: "blue-text-gradient",
        },
        {
          name: "Digital marketing",
          color: "green-text-gradient",
        },

      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "RMX Voice Assistant",
      description:
        "it's for GUI based voice assistant to complete your daily tasks. looks similar to Cortona.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
        {
          name: "OS Module",
          color: "pink-text-gradient",
        },
      ],
      image: p1,
      source_code_link: "https://github.com/RitishMohapatra/RMX-Voice-Assistant",
    },
    {
      name: "Todo App",
      description:
        "Todo App is a simple web application that allows users to create, read, update, and delete tasks.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "heroku",
          color: "pink-text-gradient",
        },
      ],
      image: p2,
      source_code_link: "https://github.com/RitishMohapatra",
    },
    
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };