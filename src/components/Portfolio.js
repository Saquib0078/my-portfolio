import React ,{useState}from 'react'
import './Portfolio.css'
import { createBrowserHistory } from 'history';


const projects = [
    {
      name: 'Books_management',
      image: 'https://tse1.mm.bing.net/th?id=OIP.YnvcuV6Jd01uLBuGWbYe5wHaEJ&pid=Api&P=0',
      link: 'https://github.com/Saquib0078/BooksManagement-.git',
    },
    {
      name: 'Url Shortner',
      image: 'https://tse2.explicit.bing.net/th?id=OIP.mGNpsAgC0dCezJ_6iP5ywwHaE1&pid=Api&P=0',
      link:"https://github.com/Saquib0078/project-urlShortnerGroup5.git"
    },
    {
      name: 'Open To Intern',
      image: 'https://tse4.mm.bing.net/th?id=OIP.Vw18xfjo27DVgdIRu61rWgHaEK&pid=Api&P=0',
      link:"https://github.com/Saquib0078/CreateIntern.git"
    },
    {
      name: 'Blogging_Site',
      image: 'https://tse2.mm.bing.net/th?id=OIP.fK2RWcMPo7kBaTIOEkTRsQHaEK&pid=Api&P=0',
      link:"https://github.com/Saquib0078/Project-Blog-Site.git"
    },
    {
      name: 'Ecommerce App',
      image: 'https://tse1.mm.bing.net/th?id=OIP.w3RuTlp8ZuPXStS3vQHlTwHaEK&pid=Api&P=0',
      link:"https://github.com/afrin786akhtar/project-productsManagementGroup65.git"
    },
    {
      name: 'Hotstar_Clone',
      image: 'https://tse2.mm.bing.net/th?id=OIP.0FWf0WLgzH4ADOYQbDch9AHaEK&pid=Api&P=0',
      link:"https://github.com/Saquib0078/react-disney-clone.git"
    },
  ];

  const history = createBrowserHistory();

function Portfolio() {

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    
    <div className="PortfolioContainer" >
      
    {projects.map((project, index) => (
      <div onClick={()=>handleClick(project.link)} style={{ cursor: 'pointer' }} key={index}  className="project-box">
        <img src={project.image} alt={project.name} />
        <p>{project.name}</p>        
      </div>
      
    ))}
  </div>

  )
}

export default Portfolio
