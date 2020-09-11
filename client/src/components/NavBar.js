import { Link } from "react-router-dom";
import logo from "../images/huffpost.png";
import logo2 from "../images/logo2.png"
import { FaAlignJustify } from "react-icons/fa";
import React, { useState } from 'react';
import SearchFeature from './utils/SearchFeature'
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import { USER_SERVER } from './Config';
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive'

function Navbar(props) {

    const [searchTerm, setSearchTerm] = useState("")

    const user = useSelector(state => state.user)
    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then(response => {
            if (response.status === 200) {
                props.history.push("/login");
            } else {
                alert('Log Out Failed')
            }
        });
    };
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
        query: '(max-width: 780px)'
    })


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && isComputer) {
            document.getElementById("navbar").style.top = "-41px";
            document.getElementById("navlogotohide").style.display = "flex";
        } else if (document.body.scrollTop <= 20 && document.documentElement.scrollTop <= 20 && isComputer) {
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("navlogotohide").style.display = "none";
        }
    }

    const updateSearchTerms = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)
    }

    return (
        <section>
            {isComputer ?
                <nav id="navbar">
                    <div className="nav-center">
                        <Link to="/">
                            <img src={logo} className="nav-logo" alt="HUFFPOST" />
                        </Link>
                    </div>
                    <div className="nav-login">
                        {user.userData && !user.userData.isAuth ? <ul className="nav-links">
                            <li>
                                <Link to="/login" >Signin</Link>
                            </li>
                            <li>
                                <Link to="/register">Signup</Link>
                            </li>
                        </ul>
                            :
                            <ul className="nav-links ">
                                <li>
                                    <Link to="/uploadpost">Upload Post</Link>
                                </li>
                                <li>
                                    <Link onClick={logoutHandler}>Logout</Link>
                                </li>
                            </ul>}
                    </div>
                    <SearchFeature
                        refreshFunction={updateSearchTerms}
                    />

                    <div >
                        <hr className="hide" />
                        <div id="navlogotohide"
                        >
                            <button
                                style={{ marginLeft: "25px", paddingTop: "5px" }}
                                type="button"
                                className="nav-button"
                            >
                                <FaAlignJustify className="nav-icon" />
                            </button>
                            <Link to="/" >
                                <img className="nav-logo2" style={{ marginLeft: "30px" }} src={isBigEnough ? logo : logo2} alt="HUFFPOST" />
                            </Link>
                        </div>
                        <ul className="nav-links center">
                            <li id="news">
                                <Link to="/news">NEWS</Link>
                            </li>
                            <li>
                                <Link to="/">CORONAVIRUS</Link>
                            </li>
                            <li>
                                <Link to="/news/politics">POLITICS</Link>
                            </li>
                            <li>
                                <Link to="/">ELECTIONS</Link>
                            </li>
                            <li>
                                <Link to="/">ENTERTAINMENT</Link>
                            </li>
                            <li>
                                <Link to="/">LIFE</Link>
                            </li>
                            <li>
                                <Link to="/">PERSONAL</Link>
                            </li>
                            <li>
                                <Link to="/">VIDEO</Link>
                            </li>
                            <li>
                                <Link to="/">SHOPPING</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                :
                isTablet ?
                    <nav id="navbar">
                        <div className="nav-center">
                            <Link to="/">
                                <img src={logo} className="nav-logo" alt="HUFFPOST" />
                            </Link>
                        </div>
                        <div className="nav-login">
                            {user.userData && !user.userData.isAuth ? <ul className="nav-links">
                                <li>
                                    <Link to="/login" >Signin</Link>
                                </li>
                                <li>
                                    <Link to="/register">Signup</Link>
                                </li>
                            </ul>
                                :
                                <ul className="nav-links ">
                                    <li>
                                        <Link to="/uploadpost">Upload Post</Link>
                                    </li>
                                    <li>
                                        <Link onClick={logoutHandler}>Logout</Link>
                                    </li>
                                </ul>}
                        </div>
                        <SearchFeature
                            refreshFunction={updateSearchTerms}
                        />
                    </nav>
                    :
                    <nav id="navbar">
                        <div className="nav-center">
                            <Link to="/">
                                <img src={logo} className="nav-logo" alt="HUFFPOST" />
                            </Link>
                        </div>
                        <div className="nav-login">
                            {user.userData && !user.userData.isAuth ? <ul className="nav-links">
                                <li>
                                    <Link to="/login" >Signin</Link>
                                </li>
                                <li>
                                    <Link to="/register">Signup</Link>
                                </li>
                            </ul>
                                :
                                <ul className="nav-links ">
                                    <li>
                                        <Link to="/uploadpost">Upload Post</Link>
                                    </li>
                                    <li>
                                        <Link onClick={logoutHandler}>Logout</Link>
                                    </li>
                                </ul>}
                        </div>
                        <button
                            style={{ marginLeft: "24px" }}
                            type="button"
                            className="nav-button"
                        >
                            <FaAlignJustify className="nav-icon" />
                        </button>
                    </nav>
            }
        </section>


    )
}


export default withRouter(Navbar);
