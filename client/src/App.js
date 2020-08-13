import React, { Suspense } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth";
// pages for this product
import Home from "./components/Home.js";
import DetailProductPage from "./components/DetailProductPage/DetailProductPage"
import LoginPage from "./components/LoginPage.js";
import RegisterPage from "./components/RegisterPage.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import UploadProductPage from './components/UploadProductPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Auth(Home, null)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/uploadproduct" component={Auth(UploadProductPage, true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
