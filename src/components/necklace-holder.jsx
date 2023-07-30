
const NecklaceHolder = ({ necklace }) =>{
    return(
        <div id="necklaceimage" className="portfolio-item">
            <img className="portfolio-img" src={necklace.fields.image.fields.file.url} alt="" />
        </div>
    )
}

export default NecklaceHolder