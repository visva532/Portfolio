import { useEffect, useState } from "react";
import"./about.css";
import freelancer from "./assets/freelance.png"
function Aboutme(){
     const aboutcolor=['gold','yellow','white']
    const[colorr,setcolorr]=useState(0);
    useEffect(()=>{const venom=setInterval(() => {
        setcolorr(prev=>(prev+1)%aboutcolor.length)
        
    },1000);
     return () => clearInterval(venom);

    },[])
    return(
        <>
        <section className="aboutsection" id="abouts1"><span className="ds">. </span>
          
            
            <h4 className="skills1" >
                        <div
                            className="carrerDotss wess"
                            style={{backgroundColor:aboutcolor[colorr]  }}


                        ></div>
                        About Me
                    </h4> <h1 className="whoiam">Who I Am_</h1>
            <div className="div1s">
            <div className="aboutdiv1">
                  
                   
                    <h5 className="aboutdescrip1">Currently pursuing a Bachelor of Engineering (B.E) in Computer Science and Engineering (2023–2027) at Ponjesly College of Engineering, with industry experience as a Full Stack Developer Intern. Actively involved in frontend and backend development, API integration, and deployment workflows. Skilled in writing clean, maintainable code and collaborating effectively with cross-functional teams. Passionate about continuous learning, problem-solving, and building user-centric applications.

A MERN Stack Developer with hands-on experience in building scalable and efficient web applications using React, Node.js, Express, and databases such as MongoDB and SQLite. Gained strong practical exposure through real-world projects, including a Restaurant Billing & Table Management System and a Bus Fleet Management System, with a strong focus on performance, usability, and reliable system design.</h5>


            </div>
            <div className="aboutdiv2">
                <h5 className="aboutdescrip">Offering end-to-end freelance services in Custom Web Solutions, UI/UX design (Figma), Digital Marketing, Logo Design, Social Media Management, and Resume & CV Building. Focused on creating high-quality, user-centric, and business-driven solutions delivered on time.</h5>
                <div className="imgdiv"><img src={freelancer} className="imgq"/></div>

            </div>
            </div>
            
            
        </section>
        </>
    )
}
export default Aboutme;