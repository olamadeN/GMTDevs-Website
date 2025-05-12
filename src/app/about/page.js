"use client"
import Image from 'next/image';
import styles from './page.module.css';
import FaqItem from './(faq)/faq';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';


const faqs = [
    {
      question: 'How we work',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra ornare urna vel vestibulum. Sed ut consectetur ligula, nec blandit erat.',
    },
    {
      question: 'How to Contact Us?',
      answer:
        'You can contact us through our website form or email. We respond within 24 hours.',
    },
    {
      question: 'Do designer scam clients?',
      answer:
        'Not all. It depends on the designer. Always check for reviews, portfolios, and contracts.',
    },
    {
      question: 'What features do you offer?',
      answer:
        'We offer responsive design, SEO optimization, admin dashboards, and custom integrations.',
    },
];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView1) control1.start("visible");
    if (inView2) control2.start("visible");
    if (inView3) control3.start("visible");
  }, [inView1, inView2, inView3, control1, control2, control3]);

  return (
    <div>
      <motion.header ref={ref1} initial="hidden" animate={control1} variants={fadeUp} className={`container ${styles.aboutHead}`}>
        <h1>We Provide Innovative Design Solutions And Expert Options</h1>
        <div className={styles.aboutSubHead}>
          <p>Your website is more than just a digital address. It is where first impressions are made, where trust is built, and where customers take action. At GMTDevs, we treat every project like it matters because it does.</p>
          <div className='btn'>
            <div><Link href="/serviceDev" >Our Services</Link></div>
            <div>Get Started</div>
          </div>
        </div>
      </motion.header>

      <motion.section ref={ref2} initial="hidden" animate={control2} variants={fadeLeft} className='container identitySection'>
        <h2 className='aboutTitle'>Our Identity and Values</h2>
        <div className='identityTxt'>
          <div>
            <h3 className='aboutSubTitle'>ABOUT US</h3>
            <p className='aboutMainTxt'>
              <p>At GMTDevs, we specialize in crafting smart, clean, and effective web solutions tailored to meet the unique needs of businesses and personal brands. With a strong focus on design, functionality, and user experience, we help business owners establish a powerful online presence that communicates their value and drives growth.</p>
              <br/>
              <p>Our mission is simple: to make high-quality websites accessible and valuable to entrepreneurs who are ready to take their brand online. Whether you are a food vendor selling Nigerian delicacies, a real estate agent showcasing properties, or a creative professional looking to present your portfolio, we build with your vision and customers in mind.</p>
              <br/>
              <p>We understand that your website is more than just a digital space; it is your platform to build trust, convert interest into action, and grow your brand sustainably. At GMTDevs, we are not just developers. We are partners in your digital journey, committed to helping you create something meaningful that aligns with your goals and supports your business growth.</p>
            </p>
          </div>
          <div>
            <h3 className='aboutSubTitle'>OUR VIRTUES</h3>
            <p className='aboutMainTxt'>
              <p>What sets us apart is our partnership mindset. We do not just deliver a website and walk away, we walk with you. We take time to understand your business, offer guidance on what will work best for your audience, and help you make informed decisions along the way. We combine design thinking with technical excellence, blending visual appeal with functionality to create a digital space that truly represents your brand.</p>
              <br/>
              <p>
                To us your website is more than just a digital address. It is where first impressions are made, where trust is built, and where customers make decision and take action. At GMTDevs, we treat every project like it matters, because it does. You do the hard work of building your business and We make sure the world sees it.
              </p>
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className='container'>
        <div className={styles.aboutTitlePack}>
          <h2 className='aboutTitle'>How We Get Things Done</h2>
        </div>
        <div className={styles.thingsPackContainer}>
          <motion.div className={styles.thingsPack} variants={fadeUp}>
            <Image src={`/images/discover.png`} width={500} height={500} alt="our process step" />
            <div className={styles.thingsTxtPack}>
              <p>Understand</p>
              <p>We begin by listening. Getting to know your brand, your audience, and what success looks like for you.</p>
            </div>
          </motion.div>
          <motion.div className={styles.thingsPack} variants={fadeUp}>
            <Image src={`/images/design.png`} width={500} height={500} alt="our process step" />
            <div className={styles.thingsTxtPack}>
              <p>Plan</p>
              <p>We outline the structure, features, and timeline that will bring your website to life with clarity and purpose.</p>
            </div>
          </motion.div>
          <motion.div className={styles.thingsPack} variants={fadeUp}>
            <Image src={`/images/develop.png`} width={500} height={500} alt="our process step" />
            <div className={styles.thingsTxtPack}>
              <p>Create</p>
              <p>From design to development, we build a seamless digital experience tailored to your goals and fully responsive across devices.</p>
            </div>
          </motion.div>
          <motion.div className={styles.thingsPack} variants={fadeUp}>
            <Image src={`/images/deliver.png`} width={500} height={500} alt="our process step" />
            <div className={styles.thingsTxtPack}>
              <p>Support</p>
              <p>After launch, we remain by your side handling refinements, updates, and ensuring your website continues to serve your business as it grows.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section ref={ref3} initial="hidden" animate={control3} variants={fadeRight} className={`container ${styles.figuresSection}`}>
        <div className={styles.businessTitlePack}>
          <h2 className='aboutTitle'>Business is a whole lot Easier with Us</h2>
        </div>
        <div className={styles.figuresPack}>
          <div className={styles.factsFigures}>
            <div>
              <p className={styles.factsSubheading}>Facts and Figures</p>
            </div>
            <p className={`${styles.aboutMainTxt} ${styles.factsText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className={styles.factsStats}>
            <motion.div className={styles.statsPack} variants={fadeUp}>
              <p>80%</p>
              <p>Completed and Delivered Projects</p>
            </motion.div>
            <motion.div className={styles.statsPack} variants={fadeUp}>
              <p>₦ 12M</p>
              <p>Streamlined Asset Design Delivery</p>
            </motion.div>
            <motion.div className={styles.statsPack} variants={fadeUp}>
              <p>30+</p>
              <p>Project Worked on</p>
            </motion.div>
            <motion.div className={styles.statsPack} variants={fadeUp}>
              <p>98%</p>
              <p>Customer Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft} className={`container ${styles.questionSection}`}>
        <div className={styles.questionLeft}>
          <div className={styles.questionTitlePack}>
            <h2 className='aboutTitle'>Any Questions? We got you.</h2>
          </div>
          <p className={styles.aboutMainTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className={styles.questionRight}>
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;