import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '/about' },
        { name: 'SERVICES', href: '/services' },
        { name: 'TRAINERS', href: '/trainers' },
        { name: 'PRICING', href: '/pricing' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <Crown className="text-[var(--color-brand-lime)] transition-colors" size={32} />
                            <span className="text-3xl font-black tracking-tighter text-white display-font group-hover:text-[var(--color-brand-lime)] transition-colors">
                                KING'S
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href || (location.pathname === '' && link.href === '/');
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`relative font-bold text-xs tracking-[0.2em] transition-colors uppercase py-2 ${isActive ? 'text-[var(--color-brand-lime)]' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-brand-lime)]" />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="hidden md:flex items-center">
                        <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(214, 255, 0, 0.4)" }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className="bg-[var(--color-brand-lime)] text-black px-8 py-3 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-300"
                            >
                                JOIN US
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-[var(--color-brand-lime)] focus:outline-none transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, y: -20 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -20 }}
                        className="md:hidden bg-black absolute top-full left-0 w-full border-t border-white/10 z-50 overflow-hidden shadow-2xl"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2 text-center">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-3 py-4 text-base font-black tracking-widest uppercase ${isActive ? 'text-[var(--color-brand-lime)]' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                            <div className="pt-6 px-4">
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full text-center bg-[var(--color-brand-lime)] text-black px-6 py-4 rounded-full font-black tracking-widest uppercase"
                                    >
                                        JOIN US
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
