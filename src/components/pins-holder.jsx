
const PinsHolder = ({ pins }) =>{
    return(
        <div id="pinsimage" className="portfolio-item">
            <img className="portfolio-img" src={pins.fields.image.fields.file.url} alt="" />
        </div>
    )
}

export default PinsHolder