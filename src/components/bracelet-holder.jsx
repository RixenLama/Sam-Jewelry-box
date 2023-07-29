
const BraceletHolder = ({ bracelet }) =>{
    return(
        <div id="bracelet">
            <img className="portfolio-img" src={bracelet.fields.image.fields.file.url} alt="" />
        </div>
    )
}

export default BraceletHolder