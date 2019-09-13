import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TweenMax, Power4 } from 'gsap';
import './style.scss';
import Card from "../Card";
import Categories from "../Categories";

// get data
import data from '../../data';

const Main = React.memo(() => {
    const { categories } = useSelector(state => ({
        categories: state.categories
    }));

    const filteredData = data.filter(item => {
        return categories.includes(item.category)
    });

    const renderCards = () => {
        return (categories.length ? filteredData : data).map(item => {
            return (
                <Card
                    key={item.id}
                    category={item.category}
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
    }, [categories]);

    return (
        <main className="main">
            <div className="main__filters">
                <Categories options={[
                    { name: 'Meat', color: '#e73c01', key: '1' },
                    { name: 'Vegetables', color: '#2b9030', key: '2' },
                    { name: 'Fruit', color: '#f39200', key: '3' },
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
