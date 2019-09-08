import React from 'react';
import './style.scss';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={props.imageSrc} alt={props.title} />
            </div>
            <div className="card__content">
                <div className="card__headline">
                    <h2>{props.title}</h2>
                    <span className={`card__tag card__tag--${props.tag.toLowerCase()}`}>{props.tag}</span>
                </div>
                <div className="card__description">
                    {props.about}
                </div>
                <div className="card__more"><span className={`card__more--${props.tag.toLowerCase()}`}>&raquo;</span> More info</div>
            </div>
        </div>
    );
};

export default Card;
