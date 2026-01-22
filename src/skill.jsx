import { useEffect, useState } from "react";
import "./skill.css";

function Skillss() {
    const colorss = ["gold", "black", "white"]
    const [cols, setcols] = useState(0);
    useEffect(() => {
        const vars = setInterval(() => {
            setcols((pres) => (pres + 1) % colorss.length)


        }, 1000);
        return () => clearInterval(vars)

    }, [])
    const doo = "<Skills/>"
    const [starts, setstarts] = useState(0);
    function Start(props) {
        setstarts(props)


    }
    return (
        <>
            <section className="section3" id="skills1">
                <div className="containers1">
                    <h4 className="skills11" >
                        <div
                            className="carrerDotss wes"
                            style={{ backgroundColor: colorss[cols] }}

                        ></div>
                        Tech Stacks
                    </h4>

                    <h2 className="expirences1" >{doo}</h2>
                    <div className="skillsets">
                        <h3 className={`skis ${(starts === 0) ? "see" : ""}`} onClick={() => Start(0)}><span className="material-icons  wes">code</span> Languages </h3>
                        <h3 className={`skis ${(starts === 1) ? "see" : ""}`} onClick={() => Start(1)}> <span className="material-icons  wes">web</span>FrontEnd</h3>
                        <h3 className={`skis ${(starts === 2) ? "see" : ""}`} onClick={() => Start(2)}> <span className="material-icons wes">dns</span>BackEnd </h3>
                        <h3 className={`skis ${(starts === 3) ? "see" : ""}`} onClick={() => Start(3)}><span className="material-icons wes">storage</span> DataBases</h3>
                        <h3 className={`skis ${(starts === 4) ? "see" : ""}`} onClick={() => Start(4)}><i class="material-icons wes">build</i>Tools </h3>
                    </div>
                    <hr className="hrline" />
                    <div className="toolssets">
                        {starts === 0 && (
                            <div className="toolssets0">
                                <h3 className="toools">Python</h3>
                                <h3 className="toools">JavaScript</h3>

                            </div>
                        )}
                        {starts === 1 && (
                            <div className="toolssets0">
                                <h3 className="toools">HTML</h3>
                                <h3 className="toools">CSS</h3>
                                <h3 className="toools">Bootstrap</h3>
                                <h3 className="toools">React JS</h3>

                            </div>
                        )}
                        {starts === 2 && (
                            <div className="toolssets0">
                                <h3 className="toools">Node js</h3>
                                <h3 className="toools">Express js</h3>
                                <h3 className="toools">Fast API</h3>

                            </div>
                        )}
                        {starts === 3 && (
                            <div className="toolssets0">
                                <h3 className="toools">Mongo DB</h3>
                                <h3 className="toools">SQLite</h3>

                            </div>
                        )}
                        {starts === 4 && (
                            <div className="toolssets0">
                                <h3 className="toools">Git</h3>
                                <h3 className="toools">GitHub</h3>
                                <h3 className="toools">MS Excel</h3>
                                <h3 className="toools">Canva</h3>
                                 <h3 className="toools">Figma</h3>

                            </div>
                        )}

                    </div>










                </div>
            </section>

        </>
    )
}
export default Skillss;
