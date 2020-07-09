import React from 'react';

import './FormInput.style.scss';

export const FormInput = ({onChange, label, ...otherProps}) => (
    <div className="group">
        <input 
            className="form-input" 
            {...otherProps}    
            onChange={onChange}
        />
        {
            label ? 
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
                : null
        }
    </div>
)