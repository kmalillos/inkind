import React from "react";
import { Route, Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
    return (
        <>
            <footer className="sticky-footer bg-dark">
                <p className="bg-dark text-white text-center">
                    In-Kind Connections by Kaylah Malillos<br></br>
                    <a href="/github" target="_blank">GitHub Repo</a>
                    <Route path='/github'
                        component={() => { window.location = 'https://github.com/kmalillos/inkind'; return null; }} />
                    <span> | </span>
                    <a href="/porfolio" target="_blank">Portfolio</a>
                    <Route path='/porfolio'
                        component={() => { window.location = 'https://github.com/kmalillos/inkind'; return null; }} />
                </p>
            </footer>
        </>
    )
}

export default Footer;

