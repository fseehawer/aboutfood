import React, { Fragment, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTag } from "../../actions";
import './style.scss';
import PropTypes from "prop-types";
import Filter from "../Filter";

const Categories = React.memo((props) => {
    const { tags } = useSelector(state => ({
        tags: state.tags
    }));

    const dispatch = useDispatch();

    const onFilterChange = useCallback(
        (tag) => dispatch(changeTag(tag)),
        [dispatch]
    );

    const renderFilters = () => {
        return (props.options.map((filter) => {
            return (<Filter key={filter.key.toString()} name={ filter.name } checked={ tags.includes(filter.name) } color={ filter.color } onChange={ onFilterChange } />)
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
        key: PropTypes.string.isRequired,
    }))
};

export default Categories;
