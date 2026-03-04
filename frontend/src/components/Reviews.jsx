import React from 'react';
import { motion } from 'framer-motion';

const Reviews = () => {
    return (
        <section id="reviews" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-black font-black text-xl">●</span>
                            <span className="font-bold tracking-[0.2em] text-sm uppercase text-gray-500">Testimonials</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black heading-font leading-tight text-black uppercase">
                            Fitness Journeys<br />That Motivate
                        </h2>
                    </motion.div>
                </div>

                {/* Bento Grid Layout - B&W Side-in animations */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-rows-[auto]">

                    {/* Box 1: Image Left (Slide Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-4 h-64 md:h-auto overflow-hidden group rounded-2xl"
                    >
                        <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="Fitness" />
                    </motion.div>

                    {/* Box 2: White Highlight Review (Fade Up) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-4 bg-gray-100 p-10 flex flex-col justify-between min-h-[300px] border border-transparent rounded-2xl group hover:border-[var(--color-brand-lime)] hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="text-[var(--color-brand-lime)] font-black text-6xl opacity-20 group-hover:opacity-100 heading-font leading-none transition-opacity duration-500">"</div>
                        <p className="text-black font-bold text-lg leading-relaxed mt-[-20px] mb-8">
                            IT'S AMAZING TO SEE THE RESULTS IN SUCH A SHORT TIME! THE KING'S TEAM REALLY KNOWS HOW TO PUSH YOU TO YOUR LIMITS.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[var(--color-brand-lime)] transition-colors duration-500">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="User" />
                            </div>
                            <div>
                                <h4 className="font-black text-black uppercase text-sm">Sarah Jenkins</h4>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Member</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Box 3: Image Right (Slide Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-4 h-64 md:h-auto overflow-hidden group rounded-2xl"
                    >
                        <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="Sprint" />
                    </motion.div>

                    {/* Box 4: Dark Review Left (Slide Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-4 bg-black p-10 flex flex-col justify-between min-h-[300px] border border-white/5 rounded-2xl group hover:border-[var(--color-brand-lime)] hover:shadow-[0_0_20px_rgba(214,255,0,0.1)] transition-all duration-500"
                    >
                        <div className="text-[var(--color-brand-lime)] font-black text-6xl opacity-30 group-hover:opacity-100 heading-font leading-none transition-opacity duration-500">"</div>
                        <p className="text-gray-300 font-medium text-sm leading-relaxed mt-[-20px] mb-8 group-hover:text-white transition-colors duration-500">
                            The trainers here are exceptional. I've never felt more motivated to wake up and hit the gym at 5 AM. Absolute game changer.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[var(--color-brand-lime)] transition-colors duration-500">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="User" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white uppercase text-sm">David Chen</h4>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Member</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Box 5: Image Bottom Middle (Fade Up) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-4 h-64 md:h-auto overflow-hidden group rounded-2xl"
                    >
                        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="Weights" />
                    </motion.div>

                    {/* Box 6: Dark Review Right (Slide Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="md:col-span-4 bg-black p-10 flex flex-col justify-between min-h-[300px] border border-white/5 rounded-2xl group hover:border-[var(--color-brand-lime)] hover:shadow-[0_0_20px_rgba(214,255,0,0.1)] transition-all duration-500"
                    >
                        <div className="text-[var(--color-brand-lime)] font-black text-6xl opacity-30 group-hover:opacity-100 heading-font leading-none transition-opacity duration-500">"</div>
                        <p className="text-gray-300 font-medium text-sm leading-relaxed mt-[-20px] mb-8 group-hover:text-white transition-colors duration-500">
                            Clean equipment, amazing classes, and a community that actually supports you. I finally reached my target weight here.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[var(--color-brand-lime)] transition-colors duration-500">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="User" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white uppercase text-sm">Alicia Reyes</h4>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Member</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Reviews;
