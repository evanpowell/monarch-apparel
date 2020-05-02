import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import { auth } from './firebase/firebase.utils';


export class App extends Component {
    constructor() {
        super()
    
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({
                currentUser: user
            });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route path='/login' component={LoginPage}></Route>
                    <Route path='/sign-up' component={SignUpPage}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;
