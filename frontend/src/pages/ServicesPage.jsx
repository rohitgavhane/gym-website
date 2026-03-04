import React, { useEffect } from 'react';
import Features from '../components/Features';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <div className="flex flex-col w-full">
                <PageHeader
                    title="Elite Services"
                    subtitle="Train Like a Pro"
                    bgImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
                />
                <Features />
            </div>
        </PageTransition>
    );
};

export default ServicesPage;
