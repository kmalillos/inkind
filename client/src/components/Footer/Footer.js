import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
    return (
        <>
            <footer className="sticky-footer bg-dark">
                <p className="bg-dark text-white text-center">
                    In-Kind Connections by Kaylah Malillos<br></br>
                    <Link to="https://github.com/kmalillos/inkind" target="_blank">GitHub Repo</Link>
                    <span> | </span>
                    <Link to="https://kmalillos.github.io/" target="_blank">Portfolio</Link>
                 </p>
            </footer>
        </>
    )
}

export default Footer;

