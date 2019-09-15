import React  from 'react';
import './style.scss';
import PropTypes from "prop-types";

const Filter = React.memo((props) => {
    const onCheckboxChange = () => {
        props.onChange(props.name);
    };

    return (
        <label htmlFor={props.name} className="filter" style={{backgroundColor: props.color}}>
            <input
                type="checkbox"
                aria-label={props.name}
                id={props.name}
                name={props.name}
                checked={props.checked}
                onChange={onCheckboxChange}
            />
            {props.name}
        </label>
    );
});

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Filter;
