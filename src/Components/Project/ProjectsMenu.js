import todoAppImg  from "./project-img/to_do_list_with_react_css_bootstrap.PNG";
import rastaurantImg  from "./project-img/rastaurant_app_bootstrap_js_react.PNG";
import portfolioImg from "./project-img/portfolio_img.PNG";
import cyfHotelImg from "./project-img/cyf-hotel.PNG"
import hostelLifelImg from "./project-img/hostel-life.PNG"

const ProjectsMenu = [
    {
      id: 1,
      image: todoAppImg,  
      name: " My ToDo List",
      category: "Service",
      language: "React, JavaScript, CSS, HTML",
      description:
        "A to-do list app. Users will be able to write, edit and save their daily routine/tasks. Once the task is done user may delete it.",
      gitlink: "https://github.com/rana3399/my-todo-list/tree/master",
      live: "https://rana3399.github.io/my-todo-list"
    },
  
    {
      id: 2,
      image: rastaurantImg,
      name: "Indian Rastaurant",
      category: "Food industry",
      language: "HTML5, CSS3, React, JavaScript",
      description:
        "I have used updated HTML and most recent version of CSS while creating this website",
      gitlink: "https://github.com/rana3399/Indian_Restaurant",
      live: "https://rana3399.github.io/Indian_Restaurant/"
    
    },

    {
      id: 3,
      image: portfolioImg,
      name: "Portfolio of Rana-Ahmed",
      category: "Travel & Tourism",
      language: "React, JavaScript, Bootstrap, CSS, Mobile responsive",
      description:
        "This React portfolio website shows some of my best works. Fully mobile resposnive.",
      gitlink: "https://github.com/rana3399/Rana-Ahmed-Portfolio",
      live: "https://rana3399.github.io/Rana-Ahmed-Portfolio"
    
    },

    {
      id: 4,
      image: cyfHotelImg,
      name: "CYF Hotel Database",
      category: "Travel & Tourism",
      language: "React, JavaScript, CSS",
      description:
        "This React portfolio website shows some of my best works. Fully mobile resposnive.",
      gitlink: "https://github.com/rana3399/cyf-hotel-react",
      live: "https://rana3399.github.io/cyf-hotel-react/"
    
    },

    {
      id: 5,
      image: hostelLifelImg,
      name: "Hostel Life (Under Development)",
      category: "Hosteleria",
      language: "PostgresSQL, Node.js, React, Bootstrap, JavaScript",
      description:
        `Final project of MigraCode bootcamp. A team of 5 students are developing a fully funtional website
        by using PostgresSQL, Node.js, React, Bootstrap, JavaScript. `,
      gitlink: "https://github.com/HostelLife/HostelLife",
      live: "https://github.com/HostelLife/HostelLife"
    
    }


  ];
  
  export default ProjectsMenu;