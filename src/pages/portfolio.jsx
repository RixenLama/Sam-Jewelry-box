import { useEffect, useState } from "react"
import BraceletHolder from "../components/bracelet-holder"
import { createClient } from "contentful"

const client = createClient({
    space: "yiclsl60atxf",
    accessToken: "2Hm7Yo09xT7jUHTboWPUHV3LRiKQVMMc-KdZcfVe1DA",
})


const Portfolio = () =>{
    const [bracelets , setBracelets] = useState([]) 

    useEffect(() => {
        client.getEntries({
            content_type: "bracelet"
        }).then((entries) => setBracelets(entries.items)).catch((err) => console.log(err))
    }, []) 

    if (bracelets.length === 0){
        return null;
    }
    
    return(
        <div className="fixer">
            <div className="portfolio-bg">
                <div className="container">
                    <h2 className="portfolio-header TEXTCENTER WHITE LIGHT ONE">Previous Collections</h2>
                    <div className="portfolio-filter-container">
                        <button className="WHITE BUTTON">
                            Necklace
                        </button>
                    </div>
                    <div className="portfolio-container">           
                        {
                            bracelets.map((bracelet) => <BraceletHolder bracelet={bracelet} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Portfolio