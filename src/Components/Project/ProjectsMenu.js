import todoAppImg  from "./project-img/to_do_list_with_react_css_bootstrap.PNG";
//import rastaurantImg  from "./project-img/rastaurant_app_bootstrap_js_react.PNG";
import portfolioImg from "./project-img/portfolio_img.PNG";
import cyfHotelImg from "./project-img/cyf-hotel.PNG"
import hostelLifelImg from "./project-img/hostelApp-mobile.JPG"

const ProjectsMenu = [
    {
      id: 0,
      image: hostelLifelImg,
      name: "Hostel App",
      category: "Travel & Tourism",
      language: "React, JavaScript, Node with Express, SQL, React component",
      description:
        `This app will help to connect and meet with other travellers and discover 
        cities and places of interest together with app functionalities like Real-time chat, Google Map, QR code scanning options etc.`,

      gitlink: "https://github.com/HostelLife/HostelLife",
      live: "https://hostel-life-app.herokuapp.com"
    
    },
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

    // {
    //   id: 4,
    //   image: rastaurantImg,
    //   name: "Indian Rastaurant",
    //   category: "Food industry",
    //   language: "HTML5, CSS3, React, JavaScript",
    //   description:
    //     "I have used updated HTML and most recent version of CSS while creating this website",
    //   gitlink: "https://github.com/rana3399/Indian_Restaurant",
    //   live: "https://rana3399.github.io/Indian_Restaurant"
    
    // },

  ];
  
  export default ProjectsMenu;