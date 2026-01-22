import { useEffect, useState } from "react";
import pdf4 from "./assets/visva_resume.pdf"
import "./PortfolioHome.css";
import "./section1.css";
import img1 from "./assets/IMG_0464.JPG";
import Experience from "./Expirence";
import imgs1 from "./assets/bikespare1.png"
import Skillss from "./skill";
import Projects from "./project";
import Services from "./Services";
import Aboutme from "./about";
import Beyondcodes from "./beyondcode";
import Contacts from "./contact";


function Homepage() {
    const[menubar,setmenubar]=useState(0);
    const names=["MERN Stack Developer_","Freelancer_"]
    const[named,setnamed]=useState(0);
    useEffect(()=>{
        const vars=setInterval(() => {setnamed(preve=>(preve+1)%names.length)
            
        }, 2500);
        return ()=> clearInterval(vars) 
    },[])
    const colors = ["yellow", "gold", "white", "black"];
    const [indexx, setindexx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setindexx(prevIndex => (prevIndex + 1) % colors.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);
    const eyeIcon = ["translatex(4px)", "translatex(9px)"]
    const [moveicons, setmoveicons] = useState(0);
    useEffect(() => {
        const intervals = setInterval(() => {
            setmoveicons(prevIndex => (prevIndex + 1) % eyeIcon.length);
        }, 1500);

        return () => clearInterval(intervals);
    }, []);
   

    return (
        <>
            <section className="port-body">
               
                <nav className="navbar">
                    <div className="name">
                        <div
                            className="round"
                            style={{ backgroundColor: colors[indexx] }}
                        ></div>
                        Visva.io
                    </div>
                    <ul className="ul-list ">
                        <li className="lists" href ='#exps' ><a href="#exps" className="anchor"> Experience</a></li>
                        <li className="lists"><a href="#services" className="anchor">Services</a></li>
                        <li className="lists"><a href="#skills1" className="anchor">Stack</a></li>
                        <li className="lists"><a href="#abouts1" className="anchor">About</a></li>
                       <a href="#contactss" className="anchor"> <li className="lists contact" style={{ color: colors[indexx] }}>
                            Contact
                        </li></a>
                    </ul>
                    <div className="icon-bar">
                       {menubar===0 && (<span className="material-icons" onClick={()=>setmenubar(1)}>menu</span>)}
                       {menubar===1 && (<span className="material-icons" onClick={()=>setmenubar(0)}>close</span>)}
                    </div>
                </nav>
              {menubar===1 &&(  <div className="menusbar"> <ul className=" vv">
                        <li className=" xx" href ='#exps' ><a href="#exps" className="anchor"> Experience</a></li>
                        <li className=" xx"><a href="#services" className="anchor">Services</a></li>
                        <li className="xx"><a href="#skills1" className="anchor">Stack</a></li>
                        <li className=" xx"><a href="#abouts1" className="anchor">About</a></li>
                       <a href="#contactss" className="anchor"> <li className="lists contact xx" style={{ color: colors[indexx] }}>
                            Contact
                        </li></a>
                    </ul>

                </div>)}
                <section className="section1">
                    <div className="section1dev1">
                        <h1 className="section1namess">Hi, I'm Visva</h1>
                        <h2 className="dominname"  >{names[named]}</h2>
                        <h5 className="tagline">Transforming ideas into high-impact platforms with React, Node.js, Express, and MongoDB <br /> optimized for speed, reliability, and growth.</h5>
                        <div className="resumePROJECTS">
                            <a href="#projectss1"><div className="ViewProjects">View Projects</div></a>
                            <a href={pdf4} target="_blank"><div className="resume">View Resume <span className="material-icons" id="spans1" style={{ transform: eyeIcon[moveicons] }}>visibility</span></div></a>
                            <div className="getqoute" style={{ transform: eyeIcon[moveicons] }}>
                                <a
                                    href="https://wa.me/918438679529?text=Hi%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                   Start a Chat
                                </a>
                            </div>


                        </div>
                    </div>
                    <div className="imagediv">
                        <div className="innerimgdiv"><img src={img1} className="images" /></div>
                    </div>

                </section>
                <div className="expo"></div>
                <Experience />
                <Skillss/>
                <Projects images={imgs1}/>
                <Services />
                <Aboutme/>
                <Beyondcodes/>
                <Contacts/>


            </section>
        </>
    );
}

export default Homepage;