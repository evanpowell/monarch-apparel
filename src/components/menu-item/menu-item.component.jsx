import React from 'react';
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl}) => {
    return (
        <div className={`menu-item ${size ? 'menu-item--' + size : ''}`}
            onClick={() => history.push(linkUrl)}>
            <div className="menu-item--background"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}></div>
            <div className="menu-item__content">
                <h1 className="menu-item__title">{title}</h1>
                <span className="menu-item__subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
