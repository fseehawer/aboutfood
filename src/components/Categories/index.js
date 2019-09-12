import React, { Fragment } from 'react';
import './style.scss';
import PropTypes from "prop-types";
import Filter from "../Filter";

const Categories = React.memo((props) => {
    const filterChange = (name) => {
        props.onChange(name);
    };

    const renderFilters = () => {
        return (props.options.map((filter) => {
            return (<Filter key={filter.key} name={ filter.name } color={ filter.color } onChange={ filterChange } />)
        }))
    };

    return (
        <Fragment>
            <span className="filters__label">Filter:</span>
            { renderFilters() }
        </Fragment>
    );
});

Categories.propTypes = {
    options: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired,
    }))
};

export default Categories;
