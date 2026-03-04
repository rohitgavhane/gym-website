import React, { useEffect } from 'react';
import About from '../components/About';
import Facilities from '../components/Facilities';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <div className="flex flex-col w-full">
                <PageHeader
                    title="Our Legacy"
                    subtitle="Forged in Iron"
                    bgImage="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop"
                />
                <About />
                <Facilities />
            </div>
        </PageTransition>
    );
};

export default AboutPage;
