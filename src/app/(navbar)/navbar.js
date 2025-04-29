'use client';
import { useState } from "react";
import Image from "next/image";
import nav from './navbar.module.css';
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };

    return (
        <div>
            <nav className={nav.navbar}>
                <Image className={nav.logo} src='/images/logo.png' alt='navigation logo' width={100} height={100} />

                <div className={nav.hamburger} onClick={toggleMenu}>
                    <div className={nav.bar}></div>
                    <div className={nav.bar}></div>
                    <div className={nav.bar}></div>
                </div>

                <ol className={`${nav.navLinks} ${menuOpen ? nav.showMenu : ''}`}>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <li className={nav.dropdown} onClick={toggleServices}>
                        Services
                        <div className={`${nav.dropdownContent} ${servicesOpen ? nav.showSubMenu : ''}`}>
                            <Link href="/services/design"><li>Design Services</li></Link>
                            <Link href="/services/development"><li>Development Services</li></Link>
                        </div>
                    </li>
                    <Link href="/case"><li>Case Studies</li></Link>
                    <Link href="/"><li>Contacts</li></Link>
                    <Link href="#"><li>Learn More</li></Link>
                </ol>
            </nav>
        </div>
    );
};

export default Navbar;
