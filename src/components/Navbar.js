import React from "react"
import Globe from "../images/globe.png"


export default function Navbar(){
    return(
        <nav className="nav">
            <img src={Globe} className="nav-img"></img>
            <h3 className="nav-title">my travel journel</h3>
        </nav>
    )
}