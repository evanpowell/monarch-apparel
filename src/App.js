import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import { auth, maybeCreateUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/modules/user';


export class App extends Component {
    unsubscribeFunctions = [];

    componentDidMount() {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            const { setCurrentUser } = this.props;

            if (!userAuth) {
                setCurrentUser(null);
                return;
            }

            const userRef = await maybeCreateUserProfileDocument(userAuth);

            const unsubscribeFromSnapshot = userRef.onSnapshot((snapShot) => {
                setCurrentUser({
                    id: snapShot.id,
                    ...snapShot.data()
                });
            });

            this.unsubscribeFunctions.push(unsubscribeFromSnapshot);
        });

        this.unsubscribeFunctions.push(unsubscribeFromAuth);
    }

    closeSubscriptions = () => {
        this.unsubscribeFunctions.forEach(unsubscribeFunction => {
            unsubscribeFunction();
        });
    }

    componentWillUnmount() {
        this.closeSubscriptions();
    }
    
    render() {
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
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
