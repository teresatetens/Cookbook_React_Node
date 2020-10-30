import React from "react";
import "./AboutUs.css"

function AboutUs() {
    return(
        <div className="container">
           <h1 className="madeBy"> Made by </h1>
           <a className="contact" href="https://www.linkedin.com/in/yodit-gebreheneras-033713168/">Yodit</a>
           <img className="profil" src="http://localhost:7070/images/avatar.png" alt="yodit"/>
           <a className="contact" href="https://www.linkedin.com/in/teresatetens/">Teresa</a>
           <img className="profil" src="http://localhost:7070/images/avatar.png" alt="teresa" />
           <a className="contact" href="https://www.linkedin.com/in/rosmalina-abrell-98122511a/">Rosmalina</a>
           <img className="profil" src="http://localhost:7070/images/avatar.png" alt="rosmalina"/>
        </div>
    )
}

export default AboutUs;