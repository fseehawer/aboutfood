import React, { useState } from 'react';
import './style.scss';
import PropTypes from "prop-types";

const Filter = (props) => {
    const [checked, setChecked] = useState(0);

    const onChange = () => {
        setChecked(!checked);
        props.onChange(props.name);
    };

    return (
        <label htmlFor={props.name} className="filter" style={{backgroundColor: props.color}}>
            <input type="checkbox" id={props.name} name={props.name} checked={checked} onChange={onChange}/>
            {props.name}
        </label>
    );
};

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Filter;
