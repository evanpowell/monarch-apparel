import React from 'react';

import classes from './form-input.module.scss';

const FormInput = ({ handleChange, label, customClass, ...otherProps }) => {
    return (
        <div className={classes[`form-group`]}>
            <input className={`
                    ${classes[`form-input`]} 
                    ${customClass ? classes[customClass] : ''}
                `}
                onChange={handleChange}
                {...otherProps}
            />
            {
                label ?
                (<label htmlFor={otherProps.id}
                    className={`
                        ${classes[`form-input-label`]} 
                        ${otherProps.value.length? classes['shrink'] : ''}`}
                    >
                    {label}
                </label>) :
                null
            }
        </div>
    )
}

export default FormInput;
