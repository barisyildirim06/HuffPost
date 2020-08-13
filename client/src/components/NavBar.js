
import { Link } from "react-router-dom";
import logo from "../images/huffpost.png";
import { FaAlignJustify } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import React from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import { USER_SERVER } from './Config';
import { useSelector } from "react-redux";

function Navbar(props) {

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
    return (

        <nav className="navbar">
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
                            <Link onClick={logoutHandler}>Logout</Link>
                        </li>
                    </ul>}
            </div>
            <button
                type="button"
                className="nav-button"
            >
                <FaAlignJustify className="nav-icon" />
            </button>
            <button
                style={{ marginLeft: "20px" }}
                type="button"
                className="nav-button"
            >
                <FiSearch className="nav-icon" />
            </button>
            
            <div >
                <hr className="hide" />
                <ul className="nav-links">
                    <li>
                        <Link to="/">NEWS</Link>
                    </li>
                    <li>
                        <Link to="/">CORONAVIRUS</Link>
                    </li>
                    <li>
                        <Link to="/">POLITICS</Link>
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
