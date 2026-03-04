import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Packages = () => {
    return (
        <section className="py-32 bg-white overflow-hidden text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-[var(--color-brand-lime)] font-black text-xl">●</span>
                            <span className="text-gray-500 font-bold tracking-[0.2em] text-sm uppercase">Pricing Plan</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black heading-font leading-tight text-black uppercase">
                            Exclusive Gym<br />Packages
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

                    {/* Basic Package (Slide in from Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="bg-white border-2 border-black p-8 lg:p-12 relative overflow-hidden group hover:shadow-[10px_10px_0px_0px_rgba(214,255,0,1)] transition-all duration-300"
                    >
                        <h3 className="text-black font-black uppercase tracking-widest text-sm mb-6 pb-4 border-b-2 border-gray-100">Basic Plan</h3>
                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-6xl font-black heading-font text-black">$65</span>
                            <span className="text-gray-500 font-medium pb-2 uppercase tracking-widest text-xs">/ mo</span>
                        </div>

                        <Link to="/contact" className="block w-full text-center bg-black border-2 border-black text-white font-bold uppercase tracking-widest py-4 hover:bg-[var(--color-brand-lime)] hover:text-black transition-colors duration-300 mb-10">
                            Choose Plan
                        </Link>

                        <div className="space-y-4 text-gray-600 font-medium">
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-black">✓</span> Access to gym equipment
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-black">✓</span> Free fitness consultation
                            </p>
                            <p className="flex items-center gap-3 opacity-40">
                                <span className="text-gray-400 font-black">×</span> Personal training sessions
                            </p>
                            <p className="flex items-center gap-3 opacity-40">
                                <span className="text-gray-400 font-black">×</span> Diet plan included
                            </p>
                        </div>
                    </motion.div>

                    {/* Premium Package (Slide in from Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="bg-black text-white border-2 border-black p-8 lg:p-12 relative overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(214,255,0,1)] transition-all duration-300"
                    >
                        <div className="absolute top-6 right-6 bg-[var(--color-brand-lime)] text-black text-xs font-black px-4 py-1 tracking-widest uppercase">Popular</div>
                        <h3 className="text-[var(--color-brand-lime)] font-black uppercase tracking-widest text-sm mb-6 pb-4 border-b-2 border-white/10">Premium Plan</h3>
                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-6xl font-black heading-font text-white">$120</span>
                            <span className="text-gray-400 font-medium pb-2 uppercase tracking-widest text-xs">/ mo</span>
                        </div>

                        <Link to="/contact" className="block w-full text-center bg-[var(--color-brand-lime)] text-black font-black uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors duration-300 mb-10">
                            Choose Plan
                        </Link>

                        <div className="space-y-4 text-gray-300 font-medium">
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-black">✓</span> Access to gym equipment
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[var(--color-brand-lime)] font-black">✓</span> Free fitness consultation
                            </p>
                            <p className="flex items-center gap-3 text-white">
                                <span className="text-[var(--color-brand-lime)] font-black">✓</span> Personal training sessions
                            </p>
                            <p className="flex items-center gap-3 text-white">
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
