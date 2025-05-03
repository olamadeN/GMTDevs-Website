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
            <div><Link href="/">Get Started</Link></div>
          </div>
        </motion.div>
        <Image src="/images/bannerFace.png" width={500} height={500} alt="banner" />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra ornare urna vel vestibulum. Sed ut consectetur ligula, nec blandit erat. Mauris eget quam id orci scelerisque egestas. Vestibulum tempor commodo suscipit. Morbi dolor neque, ullamcorper egestas augue in, semper pellentesque felis. Nullam accumsan nulla id efficitur rhoncus. Nunc egestas orci a neque commodo, vel placerat odio cursus. Morbi lacinia justo a rhoncus luctus. Sed tristique iaculis ante. Vestibulum bibendum mollis neque a blandit.
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
              {["UI/UX Design", "Website Design", "Mobile Design"].map((title, i) => (
                <motion.div key={i} className={styles.designContainerPackInner} variants={fadeInVariant}>
                  <h3 className={styles.packh3}>{title}</h3>
                  <p className={styles.packp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra ornare urna vel vestibulum. Sed ut consectetur ligula.</p>
                </motion.div>
              ))}
            </div>
            <div className={styles.designContainerPack2}>
              {["Graphic Design", "Brand Design"].map((title, i) => (
                <motion.div key={i} className={styles.designContainerPackInner} variants={fadeInVariant}>
                  <h3 className={styles.packh3}>{title}</h3>
                  <p className={styles.packp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra ornare urna vel vestibulum. Sed ut consectetur ligula.</p>
                </motion.div>
              ))}
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
              {[1, 2, 3].map((_, i) => (
                <motion.div key={i} className={styles.devContainerPack} variants={fadeInVariant}>
                  <Image src='/images/mobiledesign.jpg' alt="ban" width={500} height={500} />
                  <div className={styles.devContainerPackText}>
                    <h3 className={styles.packh3}>Landing Page</h3>
                    <p className={styles.packp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra ornare urna vel vestibulum. Sed ut consectetur ligula.</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.designContainerPack2}>
              {[1, 2].map((_, i) => (
                <motion.div key={i} className={styles.devContainerPack} variants={fadeInVariant}>
                  <Image src='/images/mobiledesign.jpg' alt="ban" width={500} height={500} />
                  <div className={styles.devContainerPackText}>
                    <h3 className={styles.packh3}>Landing Page</h3>
                    <p className={styles.packp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra ornare urna vel vestibulum. Sed ut consectetur ligula.</p>
                  </div>
                </motion.div>
              ))}
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
