import React from 'react';
const Input = (props) => {
    return (
        <div className="form-group">
            <input
                type={props.type}
                name="username"
                onChange={props.onChange}
                value={props.value}
                className={props.className}
                placeholder={props.placeholder}
            />
        </div>
    );

}
export default Input;