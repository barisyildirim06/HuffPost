import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/huffpost.png";

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <br />
                        <br />
                        <br />
                        <Link to="/">
                            <img src={logo} className="footer-logo" alt="HUFFPOST" />
                        </Link>
                    </div>
                    <div className="footer-column">
                        <ul className="footer-links">
                            <li>
                                <Link to="/">NEWS</Link>
                            </li>
                            <li>
                                <Link to="/">POLITICS</Link>
                            </li>
                            <li>
                                <Link to="/">ENTERTAINMENT</Link>
                            </li>
                            <li>
                                <Link to="/">LIFE</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul className="footer-links">
                            <li>
                                <Link to="/">COMMUNITIES</Link>
                            </li>
                            <li>
                                <Link to="/">HUFFPOST PERSONAL</Link>
                            </li>
                            <li>
                                <Link to="/">VIDEO</Link>
                            </li>
                            <li>
                                <Link to="/">NEWSLETTERS</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul className="footer-sublinks">
                            <li>
                                <Link to="/">HUFFPOST</Link>
                            </li>
                            <li>
                                <Link to="/">ABOUT US</Link>
                            </li>
                            <li>
                                <Link to="/">ADVERTISE</Link>
                            </li>
                            <li>
                                <Link to="/">ABOUT OUR ADS</Link>
                            </li>
                            <li>
                                <Link to="/">CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul className="footer-sublinks">
                            <li>
                                <Link to="/">RRS</Link>
                            </li>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/">CAREERS</Link>
                            </li>
                            <li>
                                <Link to="/">ARCHIVE</Link>
                            </li>
                            <li>
                                <Link to="/">USER AGREEMENT</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul className="footer-sublinks">
                            <li>
                                <Link to="/">PRIVACY POLICY</Link>
                            </li>
                            <li>
                                <Link to="/">COMMENT POLICY</Link>
                            </li>
                            <li>
                                <Link to="/">WRITER POLICY</Link>
                            </li>
                            <li>
                                <Link to="/">HUFFPOST PRESS ROOM</Link>
                            </li>
                            <li>
                                <Link to="/">COUPONS</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="footer2">
                <div className="footer-container">
                <hr/>
                <ul className="footer2-text">
                        <li>
                           Clone of HuffPost News which is coded by Barış Yıldırım
                        </li>
                        <li>
                           The Huffington Post
                        </li>
                        </ul>
                </div>
            </div>

        </div>

    )
}

export default Footer