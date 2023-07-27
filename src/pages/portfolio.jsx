
const Portfolio = () =>{
    const image = document.querySelectorAll(".portfolio-img")
    const necklace = document.querySelectorAll("#necklace")

    const filterNecklace = () =>{
        image.forEach((element) =>{
            element.style.display = "none"
        })
        necklace.forEach((element) =>{
            element.style.display = "block"
        })
    }

    return(
        <div className="fixer">
            <div className="portfolio-bg">
                <div className="container">
                    <h2 className="portfolio-header TEXTCENTER WHITE LIGHT ONE">Previous Collections</h2>
                    <div className="portfolio-filter-container">
                        <button onClick={filterNecklace} className="WHITE BUTTON">
                            Necklace
                        </button>
                    </div>
                    <div className="portfolio-container">           
                        <div className="portfolio-item">
                            <img id="necklace" className="portfolio-img" src="./portfolio-1.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img id="necklace" className="portfolio-img" src="./portfolio-2.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img id="necklace" className="portfolio-img" src="./portfolio-3.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img id="necklace" className="portfolio-img" src="./portfolio-4.png" alt="" />    
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-1.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-2.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-3.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-4.png" alt="" />    
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-1.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-2.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-3.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-4.png" alt="" />    
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-1.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-2.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-3.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-4.png" alt="" />    
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-1.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-2.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-3.png" alt="" />
                        </div>
                        <div className="portfolio-item">
                            <img className="portfolio-img" src="./portfolio-4.png" alt="" />    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Portfolio