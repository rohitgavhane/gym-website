import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">

                {/* Title Area */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-[var(--color-brand-lime)] font-black text-xl">●</span>
                            <span className="font-bold tracking-[0.2em] text-sm uppercase">About Gymix</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black heading-font leading-tight text-black">
                            WE BELIEVE FITNESS ISN'T<br />
                            JUST ABOUT LIFTING WEIGHTS<br />
                            IT'S ABOUT BUILDING
                        </h2>
                    </motion.div>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Block: Image & Stats */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1769&auto=format&fit=crop"
                                alt="Gymnast stretching"
                                className="w-full max-w-[300px] h-[200px] object-cover rounded-md"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex items-start gap-4"
                        >
                            <h3 className="text-6xl font-black heading-font m-0 p-0 leading-none">15+</h3>
                            <div>
                                <p className="font-bold uppercase tracking-wider text-sm mt-1">Years of<br />Experience</p>
                            </div>
                        </motion.div>

                        <p className="text-gray-600 max-w-md font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 font-semibold">
                                <div className="w-5 h-5 flex items-center justify-center bg-black text-[var(--color-brand-lime)] rounded-sm">
                                    <Check size={14} />
                                </div>
                                Certified Trainers
                            </li>
                            <li className="flex items-center gap-3 font-semibold">
                                <div className="w-5 h-5 flex items-center justify-center bg-black text-[var(--color-brand-lime)] rounded-sm">
                                    <Check size={14} />
                                </div>
                                Modern Equipment
                            </li>
                            <li className="flex items-center gap-3 font-semibold">
                                <div className="w-5 h-5 flex items-center justify-center bg-black text-[var(--color-brand-lime)] rounded-sm">
                                    <Check size={14} />
                                </div>
                                Motivating Atmosphere
                            </li>
                        </ul>
                    </div>

                    {/* Right Block: Large Image */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-full w-full"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                                alt="Gym Setting"
                                className="w-full h-[550px] object-cover rounded-md shadow-2xl"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
