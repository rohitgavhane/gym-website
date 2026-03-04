import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const Facilities = () => {

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imgParallax1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const imgParallax2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    const videoRef = useRef(null);
    const isVideoInView = useInView(videoRef, { margin: "-100px" });

    useEffect(() => {
        if (isVideoInView && videoRef.current) {
            videoRef.current.play().catch(e => console.log("Video auto-play blocked", e));
        } else if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [isVideoInView]);

    return (
        <React.Fragment>
            {/* SECTION 1: TRANSFORMING LIVES (Stats) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Slide in from left */}
                        <motion.div
                            initial={{ opacity: 0, x: -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <motion.div animate={{ y: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}>
                                <video
                                    ref={videoRef}
                                    src="/Gym_Promotional_Video_Cinematic_Workout_Advertisment_1080p.mp4"
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 rounded-[2rem] border border-[var(--color-brand-lime)]/30 relative z-10"
                                />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                className="absolute -top-10 -left-10 w-32 h-32 border-[2px] border-dashed border-[var(--color-brand-lime)] rounded-full opacity-40 pointer-events-none z-0"
                            />
                        </motion.div>

                        {/* Slide in from right */}
                        <motion.div
                            initial={{ opacity: 0, x: 150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-black font-black text-xl">●</span>
                                <span className="font-bold tracking-[0.2em] text-sm uppercase text-gray-500">Transforming</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black heading-font leading-tight text-black uppercase mb-8">
                                Transforming Lives Through Fitness
                            </h2>
                            <p className="text-gray-600 font-medium max-w-lg mb-12">
                                Join our premium community and experience a total body and mind transformation with the best trainers in the industry.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-12">
                                <div>
                                    <h3 className="text-6xl font-black heading-font m-0 p-0 leading-none text-black">60+</h3>
                                    <p className="font-bold uppercase tracking-wider text-sm mt-2 text-gray-500">Expert<br />Trainers</p>
                                </div>
                                <div className="w-[1px] bg-gray-300 hidden sm:block"></div>
                                <div>
                                    <h3 className="text-6xl font-black heading-font m-0 p-0 leading-none text-black">95%</h3>
                                    <p className="font-bold uppercase tracking-wider text-sm mt-2 text-gray-500">Client<br />Satisfaction</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: EXCELLENCE GALLERY using Parallax */}
            <section ref={sectionRef} className="py-32 bg-[var(--color-brand-card)] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-[var(--color-brand-lime)] font-black text-xl">●</span>
                            <span className="font-bold tracking-[0.2em] text-sm uppercase text-gray-400">Excellence</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black heading-font leading-tight text-white uppercase">
                            From Effort To<br />Excellence
                        </h2>
                    </motion.div>
                </div>

                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

                        {/* Parallax Image Left */}
                        <div className="relative h-[600px] w-full overflow-hidden rounded-2xl group cursor-pointer border border-white/5 bg-black">
                            <motion.img
                                style={{ y: imgParallax1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                                alt="Gallery 1"
                                className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 origin-center"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest px-6 py-3 text-sm shadow-xl rounded-full group-hover:bg-[var(--color-brand-lime)] group-hover:text-black group-hover:border-transparent transition-all duration-300 pointer-events-none">
                                Strength
                            </div>
                        </div>

                        {/* Parallax Image Right */}
                        <div className="relative h-[600px] w-full overflow-hidden mt-0 md:mt-24 rounded-2xl group cursor-pointer border border-white/5 bg-black">
                            <motion.img
                                style={{ y: imgParallax2 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1470&auto=format&fit=crop"
                                alt="Gallery 2"
                                className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 origin-center"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest px-6 py-3 text-sm shadow-xl rounded-full group-hover:bg-[var(--color-brand-lime)] group-hover:text-black group-hover:border-transparent transition-all duration-300 pointer-events-none">
                                Mobility
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Facilities;
