import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#111111] pt-24 pb-8 relative overflow-hidden flex flex-col items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 border-b border-gray-800 pb-16">

                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <span className="text-4xl font-black tracking-tighter text-[var(--color-brand-lime)] display-font">
                                KING'S
                            </span>
                        </a>
                        <p className="text-gray-400 max-w-sm mb-6 font-medium">
                            Join the fitness revolution. Transform your energy into pure power with our industry-leading completely equipped facilities.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[var(--color-brand-lime)] font-black mb-6 uppercase tracking-[0.2em] text-sm">Quick Links</h4>
                        <ul className="space-y-4 font-bold uppercase text-xs tracking-widest text-white">
                            <li><a href="#" className="hover:text-[var(--color-brand-lime)] transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-[var(--color-brand-lime)] transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-[var(--color-brand-lime)] transition-colors">Services</a></li>
                            <li><a href="#contact" className="hover:text-[var(--color-brand-lime)] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[var(--color-brand-lime)] font-black mb-6 uppercase tracking-[0.2em] text-sm">Contact Us</h4>
                        <ul className="space-y-4 font-bold uppercase text-xs tracking-widest text-white">
                            <li>info@kingsgym.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li className="text-gray-500 mt-4 leading-relaxed">
                                123 FITNESS AVENUE,<br />
                                MUSCLE CITY, NY 10001
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest text-center md:text-left">
                        &copy; {new Date().getFullYear()} KING'S GYM. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-6 text-white font-bold text-xs tracking-widest uppercase">
                        <a href="#" className="hover:text-[var(--color-brand-lime)] transition-colors">Instagram</a>
                        <a href="#" className="hover:text-[var(--color-brand-lime)] transition-colors">Twitter</a>
                        <a href="#" className="hover:text-[var(--color-brand-lime)] transition-colors">YouTube</a>
                    </div>
                </div>

            </div>

            {/* Massive GYMIX Overlay at the bottom */}
            <div className="w-full overflow-hidden flex justify-center mt-[-40px] md:mt-[-100px] pointer-events-none select-none">
                <h1 className="text-[120px] md:text-[250px] lg:text-[400px] font-black heading-font text-[var(--color-brand-lime)] leading-[0.7] tracking-tighter opacity-90 m-0 p-0 text-center w-full">
                    KING'S
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
