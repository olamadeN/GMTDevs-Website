import Image from 'next/image';
import styles from './footer.module.css';
const Footer = () => {
    return (
        <div className="container">
            <div className={styles.footerGrid}>
                <Image src='/images/logo.png' width={500} height={500} alt='footer'/>
                <div className={styles.information}>
                    <p className={styles.footerSubHeading}>Information</p>
                    <ul>
                        <li>Privacy</li>
                        <li>FAQ</li>
                        <li>Partners</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <p className={styles.footerSubHeading}>Our services</p>
                    <ul>
                        <li>Custom Web Design</li>
                        <li>App Development</li>
                        <li>Digital Trend</li>
                        <li>Case Studies</li>
                    </ul>
                </div>
                <div className={styles.call}>
                    <div className={styles.callBtn}>Request a call</div>
                    <ul>
                        <li>+234 (999) 999-99</li>
                        <li>info@GMTDevs.com</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>© 2025 — GMTDevs</p>
                <p>Privacy</p>
            </div>
        </div>
    )
};

export default Footer