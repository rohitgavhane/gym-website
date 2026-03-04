import React, { useEffect } from 'react';
import Packages from '../components/Packages';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';

const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <div className="flex flex-col w-full">
                <PageHeader
                    title="Memberships"
                    subtitle="Commit to Greatness"
                    bgImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop"
                />
                <div className="pb-24">
                    <Packages />
                </div>
            </div>
        </PageTransition>
    );
};

export default PricingPage;
