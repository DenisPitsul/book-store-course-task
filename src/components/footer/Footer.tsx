import React, { FunctionComponent } from "react";
import './Footer.css'

const Footer: FunctionComponent = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <a className="footer-link" href="https://prometheus.org.ua/" rel="noreferrer" target="_blank">
                        Виконано в Prometheus © 2023
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;