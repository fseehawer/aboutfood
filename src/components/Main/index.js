import React, { useState, useEffect } from 'react';
import { TweenMax, Power4 } from 'gsap';
import './style.scss';
import Filter from '../Filter';
import Card from "../Card";

// get data
import data from '../../data';

const Main = () => {
    const [tags, setTags] = useState([]);

    const filteredData = data.filter(item => {
        return tags.includes(item.tag)
    });

    const filterChange = (tag) => {
        if(tags.includes(tag)) {
            setTags(tags.filter(t => tag !== t));
            return;
        }

        setTags([...tags, tag]);
    };

    const renderCards = () => {
        return (tags.length ? filteredData : data).map(item => {
            return (
                <Card
                    key={item.id}
                    tag={item.tag}
                    imageSrc={item.imageSrc}
                    imageWebpSrc={item.imageWebpSrc}
                    title={item.title}
                    about={item.about}
                    description={item.description}
                />
           )
        });
    };

    useEffect(() => {
        TweenMax.staggerFromTo('.card', 0.4,
            { opacity: 0, y: 100, scale: 0.8},
            { opacity: 1, y: 0, scale: 1, ease: Power4.easeOut }, 0.05);
        return () => TweenMax.set('.card', {opacity:1});
    }, [tags]);

    return (
        <main className="main">
            <div className="main__filters">
                <span className="filters__label">Filter:</span>
                <Filter name="Meat" color="#e73c01" onChange={filterChange} />
                <Filter name="Vegetables" color="#2b9030" onChange={filterChange} />
                <Filter name="Fruit" color="#f39200" onChange={filterChange} />
            </div>
            <section>
                <div className="main__cards">
                    { renderCards() }
                </div>
            </section>
        </main>
    );
};

export default Main;
