import React, { useEffect } from 'react';
import Location from '../components/Location';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <div className="flex flex-col w-full">
                <PageHeader
                    title="Get in Touch"
                    subtitle="Your Journey Starts Here"
                    bgImage="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop"
                />
                <div className="pb-8">
                    <Location />
                </div>
            </div>
        </PageTransition>
    );
};

export default ContactPage;
