import React from 'react'
import { Element } from 'react-scroll'
import "./contact.css";

const Contact = () => {


    return (

        <Element id='contact' className='contactContainer'>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                integrity="sha512-..."
                crossorigin="anonymous"
            />

            <h1>Contact</h1>
            <div className='div'>
                <center>
                    <table>
                        <tr>
                            <td>Email</td><td>:</td><td><span href='deepak222119@gmail.com'>deepak222119@gmail.com</span></td>
                        </tr>
                        <tr>
                            <td>Linkedin</td><td>:</td><td><a href='https://www.linkedin.com/in/deepak222'>   www.linkedin.com/in/deepak222</a></td>
                        </tr>
                        <tr>
                            <td>GitHub</td><td>:</td><td><a href='https://github.com/deepakdevsavvy'>   www.github.com/deepakdevsavvy</a></td>
                        </tr>
                    </table>
                </center>
                <div className='icons'>
                    <a href='https://www.linkedin.com/in/deepak222'><i class="fab fa-linkedin"></i></a>
                    <a href='https://github.com/deepakdevsavvy'><i class="fab fa-github"></i></a>
                    <a href='deepak222119@gmail.com'><i class="far fa-envelope"></i></a>
                </div>
            </div>
            <div className='space'>

            </div>


        </Element>
    )
}

export default Contact