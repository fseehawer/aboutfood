import React from 'react';
import './style.scss';
import PropTypes from "prop-types";

const Header = React.memo((props) => (
    <header className="header" style={{margin: props.margin}}>
        <div className="header__logo">about<span>food</span></div>
        <nav role="navigation">
            <input type="checkbox" />

            <span className="header__menu-line" />
            <span className="header__menu-line" />
            <span className="header__menu-line" />

            <ul className="header__nav">
                <li className="header__nav--active">Home</li>
                <li>About</li>
                <li>Meat</li>
                <li>Vegetables</li>
                <li>Fruit</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
));

Header.propTypes = {
    margin: PropTypes.string,
};

export default Header;
