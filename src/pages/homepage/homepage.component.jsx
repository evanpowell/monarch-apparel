import React, { Component } from 'react';

import Directory from '../../components/directory/directory.component';

export class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <Directory />
            </div>
        )
    }
}

export default Homepage;
