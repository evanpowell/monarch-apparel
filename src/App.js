import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/shop' component={ShopPage}></Route>
                <Route path='/login' component={LoginPage}></Route>
                <Route path='/sign-up' component={SignUpPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
