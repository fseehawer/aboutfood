import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-image-webp';
import './style.scss';

const Card = React.memo((props) => {
    return (
        <div className="card">
            <div className="card__image">
                <Image src={props.imageSrc} webp={props.imageWebpSrc} alt={props.title} />
            </div>
            <div className="card__content">
                <div className="card__headline">
                    <h2>{props.title}</h2>
                    <span className={`card__category card__category--${props.category.toLowerCase()}`}>{props.category}</span>
                </div>
                <div className="card__description">
                    {props.about}
                </div>
                <div className="card__more"><span className={`card__more--${props.category.toLowerCase()}`}>&raquo;</span> More info</div>
            </div>
        </div>
    );
});

Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageWebpSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
};

export default Card;
