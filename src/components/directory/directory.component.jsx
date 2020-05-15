import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { directorySelectors } from '../../redux/modules/directory';

import classes from './directory.module.scss';

const Directory = ({ sections }) => {
    return (
        <div className={classes[`directory-menu`]}>
            {sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: directorySelectors.selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
