import { useEffect, useState, useRef } from "react";
import "./Expirence.css";
import pdf1 from "./assets/oneyesCertificate.pdf"
import pdf2 from "./assets/zidioacertificate.pdf"
import pdf3 from "./assets/srishtiCErtificate.pdf"


function Experience() {
  const colorss = ["aliceblue", "white", "gold"];
  const [changes, setchanges] = useState(0);

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  
  useEffect(() => {
    const timess = setInterval(() => {
      setchanges((prevs) => (prevs + 1) % colorss.length);
    }, 1000);

    return () => clearInterval(timess);
  }, []);

  
  useEffect(() => {
    const observers = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observers.observe(sectionRef.current);
    }

    return () => observers.disconnect();
  }, []);
  

  return (
    <>
      <section id="exps"
        ref={sectionRef}
        className={`section2 ${visible ? "show" : ""}`}
      >
        <div className="container1">
          <h4 className="carrerjourny" >
            <div
              className="carrerDots vs"
              style={{ backgroundColor: colorss[changes] }}
            ></div>
            Development Journey_
          </h4>

          <h2 className="expirence1" >Experience</h2>
          <div className="expbox">
            <div className="expbox1  exps">

              <h1 className="title1">Full Stack Development Intern </h1>
              <h3 className="compamy1">OneYes Infotech Solutions Pvt. Ltd., Chennai</h3>
              <ul className="descriptionul1">
                <li className="desli1">Gained practical experience in frontend and backend development through a Full Stack Developer Internship.</li>
                <li className="desli1">Built responsive web applications and supported backend APIs and database integration while collaborating on real-world projects.</li>

              </ul>
              <h5 className="dates1">June 2025 – July 2025</h5>
             <a href={pdf1} target="_blank"> <h6 className="certificate1">View Certificate</h6></a>

            </div>
            <div className="expbox2 exps">
              <h1 className="title2">Web Development Intern  </h1>
              <h3 className="compamy2">zidio development ,Bengaluru </h3>
              <ul className="descriptionul2">
                <li className="desli2">Built real-world skills in frontend and backend technologies<br /> during a Web Development Internship.</li>
                <li className="desli2">Created responsive web interfaces using HTML, <br />CSS, JavaScript, and React, while supporting backend APIs with Node.js and Express.js.</li>

              </ul><h5 className="dates1">March 2025 – April 2025</h5>
               <a href={pdf2} target="_blank"><h6 className="certificate2">View Certificate</h6></a>

            </div>
            <div className="expbox3 exps">

              <h1 className="title3">Data Science <br />Intern  </h1>
              <h3 className="compamy3">Srishti Innovative,Trivandrum</h3>
              <ul className="descriptionul3">
                <li className="desli3">Developed strong analytical skills using Python through real-world, hands-on project work and data-driven problem solving.</li>
                <li className="desli3">Utilized Pandas and NumPy for data manipulation, performed exploratory data analysis, and built basic machine learning models using Jupyter Notebook.</li>

              </ul>
              <h5 className="dates2">january-2025</h5>
              <a href={pdf3} target="_blank"><h6 className="certificate3">View Certificate</h6></a>








            </div>



          </div>






        </div>



      </section>
    </>
  );
}

export default Experience;
