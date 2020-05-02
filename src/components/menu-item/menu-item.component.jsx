import React from 'react';
import { withRouter } from 'react-router-dom'
import classes from './menu-item.module.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl}) => {
    return (
        <div className={`${classes[`menu-item`]} ${size ? classes[`menu-item--${size}`] : ''}`}
            onClick={() => history.push(linkUrl)}>
            <div className={classes[`menu-item--background`]}
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}></div>
            <div className={classes[`menu-item__content`]}>
                <h1 className={classes[`menu-item__title`]}>{title}</h1>
                <span className={classes[`menu-item__subtitle`]}>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
