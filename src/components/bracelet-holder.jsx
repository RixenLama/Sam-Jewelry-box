
const BraceletHolder = ({ bracelet }) =>{
    return(
        <div className="portfolio-item">
            <img id="bracelets" className="portfolio-img" src={bracelet.braceletImage.file.url} alt="" />
        </div>
    )
}

export default BraceletHolder