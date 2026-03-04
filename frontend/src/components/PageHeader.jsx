import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, bgImage }) => {
    return (
        <div className="relative h-[450px] w-full flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-10 h-[2px] bg-[var(--color-brand-lime)]"></div>
                    <span className="text-[var(--color-brand-lime)] font-bold tracking-[0.3em] uppercase text-xs md:text-sm">{subtitle}</span>
                    <div className="w-10 h-[2px] bg-[var(--color-brand-lime)]"></div>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black heading-font text-white uppercase tracking-tighter drop-shadow-2xl">
                    {title}
                </h1>
            </motion.div>
        </div>
    );
};

export default PageHeader;
