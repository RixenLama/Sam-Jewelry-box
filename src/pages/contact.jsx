
const Contact = () =>{
    
    return(
        <div className="container">
            <h2 className="DBLUE ONE TEXTCENTER contact-header" id="contact">Contact</h2>

            <div className="contact-container">
                <div className="contact-card">
                    <a target="blank_" href="tel:+35640567289" className="contact-card-holder">
                        <img className="contact-card-top-img" src="./contact-card-top.svg" alt="" />
                        <div className="contact-card-text">
                            <img src="./contact-phone.png" alt="" />
                            <span className="card-link ONE LIGHT">+35640567289</span>
                        </div>
                    </a>
                </div>
                <div className="contact-card">
                    <a target="blank_" href="" className="contact-card-holder">
                        <img className="contact-card-top-img" src="./contact-card-top.svg" alt="" />
                        <div className="contact-card-text">
                            <img src="./contact-email.png" alt="" />
                            <span className="card-link ONE LIGHT">Samsjewlerybox@gmail.com</span>
                        </div>
                    </a>
                </div>
                <div className="contact-card">
                    <a target="blank_" href="https://www.instagram.com/samsjewellerybox/" className="contact-card-holder">
                        <img className="contact-card-top-img" src="./contact-card-top.svg" alt="" />
                        <div className="contact-card-text">
                            <img src="./contact-insta.png" alt="" />
                            <span className="card-link ONE LIGHT">@Samsjewlerybox</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact