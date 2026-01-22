import { useState } from 'react';
import './project.css';
import imgs3 from "./assets/billingsoft1.png"
import imgs2 from "./assets/bikespare2.png"
import imgs4 from "./assets/billingsoft2.png"
import imgs5 from "./assets/busfleet1.png"
import imgs6 from "./assets/busfleet2.png"


function Projects(props) {
    const [changeimg1, setchangeimg1] = useState(0)
    const [changeimg2, setchangeimg2] = useState(0)
    const [changeimg3, setchangeimg3] = useState(0)
    return (
        <>
            <h1 className='prossName' id='projectss1'>Projects</h1>
            <section className='prosection'>

                <div className='projectbox'>

                    <div className='project1'>
                        <div className='pro1'>
                            <h1 className='heading'>BikeSpare Hub</h1>
                            <div className='imagboxs'>
                                {changeimg1 === 0 && (
                                    <img src={props.images} alt='bike spare' className='proimgs1' onMouseEnter={() => setchangeimg1(1)} />)}
                                {changeimg1 === 1 && (<img src={imgs2} onMouseLeave={() => setchangeimg1(0)} alt='bike spare' className={`proimgs2 ${(changeimg1 === 1) ? "disp" : ""}`} />)}</div>
                            <h3 className='prodescriptio'>A modern and responsive bike spare parts website designed to deliver a smooth and reliable shopping experience for motorcycle enthusiasts. The platform features an intuitive user interface, clear product categorization, and a fast client-side search to help users quickly find genuine spare parts.

                                The website focuses on performance, usability, and visual appeal, featuring a dark premium theme with strong call-to-action elements. Built entirely on the front-end without any backend integration, this project demonstrates my ability to create well-structured layouts, interactive components, and scalable UI logic using core web technologies—without relying on heavy frameworks.</h3>
                            <div className='toolsboxs'>
                                <h4 className='toolpro1'>HTML</h4>
                                <h4 className='toolpro1'>CSS</h4>
                                <h4 className='toolpro1'>TypeScript</h4>
                                <h4 className='toolpro1'>Node.js</h4>
                                 <h4 className='toolpro1'>Express</h4>
                                <h4 className='toolpro1'>JavaScript</h4>
                            </div>
                            <div className='viewpro'>
                                <a href='https://github.com/visva532/Bike-spares' className='ach' target='_blank'>
                                <h4 className='viewspros'>View Project<span className="material-icons" >open_in_new</span>
                                </h4></a>
                                <h4 className='prodate'>2026</h4>
                            </div>

                        </div>

                    </div>
                    <div className='project2'>
                        <div className='pro1'>
                            <h1 className='heading'>Smart Restaurant System</h1>
                            <div className='imagboxs'>
                                {changeimg2 === 0 && (
                                    <img src={imgs3} alt='bike spare' className='proimgs1' onMouseEnter={() => setchangeimg2(1)} />)}
                                {changeimg2 === 1 && (<img src={imgs4} onMouseLeave={() => setchangeimg2(0)} alt='bike spare' className={`proimgs2 ${(changeimg2 === 1) ? "disp" : ""}`} />)}</div>
                            <h3 className='prodescriptio'>Smart Restaurant System is a comprehensive freelance project designed to streamline restaurant operations with features like admin login, table management, cash flow tracking, product selection, takeaway options, and multiple payment methods.

                                Built using HTML, CSS, React, JavaScript, Node.js, Express, and SQLite, this system offers a seamless and efficient experience for both staff and customers. The admin panel securely manages tables and orders, while the integrated payment methods simplify checkout. The takeaway feature adds flexibility for customers preferring off-premise dining.</h3>
                            <div className='toolsboxs'>
                                <h4 className='toolpro1'>HTML</h4>
                                <h4 className='toolpro1'>CSS</h4>
                                <h4 className='toolpro1'>Node.js</h4>
                                <h4 className='toolpro1'>JavaScript</h4>
                                <h4 className='toolpro1'>React</h4>
                                <h4 className='toolpro1'>SQLite</h4>
                                <h4 className='toolpro1'>Express</h4>
                            </div>
                            <div className='viewpro'>
                               <a href='https://github.com/visva532/Restaurant-Billing-Table-Management-System'target='_blank'> <h4 className='viewspros'>View Project<span className="material-icons" >open_in_new</span></h4></a>
                                <h4 className='prodate'>2025</h4>
                            </div>

                        </div>

                    </div>
                    <div className='project3'>
                        <div className='pro1'>
                            <h1 className='heading'>Bus Management System</h1>
                            <div className='imagboxs'>
                                {changeimg3 === 0 && (
                                    <img src={imgs5} alt='bike spare' className='proimgs1' onMouseEnter={() => setchangeimg3(1)} />)}
                                {changeimg3 === 1 && (<img src={imgs6} onMouseLeave={() => setchangeimg3(0)} alt='bike spare' className={`proimgs2 ${(changeimg3 === 1) ? "disp" : ""}`} />)}</div>
                            <h3 className='prodescriptio'>Bus Fleet Management System is an internship project designed to simplify and organize bus operations through a role-based interface. The system supports admin, user, and driver logins, along with features such as bus selection and basic fleet coordination.

                                Developed using HTML, CSS, and JavaScript, the project emphasizes responsive UI design, front-end logic, and structured workflow handling. It showcases my ability to build interactive management systems and implement real-world use cases during my internship experience.</h3>
                            <div className='toolsboxs'>
                                <h4 className='toolpro1'>HTML</h4>
                                <h4 className='toolpro1'>CSS</h4>

                                <h4 className='toolpro1'>JavaScript</h4>
                            </div>
                            <div className='viewpro'>
                               <a href='http://github.com/visva532/busfleet' target='_blank'> <h4 className='viewspros'>View Project<span className="material-icons" >open_in_new</span></h4></a>
                                <h4 className='prodate'>2025</h4>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
export default Projects;