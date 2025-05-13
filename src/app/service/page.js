'use client';

import Image from 'next/image';
import styles from './page.module.css';
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

const Service = () => {
    return (
        <div>
            <motion.header className='pageHeader' initial="hidden" animate="visible" variants={fadeUp}>                
                <h1> Our Mission Is To Make Your Business Better Through Technology </h1>                
            </motion.header>

            {[{
                id: 1,
                image: '/images/service/ui.png',
                title: 'Website UI/UX Design',
                discription: "We craft beautiful, responsive websites that do more than look good—they work for your brand and your audience. We do not use templates or one-size-fits-all solutions. Instead, we design custom layouts that reflect your brands personality, values, and message. At GMTDevs, we take the time to understand your brand, your goals, and the people you want to reach. Then we create a custom design that reflects your personality and clearly communicates your value."
            }, {
                id: 2,
                image: '/images/service/website.png',
                title: 'Landing Page Design',
                discription: "We create focused, high-impact pages designed to drive results. Every element, from the layout to the call-to-action—is crafted with your goal in mind. Whether you're launching a product, running a campaign, or collecting leads, we design landing pages that are clean, compelling, and built to convert. At GMTDevs, we keep things simple but effective, helping you capture attention and guide your visitors to take the next step without distractions."
            }, {
                id: 3,
                image: '/images/service/mobile.png',
                title: 'Redesign & Revamp',
                discription: "We give outdated websites a fresh, modern feel without losing what makes you, you. If your current site feels clunky, outdated, or just not doing the job, we can help. At GMTDevs, we take what’s working, fix what’s not, and breathe new life into your online presence. From layout to visuals to user flow, we make sure your site looks better, works better, and feels like your brand today. Sometimes all you need is a smart refresh and we’re here to make it smooth and stress free."
            }, {
                id: 4,
                image: '/images/service/graphic.png',
                title: 'Portfolio & Personal Brand Design',
                discription: "With GMTDevs, you get a personal brand site that feels authentic, looks sharp, and leaves a lasting impression. Your portfolio should do more than display your projects; it should reflect your personality, process, and professionalism. Whether you're a creative, consultant, or freelancer, we design tailored websites that highlight your strengths and make it easy for visitors to understand what you do and why it matters. Show your work. Share your story. Stand out online."
            }, {
                id: 5,
                image: '/images/service/branding.png',
                title: 'Brand-Focused Design',
                discription: "Your brand has a voice and your website should speak it clearly. At GMTDevs, it is not just about looking good, it is about looking like you. We design websites that feel like a natural extension of your brand, not an afterthought. From colors and typography to layout and tone, every detail is crafted to reflect your identity and values. Whether you're just starting out or already established, we make sure your online presence feels cohesive, intentional, and unmistakably you."
            }].map((service, index) => (
                <motion.div 
                    key={index} 
                    className={`container ${index % 2 === 0 ? styles.serviceLeftContainer : styles.serviceRightContainer} ${styles.serviceContainer}`} 
                    initial="hidden" 
                    id={service.id}
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.2 }} 
                    variants={index % 2 === 0 ? fadeFromLeft : fadeFromRight}
                >
                    {index % 2 === 0 && <Image src={service.image} width={500} height={500} alt='service' />}

                    <div className={`container ${styles.containerTxt}`}>
                        <h2>{service.title}</h2>
                        <p>{service.discription}</p>
                        <div className='btn'>
                            <div>
                                <Link href="/contact">
                                    Get Started
                                </Link>
                            </div>    
                        </div>
                    </div>

                    {index % 2 !== 0 && <Image src={service.image} width={500} height={500} alt='service' />}
                </motion.div>
            ))}
        </div>
    )
};

export default Service;
