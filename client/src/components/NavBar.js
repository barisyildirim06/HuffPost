import { Link } from "react-router-dom";
import logo from "../images/huffpost.png";

import React, { useState } from 'react';
import SearchFeature from './utils/SearchFeature'
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import { USER_SERVER } from './Config';
import { useSelector } from "react-redux";

function Navbar(props) {

    const [SearchTerm, setSearchTerm] = useState("")
   
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

    

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "-43px";
            document.getElementById("nav-logo2").style.display = "flex";
        } else {
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("nav-logo2").style.display = "none";
        }
    }

    const updateSearchTerms = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)

    }

    return (
        <nav id="navbar">
            <div className="nav-center">
                <Link to="/">
                    <img src={logo} className="nav-logo" alt="HUFFPOST" />
                </Link>
            </div>
            <div className="nav-login">
                {user.userData && !user.userData.isAuth ? <ul className="nav-links">
                    <li>
                        <Link to="/login">Signin</Link>
                    </li>
                    <li>
                        <Link to="/register">Signup</Link>
                    </li>
                </ul>
                    :
                    <ul className="nav-links">
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
                <div className="navlogotohide">
                    <Link to="/">
                        <img src={logo} id="nav-logo2" alt="HUFFPOST" />
                    </Link>
                </div>
                <ul className="nav-links nav-links2">

                    <li>
                        <Link to="/news">NEWS</Link>
                    </li>
                    <li>
                        <Link to="/">CORONAVIRUS</Link>
                    </li>
                    <li>
                        <Link to="/news/politics">POLITICS</Link>
                    </li>
                    <li>
                        <Link to="/">2020 ELECTIONS</Link>
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
    )
}


export default withRouter(Navbar);
