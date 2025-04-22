import Image from "next/image"
import nav from './navbar.module.css';
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav className={`${nav.navbar}`}>
                <Image className={nav.logo} src='/images/logo.png' alt='navigation logo' width={100} height={100} />
                <ol className={nav.navLinks}>
                    <Link href="/"><li>Home</li></Link> {/* The leading slash is to ensure the route is absoulte to prevent it being interpreted as a relative route by the app router in the case details page */}
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/service"><li>Services</li></Link>
                    <Link href="/case"><li>Case Studies</li></Link>
                    <Link href="/"><li>Contacts</li></Link>
                    <Link href="#"><li>Learn More</li></Link>                                 
                </ol>
            </nav>
        </div>
    )
}

export default Navbar