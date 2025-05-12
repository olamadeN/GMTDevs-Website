'use client';
import styles from './page.module.css';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Reach out using the form or any of our social platforms.</p>
      </div>

      <div className={styles.contactWrapper}>
        {/* Contact Form */}
        <form
          action="https://app.getform.io/forms/bjjmkjnb"
          method="POST"
          className={styles.contactForm}
        >
          <label>
            Name
            <input type="text" name="name" required placeholder="Enter your full name" />
          </label>

          <label>
            Email
            <input type="email" name="email" required placeholder="Enter your email address" />
          </label>

          <label>
            Message
            <textarea name="message" required placeholder="Your message..." rows="6" />
          </label>

          <button type="submit">Send Message</button>
        </form>

        {/* Social Media Section */}
        <div className={styles.socialSection}>
          <h3>Connect With Us</h3>
          <p>Follow us on social media or send us a message directly.</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
            <a href="https://wa.me/2348012345678" target="_blank"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </main>
  );
}
