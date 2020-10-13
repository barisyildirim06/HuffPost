import React from 'react';
import { Link } from "react-router-dom";

function SideNavBar() {

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0px"
        document.getElementById("navbar").style.paddingLeft = "0px"
        document.getElementById("marginLeft").style.paddingLeft = "0px"

    }


    return (
        <div id="mySidenav" class="sidenav">
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <li class="closebtn" onClick={closeNav}>&times;</li>
                <hr />
                <li><Link to="/news/coronavirus" onClick={closeNav} className="sidenav-header">CORONAVIRUS</Link></li>
                <li ><Link to="/news" onClick={closeNav} className="sidenav-header">NEWS</Link></li>
                <div className="sidenav-main">
                <a href="/news/U.s. News" >U.S News</a>
                <a href="/search/Business" >Business</a>
                <a href="/search/Health" >Health</a>
                <a href="/search/World News" >World News</a>
                <a href="/search/Environment" >Environment</a>
                <a href="/search/Social Justice" >Social Justice</a>
                </div>
                <li ><Link to="/news/politics" onClick={closeNav} className="sidenav-header">POLITICS</Link></li>
                <div className="sidenav-main">
                <a href="/search/Congress" >Congress</a>
                <a href="/search/2020 Elections" >2020 Elections</a>
                <a href="/search/Donald Trump" >Donald Trump</a>
                <a href="/search/Extremism">Extremism</a>
                </div>
                <li ><Link to="/news/entertainment" onClick={closeNav} className="sidenav-header">ENTERTAINMENT</Link></li>
                <div className="sidenav-main">
                <a   href="/search/Culture & Arts">Culture & Arts</a>
                <a   href="/search/Celebrity">Celebrity</a>
                <a   href="/search/Media">Media</a>
                <a   href="/search/TV & Film">TV & Film</a>
                </div>
                <li ><Link to="/news/life" className="sidenav-header">LİFE</Link></li>
                <div className="sidenav-main">
                <a href="/search/Style & Beautyy">Style & Beauty</a>
                <a href="/search/parent" >Parenting</a>
                <a href="/search/finds" >Finds</a>
                <a href="/search/realationshpis" >Relationships</a>
                <a href="/search/Home & aving" >Home & aving</a>
                <a href="/search/Food & Drink" >Food & Drink</a>
                <a href="/search/travel">Travel</a>
                <a href="/search/wellness">Wellness </a>
                <a href="/search/money">Money </a>
                <a href="/search/worklife">Work/Life </a>
                </div>
                <li ><Link to="/news/communities" className="sidenav-header">COMMUNUTIES</Link></li>
                <div className="sidenav-main">
                <a href="/search/queer voices">Queer Voices </a>
                <a href="/search/Black Voices">Black Voices </a>
                <a href="/search/Aslan Voices">Aslan Voices </a>
                <a href="/search/Women">Women </a>
                <a href="/search/Latino Voices">Latino Voices </a>
                </div>
                <a className="sidenav-header" href="/search/Special Projects">SPECIAL PROJECTS</a>
                <div className="sidenav-main">
                <a href="/search/Together">In This Together </a>
                <a href="/search/Pride">Pride 2020 </a>
                <a href="/search/Impact">Impact: This New World </a>
                <a href="/search/America">Listen to America </a>
                <a href="/search/Latin Heritage">Latinx Heritage Month </a>
                <a href="/search/Work in progress">Work in Progress </a>
                <a href="/search/Highline">Highline </a>
                <a href="/search/Podcasts">Podcasts </a>
                </div>
                <a className="sidenav-header" href="/search/Huffpost Personal">HUFFPOST PERSONAL</a>
                <a className="sidenav-header" href="/search/video">VIDEO</a>
                <a className="sidenav-header" href="/search/horoscopes">HOROSCOPES</a>
                <a className="sidenav-header" href="/search/partners">FROM OUR PARTNERS</a>
                <div className="sidenav-main">
                <a  href="/search/Living Well, Delivered">Living Well, Delivered </a>
                <a  href="/search/Women's Work">Women's Work </a>
                <a  href="/search/What's Working:D & I ln">What's Working:D & I ln </a>
                <a  href="/search/Action">Action </a>
                <a  href="/search/Time to Act">Time to Act </a>
                <a  href="/search/Trending">#Trending </a>
                <li> </li>
                <li> </li>
                </div>
                <a className="sidenav-header" href="/search/Newsletters">NEWSLETTERS</a>
                <a className="sidenav-header" href="/search/coupons">COUPONS</a>
                <a className="sidenav-header" href="/search/international">INTERNATIONAL</a>
                <div className="sidenav-main">
                <a  href="/search/Australia">Australia </a>
                <a  href="/search/Canada">Canada </a>
                <a  href="/search/France">France </a>
                <a  href="/search/India">India </a>
                <a  href="/search/Japan">日本 (Japan) </a>
                <a  href="/search/Quebec">Quebec</a>
                <a  href="/search/U.S">U.S </a>
                <a  href="/search/Brazil">Brazil </a>
                <a  href="/search/Espana">Espana </a>
                <a  href="/search/Greece">Ελλάδα (Greece) </a>
                <a  href="/search/Italia">Italia </a>
                <a  href="/search/Korea">민국 (Korea) </a>
                <a  href="/search/U.K.">U.K. </a>
                <a  href="/search/Turkey">Turkey</a>
                </div>
                <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                <hr/>
                </div>
                <div style={{ paddingBottom: "20px"}}>
                    <li>Clone of HuffPost News which is coded by Barış Yıldırım</li>
                </div>
                
            </div>
        </div>
    )
}


export default SideNavBar;
