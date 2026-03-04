import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Location = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', service: '', time: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Our team will contact you shortly.');
        setFormData({ name: '', phone: '', service: '', time: '' });
    };

    return (
        <React.Fragment>
            <section id="contact" className="py-32 bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Image (Slide in from Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="h-[300px] md:h-[600px] w-full group relative overflow-hidden rounded-2xl md:rounded-none"
                        >
                            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover md:grayscale transition-all duration-700 group-hover:scale-110 md:group-hover:grayscale-0" alt="Join King's" />
                            {/* Overlay shadow for depth */}
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                        </motion.div>

                        {/* Right Form (Slide in from Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-black p-4"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[var(--color-brand-lime)] font-black text-xl">●</span>
                                <span className="font-bold tracking-[0.2em] text-sm uppercase text-gray-400">Contact</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black heading-font leading-tight text-white uppercase mb-8 md:mb-10">
                                Have Question<br />Or Want To Join?
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full border-b border-gray-700 bg-transparent py-2 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand-lime)] transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full border-b border-gray-700 bg-transparent py-2 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand-lime)] transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full border-b border-gray-700 bg-transparent py-2 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand-lime)] transition-colors"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Interested In</label>
                                        <select className="w-full border-b border-gray-700 bg-black py-2 text-white focus:outline-none focus:border-[var(--color-brand-lime)] transition-colors cursor-pointer">
                                            <option>Personal Training</option>
                                            <option>Group Classes</option>
                                            <option>Open Gym</option>
                                            <option>Yoga & Mobility</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-[var(--color-brand-lime)] text-black font-black uppercase tracking-widest px-12 py-4 hover:shadow-[0_0_20px_rgba(214,255,0,0.5)] transition-all duration-300 mt-4 shadow-2xl rounded-full hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                    </div>
                </div>

                {/* CTA Banner Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-[var(--color-brand-card)] rounded-3xl p-6 md:p-10 lg:p-16 flex flex-col items-center justify-center text-center gap-8 relative shadow-2xl overflow-hidden border border-white/10"
                    >
                        {/* Background abstract texture */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] opacity-[0.05] grayscale object-cover mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="text-white font-black text-xl">●</span>
                                <span className="text-gray-400 font-bold tracking-[0.2em] text-xs uppercase">Join The Elite</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black heading-font text-white uppercase leading-tight mb-8">
                                Step Into Greatness<br />Today
                            </h2>

                            <div className="w-full max-w-md mx-auto relative group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/10 text-white placeholder-gray-400 font-semibold py-4 sm:py-5 pl-4 sm:pl-6 pr-24 sm:pr-36 focus:outline-none rounded-full border border-white/20 focus:border-[var(--color-brand-lime)] transition-colors text-sm sm:text-base"
                                />
                                <button className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 bg-[var(--color-brand-lime)] rounded-full text-black font-black uppercase text-[10px] sm:text-xs tracking-widest px-4 sm:px-8 hover:shadow-[0_0_15px_rgba(214,255,0,0.5)] transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Location;
