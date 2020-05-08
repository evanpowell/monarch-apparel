import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import { auth, maybeCreateUserProfileDocument } from './firebase/firebase.utils';
import { userActions, userSelectors } from './redux/modules/user';

import './App.scss';

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
        const { currentUser } = this.props;
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route
                        path='/login'
                        render={() =>
                            currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <LoginPage />
                            )
                        }></Route>
                    <Route
                        path='/sign-up'
                        render={() =>
                            currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignUpPage />
                            )
                        }></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: userSelectors.selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(userActions.setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
