"use client"
import Image from 'next/image';
import styles from './page.module.css';
import FaqItem from './(faq)/faq';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, augue sit amet porttitor aliquet, dolor ex porttitor dolor, id posuere turpis magna a justo. Maecenas vestibulum augue ut massa porta, at pretium enim laoreet.</p>
          <div className='btn'>
            <div>Our Services</div>
            <div>Get Started</div>
          </div>
        </div>
      </motion.header>

      <motion.section ref={ref2} initial="hidden" animate={control2} variants={fadeLeft} className='container identitySection'>
        <h2 className='aboutTitle'>Our Identity and Values</h2>
        <div className='identityTxt'>
          <div>
            <h3 className='aboutSubTitle'>ABOUT US</h3>
            <p className='aboutMainTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, augue sit amet porttitor aliquet, dolor ex porttitor dolor, id posuere turpis magna a justo. Maecenas vestibulum augue ut massa porta, at pretium enim laoreet. Cras turpis erat, ultricies quis ex a, consectetur accumsan dolor. Nam sed lacinia tortor, eu pellentesque odio. Duis ut finibus dolor, a congue ex. Donec pulvinar elit id enim imperdiet malesuada. Praesent consectetur egestas leo non consectetur. Vestibulum dictum nisi a rhoncus aliquam. Duis posuere venenatis efficitur. Pellentesque eget tortor quis urna fermentum tincidunt eget eu velit. Aliquam consequat purus a tellus pharetra pretium. Cras nisi urna, pellentesque nec velit at, sodales molestie purus. Sed et risus viverra, commodo purus ut, faucibus felis.</p>
          </div>
          <div>
            <h3 className='aboutSubTitle'>OUR VIRTUES</h3>
            <p className='aboutMainTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, augue sit amet porttitor aliquet, dolor ex porttitor dolor, id posuere turpis magna a justo. Maecenas vestibulum augue ut massa porta, at pretium enim laoreet. Cras turpis erat, ultricies quis ex a, consectetur accumsan dolor. Nam sed lacinia tortor, eu pellentesque odio. Duis ut finibus dolor, a congue ex. Donec pulvinar elit id enim imperdiet malesuada. Praesent consectetur egestas leo non consectetur. Vestibulum dictum nisi a rhoncus aliquam. Duis posuere venenatis efficitur. Pellentesque eget tortor quis urna fermentum tincidunt eget eu velit. Aliquam consequat purus a tellus pharetra pretium. Cras nisi urna, pellentesque nec velit at, sodales molestie purus. Sed et risus viverra, commodo purus ut, faucibus felis.</p>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className='container'>
        <div className={styles.aboutTitlePack}>
          <h2 className='aboutTitle'>How We Get Things Done</h2>
        </div>
        <div className={styles.thingsPackContainer}>
          {["discover", "develop", "design", "deliver"].map((step, index) => (
            <motion.div key={index} className={styles.thingsPack} variants={fadeUp}>
              <Image src={`/images/${step}.png`} width={500} height={500} alt={step} />
              <div className={styles.thingsTxtPack}>
                <p>{step.charAt(0).toUpperCase() + step.slice(1)}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
            </motion.div>
          ))}
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
            {["80%", "₦ 12M", "65+", "+28%"].map((stat, i) => (
              <motion.div key={i} className={styles.statsPack} variants={fadeUp}>
                <p>{stat}</p>
                <p>Streamlined Asset Design Delivery</p>
              </motion.div>
            ))}
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