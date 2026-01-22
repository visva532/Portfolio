import "./contact.css";
import { useEffect, useState } from "react";
function Contacts() {
    const aboutcolor = ['gold', 'yellow', 'white']
    const [colorr, setcolorr] = useState(0);
    useEffect(() => {
        const venom = setInterval(() => {
            setcolorr(prev => (prev + 1) % aboutcolor.length)

        }, 1000);
        return () => clearInterval(venom);

    }, [])
    let cd="</>"
    return (<>
        <section className="contactsection" id="contactss">
            <div className="contactdiv">
                <div className="touch">
                    <div
                        className="carrerDotss wess"
                        style={{ backgroundColor: aboutcolor[colorr] }}


                    ></div><h4 className="passionname">Get in Touch</h4>
                </div>
                <h1 className="beyodsme">Let’s Get Started_</h1>
                <div className="contactdetails">
                    <a className="email" href="mailto:s.visva532@gmail.com"  target="_blank">
                        <div className="emailimg">
                           <i className="fa-solid fa-envelope"></i>
                           <div className="mailandhead">
                            <h4 className="emailsd">Email</h4>
                            <h4 className="visvaemail">s.visva532@gmail.com</h4>
                           </div>

                        </div>
                        <span className="material-icons dds" >open_in_new</span>
                                
                    </a>
                    <a className="email">
                        <div className="emailimg">
                          <i className="fa-solid fa-phone"></i>

                           <div className="mailandhead">
                            <h4 className="emailsd">Contact Number</h4>
                            <h4 className="visvaemail">+91 8438679529</h4>
                           </div>

                        </div>
                        <span className="material-icons dds" >open_in_new</span>
                                
                    </a>
                    <a className="email" href="https://www.linkedin.com/in/s-visva532"  target="_blank">
                        <div className="emailimg">
                           <i className="fa-brands fa-linkedin"></i>

                           <div className="mailandhead">
                            <h4 className="emailsd">LinkedIn</h4>
                            <h4 className="visvaemail">www.linkedin.com/in/s-visva532</h4>
                           </div>

                        </div>
                        <span className="material-icons dds" >open_in_new</span>
                                
                    </a>
                    <a className="email" href="https://github.com/visva532"  target="_blank">
                        <div className="emailimg">
                           <i className="fa-brands fa-github"></i>

                           <div className="mailandhead">
                            <h4 className="emailsd">GitHub</h4>
                            <h4 className="visvaemail">https://github.com/visva532</h4>
                           </div>

                        </div>
                        <span className="material-icons dds" >open_in_new</span>
                                
                    </a>
                    <a className="email" href="https://www.instagram.com/v._i._s._v._a?igsh=bGtvdW12a3ZuZTM0"  target="_blank">
                        <div className="emailimg">
                           <i className="fa-brands fa-instagram"></i>

                           <div className="mailandhead">
                            <h4 className="emailsd">Instagram</h4>
                            <h4 className="visvaemail">www.instagram.com/v._i._s._v._a</h4>
                           </div>

                        </div>
                        <span className="material-icons dds" >open_in_new</span>
                                
                    </a>
                </div>
               
            </div>
        </section>
         <footer className="footers">
                    <h4 className="footes">@2026 Visva</h4>
                     <h4 className="footes">{cd}</h4>

                </footer>


    </>)
}
export default Contacts;