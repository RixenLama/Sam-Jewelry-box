import UseContentful from "../useContentful"
import { useEffect, useState } from "react"
import BraceletHolder from "../components/bracelet-holder"


const Portfolio = () =>{
    const [bracelets, setBracelets] = useState([])
    const { getBracelet } = UseContentful ();
    const images = document.querySelectorAll(".portfolio-img")
    const necklace = document.querySelectorAll("#necklace")

    useEffect(() => {
        getBracelet().then((response) => getBracelet([response]))
    });

    const changeNecklace = () =>{
        images.forEach((a) =>{
            a.style.display = "none"
        })
        necklace.forEach((b) =>{
            b.style.display = "block"
        })
    }

    return(
        <div className="fixer">
            <div className="portfolio-bg">
                <div className="container">
                    <h2 className="portfolio-header TEXTCENTER WHITE LIGHT ONE">Previous Collections</h2>
                    <div className="portfolio-filter-container">
                        <button onClick={changeNecklace} className="WHITE BUTTON">
                            Necklace
                        </button>
                    </div>
                    <div className="portfolio-container">           
                        {
                            bracelets.map((bracelet) => <BraceletHolder key={bracelet.braceletImage.title} bracelet={[bracelet]} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Portfolio