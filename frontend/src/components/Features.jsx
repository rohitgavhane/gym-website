import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Dumbbell, Zap } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" className="py-24 bg-black relative border-t border-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Array */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-white font-black text-xl">●</span>
                            <span className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase">Strength / Power</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black heading-font leading-tight text-white uppercase">
                            Where Strength <br />
                            Meets Power
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    >
                        <Link to="/pricing" className="bg-white text-black font-bold uppercase tracking-wider px-8 py-3 rounded-full hover:bg-gray-300 transition-colors duration-300 flex items-center gap-2">
                            Explore Plans
                        </Link>
                    </motion.div>
                </div>

                {/* Grid Layout with Dramatic Side-In Sweeps */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Top Left Card (Slide from Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-5 bg-[var(--color-brand-card)] p-8 flex flex-col justify-end min-h-[300px] border border-gray-800 hover:border-white transition-colors duration-500"
                    >
                        <Zap className="text-white mb-auto" size={32} />
                        <h3 className="text-2xl font-black heading-font text-white uppercase mb-2">Personalized Training</h3>
                        <p className="text-gray-400 font-medium">Get customized workout routines tailored to your specific goals and body type by our expert trainers.</p>
                    </motion.div>

                    {/* Top Middle Card (Fade Up) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-3 bg-[var(--color-brand-card)] p-8 border border-gray-800 hover:border-white transition-colors duration-500"
                    >
                        <Activity className="text-white mb-6" size={32} />
                        <h3 className="text-xl font-black heading-font text-white uppercase mb-2">Diet Plan</h3>
                        <p className="text-gray-400 font-medium text-sm">Comprehensive nutrition guidance to fuel your body and maximize your gym potential.</p>
                    </motion.div>

                    {/* Right Large Image (Slide from Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-4 md:row-span-2 relative overflow-hidden group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
                            alt="Gym Motivation"
                            className="w-full h-full object-cover min-h-[300px] grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                    </motion.div>

                    {/* Bottom Left Card (Slide from Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-4 bg-[var(--color-brand-card)] p-8 border border-gray-800 hover:border-white transition-colors duration-500"
                    >
                        <Dumbbell className="text-white mb-6" size={32} />
                        <h3 className="text-xl font-black heading-font text-white uppercase mb-2">Crossfit Setup</h3>
                        <p className="text-gray-400 font-medium text-sm">High-intensity interval training zones fully equipped with the latest gear.</p>
                    </motion.div>

                    {/* Bottom Middle Card (Fade Up) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-4 bg-[var(--color-brand-card)] p-8 border border-gray-800 hover:border-white transition-colors duration-500"
                    >
                        <h3 className="text-xl font-black heading-font text-white uppercase mb-2 pt-[56px]">Flexibility</h3>
                        <p className="text-gray-400 font-medium text-sm">Dedicated spaces for stretching, mobility work, and yoga sessions.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Features;
