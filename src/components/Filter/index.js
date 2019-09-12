import React, { useState } from 'react';
import './style.scss';
import PropTypes from "prop-types";

const Filter = React.memo((props) => {
    const [checked, setChecked] = useState(0);

    const onCheckboxChange = () => {
        setChecked(!checked);
        props.onChange(props.name);
    };

    return (
        <label htmlFor={props.name} className="filter" style={{backgroundColor: props.color}}>
            <input aria-label={props.name} type="checkbox" id={props.name} name={props.name} checked={checked} onChange={onCheckboxChange}/>
            {props.name}
        </label>
    );
});

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Filter;
