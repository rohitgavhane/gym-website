import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Packages = () => {
    return (
        <section className="py-32 bg-[var(--color-brand-card)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-white font-black text-xl">●</span>
                            <span className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase">Pricing Plan</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black heading-font leading-tight text-white uppercase">
                            Exclusive Gym<br />Packages
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Basic Package (Slide in from Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
                        className="bg-black/80 backdrop-blur-lg border border-white/10 p-8 lg:p-12 relative overflow-hidden group hover:border-gray-500 transition-colors duration-500 rounded-3xl"
                    >
                        <h3 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-6">Basic Plan</h3>
                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-6xl font-black heading-font text-white">$65</span>
                            <span className="text-gray-500 font-medium pb-2">/ mo</span>
                        </div>

                        <Link to="/contact" className="block w-full text-center bg-transparent border border-white/20 rounded-full text-white font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors duration-300 mb-10">
                            Choose Plan
                        </Link>

                        <div className="space-y-4 text-gray-400 font-medium">
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-bold">✓</span> Access to gym equipment
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-bold">✓</span> Free fitness consultation
                            </p>
                            <p className="flex items-center gap-3 opacity-30">
                                <span>×</span> Personal training sessions
                            </p>
                            <p className="flex items-center gap-3 opacity-30">
                                <span>×</span> Diet plan included
                            </p>
                        </div>
                    </motion.div>

                    {/* Premium Package (Slide in from Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: 0.1 }}
                        className="bg-gradient-to-br from-gray-900 to-black border border-[var(--color-brand-lime)] p-8 lg:p-12 relative overflow-hidden shadow-[0_0_30px_rgba(214,255,0,0.1)] rounded-3xl"
                    >
                        <div className="absolute top-0 right-0 bg-[var(--color-brand-lime)] text-black text-xs font-black px-4 py-1 tracking-widest uppercase rounded-bl-xl">Popular</div>
                        <h3 className="text-[var(--color-brand-lime)] font-bold uppercase tracking-widest text-sm mb-6">Premium Plan</h3>
                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-6xl font-black heading-font text-white">$120</span>
                            <span className="text-gray-400 font-medium pb-2">/ mo</span>
                        </div>

                        <Link to="/contact" className="block w-full text-center bg-[var(--color-brand-lime)] rounded-full text-black font-bold uppercase tracking-widest py-4 hover:shadow-[0_0_20px_rgba(214,255,0,0.5)] hover:scale-[1.02] transition-all duration-300 mb-10">
                            Choose Plan
                        </Link>

                        <div className="space-y-4 text-white font-semibold">
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-black">✓</span> Access to gym equipment
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-black">✓</span> Free fitness consultation
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-black">✓</span> Personal training sessions
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-black">✓</span> Diet plan included
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Packages;
