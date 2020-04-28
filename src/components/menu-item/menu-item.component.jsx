import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => {
    return (
        <div className={`menu-item ${size ? 'menu-item--' + size : ''}`}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            <div className="menu-item__content">
                <h1 className="menu-item__title">{title}</h1>
                <span className="menu-item__subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;
