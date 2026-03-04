import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        name: "Marcus Cole",
        role: "Head Coach",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop"
    },
    {
        name: "Elena Rostova",
        role: "Yoga & Mobility",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop"
    },
    {
        name: "Julian Smith",
        role: "Strength Training",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop"
    },
    {
        name: "Sarah Jenkins",
        role: "HIIT Specialist",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop"
    },
    {
        name: "Tyson Fury",
        role: "Boxing Coach",
        image: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1374&auto=format&fit=crop"
    },
    {
        name: "Saddie Sink",
        role: "Pilates Instructor",
        image: "https://images.unsplash.com/photo-1518611507436-f9221403cca2?q=80&w=1470&auto=format&fit=crop"
    }
];

const Team = () => {
    const targetRef = useRef(null);

    // Create a horizontal scrolling effect bound to vertical scroll
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Map vertical scroll progress (0 to 1) to horizontal translation
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} id="trainers" className="h-[200vh] bg-black relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden py-24">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-end gap-6"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-white font-black text-xl">●</span>
                                <span className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase">Trainers</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black heading-font leading-tight text-white uppercase">
                                Meet Our Expert<br />Team Member
                            </h2>
                        </div>
                        <div>
                            <Link to="/trainers" className="bg-white text-black font-bold uppercase tracking-wider px-8 py-3 rounded-full hover:bg-gray-300 transition-colors duration-300 flex items-center gap-2">
                                View All →
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="w-full pl-4 sm:pl-6 lg:pl-16">
                    <motion.div
                        style={{ x }}
                        className="flex gap-8 w-[200vw] lg:w-[150vw]"
                    >
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden w-[80vw] sm:w-[50vw] md:w-[400px] h-[500px] flex-shrink-0"
                            >
                                <div className="h-full w-full">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover md:grayscale transition-transform duration-700 group-hover:scale-110 md:group-hover:grayscale-0"
                                    />
                                </div>

                                {/* White Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                                    <h4 className="text-black font-black heading-font uppercase text-2xl mb-1">{member.name}</h4>
                                    <div className="w-8 h-[2px] bg-black mb-2"></div>
                                    <p className="text-gray-600 font-bold text-xs uppercase tracking-widest">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Team;
