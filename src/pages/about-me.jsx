import Button from "../components/button-jsx"

const AboutMe = () =>{
    return(

    <div className="container">
        <div className="about-me-container">
            <div className="about-me-title">
                <h2 className="TEXTCENTER ONE LIGHT DBLUE">About Me</h2>
            </div>

            <div className="about-me-text-container">
                    <img className="about-me-img" src="./about-me.jpg" alt="" />
                <div className="about-me-text">
                    <span className="WHITE">
                        Hi, I am Samira
                    </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla augue pulvinar diam semper luctus. 
                    Fusce sagittis lectus est, id dictum augue dapibus eu. Sed ullamcorper lacus a ex hendrerit sagittis. Vivamus 
                    placerat sed diam at sodales. Sed ut interdum felis. Curabitur bibendum ipsum vitae nulla pretium fermentum. 
                    Donec condimentum augue in sem tempor molestie. Fusce aliquet ornare ex, ut dapibus nunc eleifend elementum. 
                    Donec lectus nunc, hendrerit vel consequat vel, tempus quis purus. Nam rutrum quam eget egestas euismod. 
                    Aenean ligula lectus, commodo id urna laoreet, tempor bibendum ex. Aenean malesuada, diam sed posuere pretium, 
                    est felis tincidunt purus, eu dapibus urna diam eu orci. Quisque suscipit scelerisque neque at elementum. Nunc 
                    in lacinia leo, a auctor augue. Nunc nec lacus a augue commodo viverra eu et neque. Vivamus vitae enim eu ex 
                    bibendum sollicitudin. Cras id pellentesque velit, eu tempus risus. Nulla vestibulum felis enim, at bibendum 
                    libero iac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla augue pulvinar diam semper luctus. 
                    Fusce sagittis lectus est, id dictum augue dapibus eu. Sed ullamcorper lacus a ex hendrerit sagittis. 
                    Vivamus placerat sed diam at sodales. Sed ut interdum felis. Curabitur bibendum ipsum vitae nulla pretium fermentum. 
                    Donec condimentum augue in sem tempor molestie. Fusce aliquet ornare ex, ut dapibus nunc eleifend elementum. Donec 
                    lectus nunc, hendrerit vel consequat vel, tempus quis purus. Nam rutrum quam eget egestas euismod. Aenean ligula lectus, 
                    commodo id urna laoreet, tempor bibendum ex. Aenean malesuada, diam sed posuere pretium, est felis tincidunt purus, 
                    eu dapibus urna diam eu orci. Quisque suscipit scelerisque neque at elementum. Nunc in lacinia leo, a auctor augue. 
                    Nunc nec lacus a augue commodo viverra eu et neque. Vivamus vitae enim eu ex bibendum sollicitudin.
                    Cras id pellentesque velit, eu tempus risus. Nulla vestibulum felis enim, at bibendum libero iac</p>
                    <Button>Connect with me</Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutMe