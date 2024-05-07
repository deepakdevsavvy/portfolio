import React from 'react'
import { Element } from 'react-scroll'
import skillimage from "../../images/computer.jpg"
import LinearProgress from "@material-ui/core/LinearProgress"
import "./Skillcontainer.css"
const Skilcontainer = () => {
    return (
        <div>
            <Element id='skills'>
                <div style={{ marginTop: '100px', padding:'20px'  }}></div>
            </Element>
            <Element className='skillcontainer' id="skills">
            
                <div className="skill_container">
                    <img src={skillimage}></img>
                </div>
                <div className="skills">
                    <h2>SKILLS SET</h2>
                    <div className='skills_set1'>
                        <h5>Python</h5>
                        <div className="skill1">
                            <LinearProgress variant="determinate" value={100}></LinearProgress>
                        </div>
                    </div>
                    <div className='skills_set2'>
                        <h5>Java Script</h5>
                        <div className="skill2 ">
                            <LinearProgress variant="determinate" value={95}></LinearProgress>
                        </div>
                    </div>
                    <div className='skills_set3'>
                        <h5>Django</h5>
                        <div className="skill3 ">
                            <LinearProgress variant="determinate" value={80}></LinearProgress>
                        </div>
                    </div>
                    <div className='skills_set4'>
                        <h5>React</h5>
                        <div className="skill4">
                            <LinearProgress variant="determinate" value={90}></LinearProgress>
                        </div>
                    </div>
                    <div className='skills_set5'>
                        <h5>HTML and CSS</h5>
                        <div className="skill5">
                            <LinearProgress variant="determinate" value={100}></LinearProgress>
                        </div>
                    </div>

                </div>
            </Element>
        </div>
    );
}

export default Skilcontainer