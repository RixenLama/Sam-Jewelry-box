
const BraceletHolder = ({ bracelet }) =>{
    return(
        <div id="braceletimage" className="portfolio-item">
            <img className="portfolio-img" src={bracelet.fields.image.fields.file.url} alt="" />
        </div>
    )
}

export default BraceletHolder