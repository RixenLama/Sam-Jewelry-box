import { useEffect, useState } from "react"
import BraceletHolder from "../components/bracelet-holder"
import NecklaceHolder from "../components/necklace-holder"
import { createClient } from "contentful"
import PinsHolder from "../components/pins-holder"

const client = createClient({
    space: process.meta.env.VITE_CONTENTFUL_SPACE_ID, 
    accessToken: process.env.VITE_CONTETNFUL_ACCESS_TOKEN
})

const Portfolio = () =>{
    const [bracelets , setBracelets] = useState([]) 
    const [necklaces , setNecklace] = useState([]) 
    const [pins , setPins] = useState([])
    /*CONTENTFUL*/ 
    useEffect(() => {
        client.getEntries({
            content_type: "bracelet"
        }).then((entries) => setBracelets(entries.items)).catch((err) => console.log(err))
    }, []) 
    useEffect(() => {
        client.getEntries({
            content_type: "necklace"
        }).then((a) => setNecklace(a.items)).catch((err) => console.log(err))
    }, []) 
    useEffect(() => {
        client.getEntries({
            content_type: "pins"
        }).then((b) => setPins(b.items)).catch((err) => console.log(err))
    }, []) 

    if (bracelets.length === 0){
        return null;
    }

    if (necklaces.length === 0){
        return null;
    }
    /*FILTERING SYSTEM*/

    const portfolioItem = document.querySelectorAll(".portfolio-item")
    const necklaceImage = document.querySelectorAll("#necklaceimage")
    const braceletImage = document.querySelectorAll("#braceletimage")
    const pinsImage = document.querySelectorAll("#pinsimage")

    const filterNecklace = () =>{
        portfolioItem.forEach((element) =>{
            element.style.display = "none"
        })
        necklaceImage.forEach((element) =>{
            element.style.display = "block"
        })
    }
    const filterBracelet = () =>{
        portfolioItem.forEach((element) =>{
            element.style.display = "none"
        })
        braceletImage.forEach((element) =>{
            element.style.display = "block"
        })
    }
    const filterPins= () =>{
        portfolioItem.forEach((element) =>{
            element.style.display = "none"
        })
        pinsImage.forEach((element) =>{
            element.style.display = "block"
        })
    }


    return(
        <div className="fixer">
            <div className="portfolio-bg">
                <div className="container">
                    <h2 className="portfolio-header TEXTCENTER WHITE LIGHT ONE">Previous Collections</h2>
                    <div className="portfolio-filter-container">
                        <button className="WHITE BUTTON" onClick={filterNecklace}>
                            Necklace
                        </button>
                        <button className="WHITE BUTTON" onClick={filterBracelet}>
                            Bracelet
                        </button>
                        <button className="WHITE BUTTON" onClick={filterPins}>
                            Pins
                        </button>
                    </div>
                    <div className="portfolio-container">           
                        {
                            bracelets.map((bracelet) => <BraceletHolder bracelet={bracelet} />)
                        }
                        {
                            necklaces.map((necklace) => <NecklaceHolder necklace={necklace} />)
                        }
                        {
                            pins.map((pins) => <PinsHolder pins={pins} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Portfolio