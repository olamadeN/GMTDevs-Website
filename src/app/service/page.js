'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { motion } from 'framer-motion';


const fadeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Service = () => {
    return (
        <div>
            <motion.header className='pageHeader' initial="hidden" animate="visible" variants={fadeUp}>                
                <h1> Our Mission Is To Make Your Business Better Through Technology </h1>                
            </motion.header>

            {[{
                image: '/images/service/ui.png',
                title: 'UI/UX Design'
            }, {
                image: '/images/service/website.png',
                title: 'Web Development'
            }, {
                image: '/images/service/mobile.png',
                title: 'Mobile Development'
            }, {
                image: '/images/service/graphic.png',
                title: 'Graphic Design'
            }, {
                image: '/images/service/branding.png',
                title: 'Branding'
            }].map((service, index) => (
                <motion.div 
                    key={index} 
                    className={`container ${index % 2 === 0 ? styles.serviceLeftContainer : styles.serviceRightContainer} ${styles.serviceContainer}`} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.2 }} 
                    variants={index % 2 === 0 ? fadeFromLeft : fadeFromRight}
                >
                    {index % 2 === 0 && <Image src={service.image} width={500} height={500} alt='service' />}

                    <div className={`container ${styles.containerTxt}`}>
                        <h2>{service.title}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tortor ut ante feugiat tincidunt eu et metus. Integer condimentum purus vitae tellus rhoncus gravida. Aenean lorem dolor, varius quis dolor non, tempus tincidunt turpis. Fusce feugiat, diam nec dapibus tempus, neque dolor lacinia felis, eget accumsan ipsum sem et dui. Curabitur viverra finibus sapien.</p>
                        <div className='btn'>
                            <div>Get Started</div>    
                        </div>
                    </div>

                    {index % 2 !== 0 && <Image src={service.image} width={500} height={500} alt='service' />}
                </motion.div>
            ))}
        </div>
    )
};

export default Service;
