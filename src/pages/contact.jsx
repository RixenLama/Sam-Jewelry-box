
const Contact = () =>{
    
    return(
        <div className="container">

            <h2 className="DBLUE ONE TEXTCENTER contact-header">Contact</h2>

            <div className="contact-container">
                <div className="contact-card">
                    <img className="contact-card-top-img" src="./contact-card-top.svg" alt="" />
                    <div className="contact-card-text">
                        <img src="./contact-phone.png" alt="" />
                        <span className="ONE LIGHT">+35640567289</span>
                    </div>
                </div>
                <div className="contact-card">
                    <img className="contact-card-top-img" src="./contact-card-top.svg" alt="" />
                    <div className="contact-card-text">
                        <img src="./contact-email.png" alt="" />
                        <span className="ONE LIGHT">Samsjewlerybox@gmail.com</span>
                    </div>
                </div>
                <div className="contact-card">
                    <img className="contact-card-top-img" src="./contact-card-top.svg" alt="" />
                    <div className="contact-card-text">
                        <img src="./contact-insta.png" alt="" />
                        <span className="ONE LIGHT">@Samsjewlerybox</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact