import React, { Component } from 'react';

import classes from './home.module.scss';

import Directory from '../../components/directory/directory.component';

export class HomePage extends Component {
    render() {
        return (
            <div className={classes[`homepage`]}>
                <Directory />
            </div>
        )
    }
}

export default HomePage;
