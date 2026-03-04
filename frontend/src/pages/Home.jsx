import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Facilities from '../components/Facilities';
import Packages from '../components/Packages';
import Reviews from '../components/Reviews';
import Team from '../components/Team';
import Location from '../components/Location';
import PageTransition from '../components/PageTransition';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <div className="flex flex-col w-full relative">
                <Hero />
                <About />
                <Features />
                <Facilities />
                <Team />
                <Packages />
                <Reviews />
                <Location />
            </div>
        </PageTransition>
    );
};

export default Home;
