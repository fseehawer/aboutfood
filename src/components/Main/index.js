import React, { useState, useEffect } from 'react';
import { TweenMax, Power4 } from 'gsap';
import './style.scss';
import Card from "../Card";
import Categories from "../Categories";

// get data
import data from '../../data';

const Main = React.memo(() => {
    const [tags, setTags] = useState([]);

    const filteredData = data.filter(item => {
        return tags.includes(item.tag)
    });

    const onFilterChange = (tag) => {
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
        return () => TweenMax.set('.card', { opacity: 0 });
    }, [tags]);

    return (
        <main className="main">
            <div className="main__filters">
                <Categories onChange={ onFilterChange } options={[
                    { name: 'Meat', color: '#e73c01', key: 1 },
                    { name: 'Vegetables', color: '#2b9030', key: 2 },
                    { name: 'Fruit', color: '#f39200', key: 3 },
                ]} />
            </div>
            <section>
                <div className="main__cards">
                    { renderCards() }
                </div>
            </section>
        </main>
    );
});

export default Main;
