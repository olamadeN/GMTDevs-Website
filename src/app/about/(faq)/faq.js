"use client"
import { useState } from 'react';
import styles from './faq.module.css';

const FaqItem = ({ question, answer }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.faqItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.header}>
        <span className={styles.question}>{question}</span>
        <span className={styles.icon}>{isHovered ? '-' : '+'}</span>
      </div>
      <div className={`${styles.answer} ${isHovered ? styles.show : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
