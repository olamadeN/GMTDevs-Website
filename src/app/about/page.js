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
      question: 'What happens after I contact you?',
      answer:
        'Once you reach out, we kick things off with a discovery session to understand your goals. From there, we create a personalized plan, define clear timelines, and keep you in the loop throughout the process. Communication and clarity are key at every step.',
    },
    {
      question: 'How long will my project take?',
      answer:
        'Most projects are completed within 2 to 4 weeks, depending on complexity. We outline all milestones from the start, so you always know what is coming next and when to expect it.',
    },
    {
      question: 'Can we work together remotely?',
      answer:
        'Yes, we work seamlessly with clients both locally and internationally. From email to video calls and digital project boards, we stay connected and collaborative no matter where you are.',
    },
    {
      question: 'What tools or technologies do you use?',
      answer:
        'We use cutting-edge tools like Next.js, React, AI and responsive CSS to build fast, scalable websites with smooth user experiences. We also tap into AI-powered features so your site is not just modern, but intelligent and future-ready.',
    },
    {
      question: 'What if I need changes after the website is live?',
      answer:
        'We offer post-launch support to fix bugs, make improvements, or update content. Our flexible maintenance options are designed to help your website grow as your brand does.',
    },
    {
      question: ' What if I do not have a clear idea yet?',
      answer:
        'No problem. You do not need to have everything figured out before reaching out. We will work closely with you to understand your goals, explore your options, and guide you through what is possible based on your needs and budget.',
    }
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
            <div> <Link href="/contact">Get Started </Link></div>
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
              <p>We define the website’s structure, features, and timeline, ensuring clear goals and purpose aligned with your business needs.</p>
            </div>
          </motion.div>
          <motion.div className={styles.thingsPack} variants={fadeUp}>
            <Image src={`/images/develop.png`} width={500} height={500} alt="our process step" />
            <div className={styles.thingsTxtPack}>
              <p>Create</p>
              <p>We craft a seamless digital experience from design to development, ensuring full responsiveness across all devices.</p>
            </div>
          </motion.div>
          <motion.div className={styles.thingsPack} variants={fadeUp}>
            <Image src={`/images/deliver.png`} width={500} height={500} alt="our process step" />
            <div className={styles.thingsTxtPack}>
              <p>Support</p>
              <p>Post-launch, we continue supporting your website with refinements, updates, and ensuring it grows alongside your business.</p>
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
          <p className={styles.aboutMainTxt}>Find quick answers to what people ask the most.</p>
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