import { HashLink as Link } from "react-router-hash-link"

const AboutMe = () =>{
    return(

    <div className="container">
        <div className="about-me-container">
            <div className="about-me-title">
                <h2 className="TEXTCENTER ONE LIGHT DBLUE">About Us</h2>
            </div>

            <div className="about-me-text-container">
                    <img className="about-me-img" src="./about-me.jpg" alt="" />
                <div className="about-me-text">
                    <span className="WHITE">
                        Hi, I am Samira
                    </span>
                    <p>Welcome to Sam's Jewellery Box – Where Magic and Beauty Shine Together! Step into a world of wonder and discover the most 
                    amazing jewellery at Sam's Jewellery Box. Our store is like a magical treasure chest, filled with dazzling pieces that make 
                    you feel like a prince or princess! Each piece of jewellery at Sam's is made with love and care, just like a special present 
                    from a friend. Our talented designers use their creativity to make every necklace, bracelet, and ring look super pretty and 
                    unique. Whether you like sparkly gems that twinkle like fairy dust or shiny metals that glow like dragon scales, you'll find 
                    something you love in our collection. From birthdays to holidays, or just because you're awesome, our jewellery is perfect 
                    for any time you want to feel extra special. But that's not all! We also care about our planet and all the creatures that 
                    live on it. That's why we use magic – well, not real magic, but good choices and careful work – to make sure our jewellery 
                    is kind to nature too. So come on in and explore the enchanting world of Sam's Jewellery Box. Let your imagination sparkle 
                    and your heart shine as you find the perfect piece of magic to wear and cherish. Welcome to our world of beauty, fun, and 
                    endless possibilities!
                    </p>
                    <Link smooth to="/#contact" className="button-link">
                        <button className="BUTTON">Connect with me!</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutMe