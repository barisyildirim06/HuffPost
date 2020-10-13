import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth";
// pages for this product
import Home from "./components/Home.js";
import News from "./components/News.js";
import SearchPage from "./components/SearchPage"
import Politics from './components/Politics.js';
import DetailProductPage from "./components/DetailProductPage"
import LoginPage from "./components/LoginPage.js";
import RegisterPage from "./components/RegisterPage.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UploadProductPage from './components/UploadProductPage';
import Coronavirus from './components/Coronavirus';
import SideNavBar from './components/SideNavBar';
import NotFound from './components/NotFound';
import Entertainment from './components/Entertainment';
import USNews from './components/USNews';
import WorldNews from './components/WorldNews';
import Life from './components/Life';
import Shopping from './components/Shopping';
import Impact from './components/Impact';
import Communities from './components/Communities';


//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0px"
  document.getElementById("navbar").style.paddingLeft = "0px"
  document.getElementById("marginLeft").style.paddingLeft = "0px"

}

function App() {
  return (
    <div id="marginLeft">
      <div id="marginLeft">
        <SideNavBar />
        <NavBar />
        <div onClick={closeNav}>
          <Switch>
            <Route exact path="/" component={Auth(Home, null)} />
            <Route exact path="/news" component={Auth(News, null)} />
            <Route exact path="/search/:searchTerms" component={Auth(SearchPage, null)} />
            <Route exact path="/news/politics" component={Auth(Politics, null)} />
            <Route exact path="/news/entertainment" component={Auth(Entertainment, null)} />
            <Route exact path="/news/u.s. news" component={Auth(USNews, null)} />
            <Route exact path="/news/world news" component={Auth(WorldNews, null)} />
            <Route exact path="/news/life" component={Auth(Life, null)} />
            <Route exact path="/news/shopping" component={Auth(Shopping, null)} />
            <Route exact path="/news/impact" component={Auth(Impact, null)} />
            <Route exact path="/news/communities" component={Auth(Communities, null)} />
            <Route exact path="/news/coronavirus" component={Auth(Coronavirus, null)} />
            <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
            <Route exact path="/uploadpost" component={Auth(UploadProductPage, true)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="*" component={Auth(NotFound, null)}/>
          </Switch>
        </div>
      </div>
      <Footer />
    </div>


  );
}

export default App;
