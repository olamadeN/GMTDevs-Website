"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './testimonial.module.css';

const testimonials = [
  {
    name: 'Isaac Kayode',
    role: 'Product Designer',
    message:
      'GMTDevs delivered a pixel-perfect implementation ahead of schedule. Their attention to detail and clear communication made the whole process easy. Highly recommend for anyone needing quality web development.',
    active: true,
  },
  {
    name: 'Dami',
    role: 'Designer',
    message:
      'I was referred to GMTDevs by a colleague, and they still managed to exceed expectations. From the first chat, it was clear they knew what they were doing. They took my ideas, added their touch, and delivered a clean, well-done website ahead of schedule. Really glad I followed that recommendation.',
    active: false,
  },
  {
    name: 'Edward',
    role: 'Developer',
    message:
      'GMTDevs did a good job on my site. Clean work, no hassle.',
    active: false,
  },
  {
    name: 'Micheal',
    role: 'Marketer',
    message:
      'Working with GMTDevs was an absolute breeze. They took my design and brought it to life with perfect precision. Communication was smooth, they delivered ahead of schedule, and the final result was exactly what I had in mind — maybe even better. Highly recommend!',
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
