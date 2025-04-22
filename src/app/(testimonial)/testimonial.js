"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './testimonial.module.css';

const testimonials = [
  {
    name: 'Clement King',
    role: 'Artisan',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus, ultricies sed augue lacinia, gravida laoreet neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis lorem at sapien tempor ultricies sit amet vel erat. Nam dignissim felis eget purus porta.',
    active: true,
  },
  {
    name: 'Ladipo Isreal',
    role: 'Designer',
    message:
      'Ladipo has been an excellent team member. Very professional and always delivers quality designs. Highly recommend.',
    active: false,
  },
  {
    name: 'David Park',
    role: 'Developer',
    message:
      'Working with David was a pleasure. He is skilled and communicates well throughout every project phase.',
    active: false,
  },
  {
    name: 'Micheal Lane',
    role: 'Marketer',
    message:
      'Micheal brought in creative strategies that elevated our campaign results. He is a true asset to any team.',
    active: false,
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [activeIndex]);

  return (
    <div className={styles.container}>
      {/* Left side - names */}
      <div className={styles.nameList}>
        {testimonials.map((t, index) => (
          <button
            key={t.name}
            onClick={() => setActiveIndex(index)}
            className={`${styles.nameButton} ${index === activeIndex ? styles.active : ''} ${index === 3 ? styles.disabled : ''}`}
            disabled={index === 3}
          >
            <span>{t.name}</span>
           
            <span className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Right side - testimonial */}
      <motion.div
        className={styles.testimonialBox}
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        ref={scrollRef}
      >
        <div className={styles.boxNamePack}>
            <h3 className={styles.name}>{testimonials[activeIndex].name}</h3>
            <p className={styles.role}>{testimonials[activeIndex].role}</p>
        </div>
        
        <div className={styles.messageContainer}>
          <div className={styles.border} />
          <p className={styles.message}>{testimonials[activeIndex].message}</p>
        </div>
       
      </motion.div>
    </div>
  );
}
