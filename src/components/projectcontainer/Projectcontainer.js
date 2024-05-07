import React from 'react'
import { Element } from 'react-scroll'
import Project from './project/Project'
import imageSrc from '../../images/fashin1.png'
import img from '../../images/1715048343404.png'
import flight from "../../images/Airline-Ticket.jpg"
import django from "../../images/images.png"
import './Projectcontainer.css';
const Projectcontainer = () => {

    const Projects = [
        {
            img:
            imageSrc,
            title:
                "E-commerceweb",
            des:
                "Developed a fully functional ecommerce website from scratch using HTML, CSS, and JavaScript",
            link: "https://deepakdevsavvy.github.io/Ecommerceweb/",
        },
        {
            img:
                img,
            title:
                "Frontend Editor",
            des:
                "The ultimate frontend code editor for lightning-fast editing of HTML, CSS, and JavaScript using React",
            link: "https://deepakdevsavvy.github.io/Frontend-Editor/",
        },
        {
            img:
                flight,
            title:
                "Flight Booking Application",
            des:
            "Built with React, my flight booking app offers a seamless experience for users to search, compare, and book flights effortlessly. Its intuitive interface and dynamic updates make travel planning a breeze.",
            
        },
        {
            img:
                django,
            title:
                "Django-Mysql-CRUD",
            des:
                
              "Created a CRUD app using Django and MySQL for efficient data management. Seamlessly handle Create, Read, Update, and Delete operations with Django's backend and MySQL's database.",
            
        },
        // {
        //     img:
        //         "C:\Users\dheed\OneDrive\Desktop\react_projects\react_app\src\images\fashin1.png",
        //     title:
        //         "E-commerceweb",
        //     des:
        //         "The href attribute requires a valid value to be accessible. Provide a valid,",
        //     link: "https://deepakdevsavvy.github.io/Ecommerceweb/",
        // },
        // {
        //     img:
        //         "https://www.bing.com/images/search?view=detailV2&ccid=g34W00EI&id=38F6959EBC6627BFDEAE40E7BB90D7A83DA29DE1&thid=OIP.g34W00EIjsu0JnKFhM8IrwHaEK&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp7752278.jpg&exph=2268&expw=4032&q=4K+Wallpapers+for+PC+RGB&simid=608054077157737428&FORM=IRPRST&ck=63DF9BE1E0325CB44566B623D582D736&selectedIndex=9&itb=0",
        //     title:
        //         "social media",
        //     des:
        //         "The href attribute requires a valid value to be accessible. Provide a valid,",
        //     link: "www.google.com",
        // },
    ];
    return (
        <div>
         
            <Element id="projects" className='project_content'>
                 <div style={{ Height:'100px' }}></div>
                <center>
                <h1>Projects</h1>
                <p>Here are are some project which i done</p>
                </center>
                <div className="projects">
                    {
                        Projects.map((project, index) =>
            (
                            <Project key={index} img={project.img} title={project.title} des={project.des} link={project.link} />
                        )
                
                )
                    }
                </div>

             </Element>
            </div>
            
            
    
    )
}


export default Projectcontainer;