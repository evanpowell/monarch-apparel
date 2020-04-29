import React, { Component } from 'react';
import './home.styles.scss';

import Directory from '../../components/directory/directory.component';

export class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <Directory />
            </div>
        )
    }
}

export default HomePage;
