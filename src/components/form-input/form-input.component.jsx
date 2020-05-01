import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, customClass, ...otherProps }) => {
    return (
        <div className="form-group">
            <input className={`form-input ${ customClass || ''}`} onChange={handleChange} {...otherProps}/>
            {
                label ?
                (<label htmlFor={otherProps.id}
                    className={`form-input-label ${
                        otherProps.value.length? 'shrink' : ''
                    }`}>
                    {label}
                </label>) :
                null
            }
        </div>
    )
}

export default FormInput;
