import todoAppImg  from "./project-img/to_do_list_with_react_css_bootstrap.PNG";
//import rastaurantImg  from "./project-img/rastaurant_app_bootstrap_js_react.PNG";
import portfolioImg from "./project-img/portfolio_img.PNG";
import cyfHotelImg from "./project-img/cyf-hotel.PNG";
import hostelLifelImg from "./project-img/hostelApp-mobile.JPG";
import newsWeekImg from "./project-img/newsWeek.JPG";
import saasLandingPageImg from "./project-img/Saas_Landing_Page.JPG";

const ProjectsMenu = [
    {
      id: 1,
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
      id: 2,
      image: todoAppImg,  
      name: " My ToDo List",
      category: "Service",
      language: "React, JavaScript, CSS, HTML",
      description:
        "A to-do list app. Users will be able to write, edit and save their daily routine/tasks. Once the task is done user may delete it.",
      gitlink: "https://github.com/rana3399/My_Todo_List",
      live: "https://rana3399.github.io/My_Todo_List"
    },

    {
      id: 3,
      image: cyfHotelImg,
      name: "CYF Hotel Database",
      category: "Travel & Tourism",
      language: "React, JavaScript, CSS",
      description:
        "This React portfolio website shows some of my best works. Fully mobile resposnive.",
      gitlink: "https://github.com/rana3399/CYF_Hotel",
      live: "https://rana3399.github.io/CYF_Hotel"
    
    },

    {
      id: 4,
      image: portfolioImg,
      name: "Portfolio of Rana-Ahmed",
      category: "Travel & Tourism",
      language: "React, JavaScript, Bootstrap, CSS, Mobile responsive",
      description:
        "This React portfolio website shows some of my best works. Fully mobile resposnive.",
      gitlink: "https://github.com/rana3399/Rana_Ahmed_Portfolio",
      live: "https://rana3399.github.io/Rana-Ahmed-Portfolio/"
    
    },

    // {
    //   id: 5,
    //   image: rastaurantImg,
    //   name: "Indian Rastaurant",
    //   category: "Food industry",
    //   language: "HTML5, CSS3, React, JavaScript",
    //   description:
    //     "I have used updated HTML and most recent version of CSS while creating this website",
    //   gitlink: "https://github.com/rana3399/Indian_Restaurant",
    //   live: "https://rana3399.github.io/Indian_Restaurant"

    // },

     {
      id: 6,
      image: newsWeekImg,
      name: "News Week",
      category: "Journalism",
      language: "HTML5, Bootstrap",
      description:
        "I have used updated HTML and most recent version of Bootstrap only to create this website",
      gitlink: "https://github.com/rana3399/NewsWeek_Bootstrap",
      live: "https://rana3399.github.io/NewsWeek_Bootstrap"

    },

       {
      id: 6,
      image: saasLandingPageImg,
      name: "Personal Assistant",
      category: "Well-being",
      language: "SaaS, CSS-Grid, HTML5, Mobile-Responsive",
      description:
        "A Mobile resposive landing page developed by using SaaS, Css Grid and HTML",
      gitlink: "https://github.com/rana3399/Landing_Page_SAAS/settings/pages",
      live: "https://rana3399.github.io/Landing_Page_SAAS/"

    }

  ];
  
  export default ProjectsMenu;