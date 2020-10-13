import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import logo from "../images/huffpost.png";
import logo2 from "../images/logo2.png"
import { useMediaQuery } from 'react-responsive'

function Footer() {
    const isBigEnough = useMediaQuery({
        query: '(min-width: 1300px)'
    })

    const isComputer = useMediaQuery({
        query: '(min-width: 1000px)'
    })

    const isTablet = useMediaQuery({
        query: '(min-width: 780px)'
    })

    const isCellPhone = useMediaQuery({
        query: '(max-width: 779px)'
    })

    useEffect(() => {
        displayWindowSize()
    }, [])

    const logos = (isBigEnough || isCellPhone) ? logo : logo2;
    window.onresize = function () { displayWindowSize() }
    function displayWindowSize() {
        function resizeSublinks10() {
            var x = document.getElementsByClassName("footer-sublinks");
            for (var i = 0; i < x.length; i++) {
                x[i].style.fontSize = "10px";
            }
        };
        function resizeSublinks12() {
            var x = document.getElementsByClassName("footer-sublinks");
            for (var i = 0; i < x.length; i++) {
                x[i].style.fontSize = "11px";
            }
        };
        function resizeLinks10() {
            var x = document.getElementsByClassName("footer-links");
            for (var i = 0; i < x.length; i++) {
                x[i].style.fontSize = "10px";
            }
        };
        function resizeLinks12() {
            var x = document.getElementsByClassName("footer-links");
            for (var i = 0; i < x.length; i++) {
                x[i].style.fontSize = "12px";
            }
        };
        if (isBigEnough) {
            document.getElementById("footer-column").style.gridTemplateColumns = "18% 16.66% 16.66% 16.66% 16.66% 16.66%";
            document.getElementById("footer-logo").style.height = "24px"
            document.getElementById("footer-column").style.gridTemplateAreas = '"item1 item2" "item3  item4" "item5  item6"'
            resizeLinks12()
            resizeSublinks12()
        } else if (isComputer) {
            document.getElementById("footer-column").style.gridTemplateColumns = "4% 15% 20% 20% 20% 20%";
            document.getElementById("footer-logo").style.height = "28px"
            document.getElementById("footer-column").style.gridTemplateAreas = '"item1 item2" "item3  item4" "item5  item6"'
            resizeLinks12()
            resizeSublinks12()
        } else if (isTablet) {
            document.getElementById("footer-column").style.gridTemplateColumns = "4% 15% 20% 20% 20% 20%";
            document.getElementById("footer-logo").style.height = "28px"
            document.getElementById("footer-column").style.gridTemplateAreas = '"item1 item2" "item3  item4" "item5  item6"'
            resizeLinks10()
            resizeSublinks10()
        } else {
            document.getElementById("footer-column").style.gridTemplateColumns = "50% 50%";
            document.getElementById("footer-column").style.gridTemplateRows = "15% 40% 45%";
            document.getElementById("footer-column").style.gridTemplateAreas = '"item1 item1" "item2  item3" "item4  item5"'
            document.getElementById("footer-logo").style.height = "24px"
            resizeLinks12()
            resizeSublinks12()
        }

    }

    return (
        <div>
            <div className="footer">
                <div className="footer-container ">
                    <div id="footer-column">
                        <div className="footer-links item1">
                            {isBigEnough ? <div><br /><br /></div> : null}
                            <Link to="/">
                                <img src={logos} id="footer-logo" alt="HUFFPOST" />
                            </Link>
                        </div>
                        <div >
                            <ul className="footer-links item2">
                                <li>
                                    <Link to="/news">NEWS</Link>
                                </li>
                                <li>
                                    <Link to="/news/politics">POLITICS</Link>
                                </li>
                                <li>
                                    <Link to="/news/entertainment">ENTERTAINMENT</Link>
                                </li>
                                <li>
                                    <Link to="/news/life">LIFE</Link>
                                </li>
                            </ul>
                        </div>
                        <div >
                            <ul className="footer-links item3">
                                <li>
                                    <Link to="/news/communities">COMMUNITIES</Link>
                                </li>
                                <a href="/search/Huffpost Personal">
                                    HUFFPOST PERSONAL
                                </a>
                                <a href="/search/video">
                                    VIDEO
                                </a>
                                <a href="/search/Newsletters">
                                   NEWSLETTERS
                                </a>
                            </ul>
                        </div>
                        {isTablet ? <div >
                            <ul className="footer-sublinks item4">
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
                        </div> :
                            <div >
                                <ul className="footer-sublinks item4">
                                    <li>
                                        <Link to="/">HUFFPOST</Link>
                                    </li>
                                    <li>
                                        <Link to="/">ADVERTISE</Link>
                                    </li>
                                    <li>
                                        <Link to="/">CONTACT US</Link>
                                    </li>
                                    <li>
                                        <Link to="/">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/">ARCHIVE</Link>
                                    </li>
                                    <li>
                                        <Link to="/">PRIVACY POLICY</Link>
                                    </li>
                                    <li>
                                        <Link to="/">HUFFPOST PRESS ROOM</Link>
                                    </li>
                                </ul>
                            </div>}
                        {isTablet ?
                            <div >
                                <ul className="footer-sublinks item5">
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
                            </div> :
                            <div >
                                <ul className="footer-sublinks item5">
                                    <li>
                                        <Link to="/">ABOUT US</Link>
                                    </li>
                                    <li>
                                        <Link to="/">ABOUT OUR ADS</Link>
                                    </li>
                                    <li>
                                        <Link to="/">RSS</Link>
                                    </li>
                                    <li>
                                        <Link to="/">CAREERS</Link>
                                    </li>
                                    <li>
                                        <Link to="/">USER AGREEMENT</Link>
                                    </li>
                                    <li>
                                        <Link to="/">COMMENT POLICY</Link>
                                    </li>
                                    <li>
                                        <Link to="/">COUPONS</Link>
                                    </li>
                                </ul>
                            </div>}

                        {isTablet ? <div >
                            <ul className="footer-sublinks item6">
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
                        </div> : null}


                    </div>
                </div>
                <div className="footer2">
                    <div className="footer-container">
                        <hr />
                        {isTablet ?
                            <ul className="footer2-text">
                                <li>
                                    Clone of HuffPost News which is coded by Barış Yıldırım
                                </li>
                                <li>
                                    The Huffington Post
                                 </li>
                            </ul> :
                            <ul className="footer2-text2">
                            <li>
                                Clone of HuffPost News which is coded by Barış Yıldırım
                            </li>
                            <li>
                                The Huffington Post
                             </li>
                        </ul>}

                    </div>
                </div>

            </div>

        </div>

    )
}

export default Footer