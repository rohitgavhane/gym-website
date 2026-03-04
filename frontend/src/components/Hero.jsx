import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame, Heart, Droplet, Activity } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[900px] flex flex-col justify-between overflow-hidden bg-black pt-24 pb-12">

            {/* Base Background */}
            <div className="absolute inset-0 z-0 bg-black"></div>

            {/* Background Text (Behind Image) */}
            <div className="absolute inset-0 z-[5] flex flex-col justify-center items-center text-center overflow-hidden">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
                    <h2 className="text-4xl sm:text-7xl lg:text-[140px] font-black text-white/10 tracking-widest mb-2 sm:mb-4 uppercase whitespace-nowrap mt-[-80px] sm:mt-[-100px]">
                        Push Beyond Limits
                    </h2>
                    <h2 className="text-4xl sm:text-7xl lg:text-[140px] font-black text-white/10 tracking-widest uppercase whitespace-nowrap">
                        Achieve Goals
                    </h2>
                </motion.div>
            </div>

            {/* Background Image layer (Above text) */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden flex justify-center items-end">
                <motion.img
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
                    src="/hero%20image.png"
                    alt="Man doing pushups"
                    className="w-full h-full object-cover object-bottom opacity-60 grayscale drop-shadow-2xl"
                />
            </div>

            {/* Gradients */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none"></div>

            {/* Subtle floating particles (Modern background animation) */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-[var(--color-brand-lime)] rounded-full opacity-20"
                        style={{
                            width: Math.random() * 4 + 1 + 'px',
                            height: Math.random() * 4 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, -Math.random() * 100 - 50],
                            opacity: [0, 0.4, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: Math.random() * 5 + 5,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Main Center Content */}
            <div className="relative z-30 flex-grow flex flex-col justify-center items-center text-center mt-32">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="px-4">
                    <h1 className="text-5xl sm:text-7xl lg:text-[130px] font-black heading-font text-[var(--color-brand-lime)] uppercase tracking-tighter drop-shadow-[0_0_30px_rgba(214,255,0,0.3)] leading-none">
                        King's Fitness
                    </h1>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
                >
                    <Link to="/contact" className="bg-[var(--color-brand-lime)] text-black px-12 py-5 font-black uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(214,255,0,0.4)]">
                        Begin Journey
                    </Link>
                    <Link to="/about" className="bg-transparent border border-white text-white px-12 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-white/10 hover:scale-105">
                        Discover King's
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Stats Bar */}
            <motion.div
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-30 w-full max-w-5xl mx-auto px-4 mt-auto mb-8"
            >
                <div className="grid grid-cols-2 lg:flex lg:justify-between items-center py-6 md:py-8 relative gap-y-6 lg:gap-0">
                    {/* Decorative brackets */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-full border-l-[1px] border-y-[1px] border-[var(--color-brand-lime)] border-r-0 opacity-80 hidden lg:block"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-full border-r-[1px] border-y-[1px] border-[var(--color-brand-lime)] border-l-0 opacity-80 hidden lg:block"></div>

                    <div className="flex flex-col items-center px-2 sm:px-4 md:px-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-500 heading-font mb-1 sm:mb-2">20+</span>
                        <span className="text-[var(--color-brand-lime)] text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">Our Trainers</span>
                    </div>
                    <div className="flex flex-col items-center px-2 sm:px-4 md:px-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-500 heading-font mb-1 sm:mb-2">700+</span>
                        <span className="text-[var(--color-brand-lime)] text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">Fitness Members</span>
                    </div>
                    <div className="flex flex-col items-center px-2 sm:px-4 md:px-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-500 heading-font mb-1 sm:mb-2">30</span>
                        <span className="text-[var(--color-brand-lime)] text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">Monthly Class</span>
                    </div>
                    <div className="flex flex-col items-center px-2 sm:px-4 md:px-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-500 heading-font mb-1 sm:mb-2">100%</span>
                        <span className="text-[var(--color-brand-lime)] text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">Satisfaction</span>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Hero;
