'use client';

import Image from 'next/image';
import styles from '../service/page.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';


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

const ServiceDev = () => {
    return (
        <div>
            <motion.header className='pageHeader' initial="hidden" animate="visible" variants={fadeUp}>                     
                <h1> We develop websites that do more than just look good. </h1>                    
            </motion.header>

            {[{
                id: 1,
                image: '/images/service/devOps.png',
                title: 'Custom Website Development',
                discription: "Have an idea? We’ll turn it into a fully functional website that works beautifully. At GMTDevs, we build from the ground up, no shortcuts, no cookie-cutter code. Just smart, scalable websites tailored to your exact needs. Whether you have a clear vision or just a spark of an idea, we’ll work with you to bring it to life with clean code, smooth performance, and the flexibility to grow with your business. You imagine it. We build it."
            }, {
                id: 2,
                image: '/images/service/ecommerce.png',
                title: 'E-commerce Development',
                discription: "We build online stores that work the way you do. At GMTDevs, we design e-commerce websites with smooth navigation, secure payment gateways, and hassle-free product management. Your online store should be simple to navigate and easy for you to manage, so we focus on creating a seamless experience for both you and your customers. Whether you’re selling one product or a whole catalog,  we create a smooth experience for both you and your customers."
            }, {
                id: 3,
                image: '/images/service/search.jpg',
                title: 'Performance & SEO Basics',
                discription: "At GMTDevs We optimize your site for speed, accessibility, and search visibility from day one. we ensure your website performs at its best. By focusing on fast load times, easy navigation, and SEO fundamentals, we make sure your site is ready to rank and reach your audience. From the moment we build, we lay the foundation for improved performance, ensuring a smooth user experience and better search engine results."
            }, {
                id: 4,
                image: '/images/service/land.png',
                title: 'SaaS Development',
                discription: "We bring your vision to life with powerful, scalable solutions. At GMTDevs, we build custom SaaS products that solve real-world problems. From brainstorming ideas to a successful launch, we collaborate closely with you to craft solutions that fit your needs. Our team focuses on creating intuitive, high-performing platforms that scale with your business, ensuring your product stands out in a competitive market."
            }, {
                id: 5,
                image: '/images/service/support.jpeg',
                title: 'Post-Launch Support',
                discription: "We’ve got your back, even after your site goes live. Once your website is launched, our work doesn’t stop. At GMTDevs, we provide ongoing support with maintenance, updates, and technical assistance to ensure your site stays up-to-date and performs flawlessly. Whether it’s adding new features, optimizing speed, or fixing bugs, we’re here to keep your website running smoothly and your business thriving."
            }].map((service, index) => (
                <motion.div 
                    key={index} 
                    className={`container ${index % 2 === 0 ? styles.serviceLeftContainer : styles.serviceRightContainer} ${styles.serviceContainer}`} 
                    initial="hidden" 
                    whileInView="visible" 
                    id={service.id}
                    viewport={{ once: true, amount: 0.2 }} 
                    variants={index % 2 === 0 ? fadeFromLeft : fadeFromRight}
                >
                    {index % 2 === 0 && <Image src={service.image} width={500} height={500} alt='service' />}

                    <div className={`container ${styles.containerTxt}`}>
                        <h2>{service.title}</h2>
                        <p>{service.discription}</p>
                        <div className='btn'>
                            <Link href="/contact">  
                                <div>Get Started</div> 
                            </Link>   
                        </div>
                    </div>

                    {index % 2 !== 0 && <Image src={service.image} width={500} height={500} alt='service' />}
                </motion.div>
            ))}
        </div>
    )
};

export default ServiceDev;
