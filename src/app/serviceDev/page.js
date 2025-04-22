import Image from 'next/image';
import styles from '../service/page.module.css';

export const metadata = {
    title: "Services - GMTDevs",
    description: "GMTDevs builds fast, responsive websites for businesses and personal brands. GMTDevs offers SEO-driven web development services, creating optimized, user-friendly websites that drive growth and success.",
};

const ServiceDev = () => {
    return (
        <div>
            <header className='pageHeader'>                
                <h1> Our Mission Is To Make Your Business Better Through Technology </h1>                
            </header>
            <div className={`container ${styles.serviceLeftContainer} ${styles.serviceContainer}`}>
                <Image src='/images/service/land.png' width={500} height={500} alt='service' />
                <div className={`container ${styles.containerTxt}`}>
                    <h2>Landing Page</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tortor ut ante feugiat tincidunt eu et metus. Integer condimentum purus vitae tellus rhoncus gravida. Aenean lorem dolor, varius quis dolor non, tempus tincidunt turpis. Fusce feugiat, diam nec dapibus tempus, neque dolor lacinia felis, eget accumsan ipsum sem et dui. Curabitur viverra finibus sapien.</p>
                    <div className='btn'>
                        <div>Get Started</div>    
                    </div>
                </div>
            </div>
            <div className={`container ${styles.serviceRightContainer} ${styles.serviceContainer}`}>
                <div className={`container ${styles.containerTxt}`}>
                    <h2>Mobile Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tortor ut ante feugiat tincidunt eu et metus. Integer condimentum purus vitae tellus rhoncus gravida. Aenean lorem dolor, varius quis dolor non, tempus tincidunt turpis. Fusce feugiat, diam nec dapibus tempus, neque dolor lacinia felis, eget accumsan ipsum sem et dui. Curabitur viverra finibus sapien.</p>
                    <div className='btn'>
                        <div>Get Started</div>    
                    </div>
                </div>
                <Image src='/images/service/mobileDev.png' width={500} height={500} alt='service' />
            </div>
            <div className={`container ${styles.serviceLeftContainer} ${styles.serviceContainer}`}>
                <Image src='/images/service/webDev.png' width={500} height={500} alt='service' />
                <div className={`container ${styles.containerTxt}`}>
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tortor ut ante feugiat tincidunt eu et metus. Integer condimentum purus vitae tellus rhoncus gravida. Aenean lorem dolor, varius quis dolor non, tempus tincidunt turpis. Fusce feugiat, diam nec dapibus tempus, neque dolor lacinia felis, eget accumsan ipsum sem et dui. Curabitur viverra finibus sapien.</p>
                    <div className='btn'>
                        <div>Get Started</div>    
                    </div>
                </div>
            </div>
            <div className={`container ${styles.serviceRightContainer} ${styles.serviceContainer}`}>
                <div className={`container ${styles.containerTxt}`}>
                    <h2>Dev Ops</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tortor ut ante feugiat tincidunt eu et metus. Integer condimentum purus vitae tellus rhoncus gravida. Aenean lorem dolor, varius quis dolor non, tempus tincidunt turpis. Fusce feugiat, diam nec dapibus tempus, neque dolor lacinia felis, eget accumsan ipsum sem et dui. Curabitur viverra finibus sapien.</p>
                    <div className='btn'>
                        <div>Get Started</div>    
                    </div>
                </div>
                <Image src='/images/service/devOps.png' width={500} height={500} alt='service' />
            </div>
            <div className={`container ${styles.serviceLeftContainer} ${styles.serviceContainer}`}>
                <Image src='/images/service/webFlow.png' width={500} height={500} alt='service' />
                <div className={`container ${styles.containerTxt}`}>
                    <h2>Webflow Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tortor ut ante feugiat tincidunt eu et metus. Integer condimentum purus vitae tellus rhoncus gravida. Aenean lorem dolor, varius quis dolor non, tempus tincidunt turpis. Fusce feugiat, diam nec dapibus tempus, neque dolor lacinia felis, eget accumsan ipsum sem et dui. Curabitur viverra finibus sapien.</p>
                    <div className='btn'>
                        <div>Get Started</div>    
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ServiceDev;