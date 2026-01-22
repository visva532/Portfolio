import "./beyondcode.css";
import pic1 from "./assets/free.jpg"
import pic2 from "./assets/psychology.jpg"
import pic3 from "./assets/stocks.jpg"
import pic4 from "./assets/personalfinance.jpg"
import { useEffect, useState } from "react";
function Beyondcodes() {
    const aboutcolor = ['gold', 'yellow', 'white']
    const [colorr, setcolorr] = useState(0);
    useEffect(() => {
        const venom = setInterval(() => {
            setcolorr(prev => (prev + 1) % aboutcolor.length)

        }, 1000);
        return () => clearInterval(venom);

    }, [])
    return (
        <>
            <section className="beyondcodesection">
                <div className="beyondcodediv">
                    <div className="beyondname">
                        <div
                            className="carrerDotss wess"
                            style={{ backgroundColor: aboutcolor[colorr] }}


                        ></div><h4 className="passionname">Finance & Passion</h4>
                    </div>
                    <h1 className="beyodsme">FinTech Enthusiast_</h1>
                    <h4 className="beyondcodedescrip">Finance, for me, goes far beyond numbers and charts — it’s about understanding how money shapes decisions, businesses, and lives. I enjoy exploring topics like personal finance, investment strategies, financial planning, and the psychology behind spending and saving.

                        Just like writing clean and efficient code, managing finances requires discipline, risk assessment, and long-term thinking. Whether it’s optimizing expenses, analyzing market trends, or planning sustainable growth, I enjoy applying structured thinking to financial problems.

                        My interest in finance also complements my work as a developer and freelancer, helping me make smarter business decisions, price my services effectively, and build financially sustainable projects.

                        I actively learn from finance blogs, market insights, and real-world case studies to continuously improve my financial literacy.</h4>
                    <div className="passioncards">
                        <div className="divcards1 ve">
                            <div className="passimgdiv"><img src={pic4} alt="personal finance"  className="imgpass"/></div>
                            <h2 className="discripname1">Personal Finance_

                            </h2>
                            <h4 className="discription1">Budgeting, saving strategies, and financial discipline</h4>
                        </div>
                         <div className="divcards1 ve"><div className="passimgdiv"><img src={pic3} alt="Investing Basics"  className="imgpass"/></div>
                            <h2 className="discripname1">Investing Basics_

                            </h2>
                            <h4 className="discription1 ">Stocks, mutual funds, long-term wealth building</h4></div>
                          <div className="divcards1 ve"><div className="passimgdiv"><img src={pic1} alt="Financial Planning"  className="imgpass"/></div>
                            <h2 className="discripname1">Financial Planning_

                            </h2>
                            <h4 className="discription1">Pricing, cash flow management, profit planning</h4></div>
                           <div className="divcards1 ve"><div className="passimgdiv"><img src={pic2} alt="personal finance"  className="imgpass"/></div>
                            <h2 className="discripname1">Financial Psychology_

                            </h2>
                            <h4 className="discription1">Money mindset, risk behavior, and decision-making</h4></div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Beyondcodes;