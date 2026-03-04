import React, { useEffect } from 'react';
import Team from '../components/Team';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';

const TrainersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <div className="flex flex-col w-full">
                <PageHeader
                    title="Expert Coaches"
                    subtitle="Guided by the Best"
                    bgImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                />
                <Team />
            </div>
        </PageTransition>
    );
};

export default TrainersPage;
