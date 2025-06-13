"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Testimonial from "./(testimonial)/testimonial";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className={styles.page}>
      <header className={styles.banner}>
        <motion.div
          className={styles.bannerTxt}
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <h1>Your Website Is Your Business First Impression</h1>
          <p>
            Elevate your brand with custom, innovative design solutions that captivate and inspire. Let&apos;s bring your vision to life.
          </p>
          <div className={styles.bannerBtn}>
            <div><Link href="/service">Our Services</Link> </div>
            <div><Link href="/contact">Get Started</Link></div>
          </div>
        </motion.div>
        <Image src="/images/bannerFace.webp" width={1200} height={600} alt="banner" priority/>
      </header>
      <main className={styles.main}>
        <motion.section
          className={`${styles.aboutSection} ${styles.container}`}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
        >
          <div>
            <h2 className={styles.subHeading}>About Us</h2>
            <p>
             At GMTDevs, we create clean, effective websites tailored to  businesses and personal brands. Our designs focus on functionality, user experience, and your unique goals, making sure your website is not just beautiful but also working. We are not just developers; we are your partners in taking your brand online and helping you thrive in the digital world.
            </p>
          </div>
        </motion.section>

        <motion.section
          className={`${styles.designSection} ${styles.container2}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <h2 className={styles.subHeading}>Our Design Services</h2>
          <div className={styles.designContainer}>
            <div className={styles.designContainerPack1}>
              <Link href="/service#1">
                <motion.div className={styles.designContainerPackInner} variants={fadeInVariant}>
                  <h3 className={styles.packh3}>Custom Website Design</h3>
                  <p className={styles.packp}> Have an idea? We’ll turn it into a fully functional website that works beautifully. You imagine it. We build it.</p>
                </motion.div>
              </Link>
              <Link href="/service#2">
                <motion.div className={styles.designContainerPackInner} variants={fadeInVariant}>
                  <h3 className={styles.packh3}>Landing Page Design </h3>
                  <p className={styles.packp}>We keep things simple but effective, helping you capture attention and guide your visitors to take that step</p>
                </motion.div>
              </Link>
              <Link href="/serviceDev#3">
                <motion.div className={styles.designContainerPackInner} variants={fadeInVariant}>
                  <h3 className={styles.packh3}>Redesigning & Revamping </h3>
                  <p className={styles.packp}>Giving outdated sites a fresh and modern look. We keep what is working and fix what is not.</p>
                </motion.div>
              </Link>
            </div>
            <div className={styles.designContainerPack2}>
              <Link href="/service#4">
                <motion.div className={styles.designContainerPackInner} variants={fadeInVariant}>
                  <h3 className={styles.packh3}>Personal Brand Design</h3>
                  <p className={styles.packp}>Your portfolio should do more than display your projects; it should reflect your personality, process, and professionalism.</p>
                </motion.div>
              </Link>
              <Link href="/service#5">
                <motion.div className={styles.designContainerPackInner} variants={fadeInVariant}>
                  <h3 className={styles.packh3}>Brand-Focused Design</h3>
                  <p className={styles.packp}> Your brand has a voice and your website should speak it clearly. We will give you visually cohesive designs that speak your brand language</p>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section
          className={`${styles.designSection} ${styles.container2}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <h2 className={styles.subHeading}>Our Development Services</h2>
          <div className={styles.designContainer}>
            <div className={styles.designContainerPack1}>
              <Link href="/serviceDev#1">
                <motion.div className={styles.devContainerPack} variants={fadeInVariant}>
                  <Image src='/images/service/webDev.png' alt="ban" width={500} height={500} loading="lazy"/>
                  <div className={styles.devContainerPackText}>
                    <h3 className={styles.packh3}>Custom Web Development</h3>
                    <p className={styles.packp}>Tell us what you want and we build it for you. bring your imagination to life</p>
                  </div>
                </motion.div>
              </Link>
              <Link href="/serviceDev#2">
                <motion.div className={styles.devContainerPack} variants={fadeInVariant}>
                  <Image src='/images/service/ecommerce.webp' alt="ban" width={500} height={500} loading="lazy"/>
                  <div className={styles.devContainerPackText}>
                    <h3 className={styles.packh3}>Ecommerce Development</h3>
                    <p className={styles.packp}>We create functional online stores with smooth navigation, secure payments, and product management.</p>
                  </div>
                </motion.div>
              </Link>
              <Link href="/serviceDev#3">
                <motion.div className={styles.devContainerPack} variants={fadeInVariant}>
                  <Image src='/images/service/search.jpg' alt="ban" width={500} height={500} loading="lazy"/>
                  <div className={styles.devContainerPackText}>
                    <h3 className={styles.packh3}>Performance & SEO Basics</h3>
                    <p className={styles.packp}>Your site will be optimized for speed, accessibility, and search visibility right from the start.</p>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className={styles.designContainerPack2}>
              <Link href="/serviceDev#4">
                <motion.div className={styles.devContainerPack} variants={fadeInVariant}>
                  <Image src='/images/service/land.png' alt="ban" width={500} height={500} loading="lazy"/>
                  <div className={styles.devContainerPackText}>
                    <h3 className={styles.packh3}>SaaS Product Development</h3>
                    <p className={styles.packp}>From concept to launch, we work with you to turn your vision into a product that solves real problems.</p>
                  </div>
                </motion.div>
              </Link>
              <Link href="/serviceDev#5">
                <motion.div className={styles.devContainerPack} variants={fadeInVariant}>
                  <Image src='/images/service/support.jpeg' alt="ban" width={500} height={500} loading="lazy"/>
                  <div className={styles.devContainerPackText}>
                    <h3 className={styles.packh3}>Post-Launch Support</h3>
                    <p className={styles.packp}>We offer maintenance, updates, and technical support to keep your website running smoothly.</p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section
          className={`${styles.testimonialSection} ${styles.container}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <h2 className={styles.subHeading}>Testimonials</h2>
          <Testimonial />
        </motion.section>
      </main>
    </div>
  );
}
