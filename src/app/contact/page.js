'use client';
import styles from './page.module.css';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  const formSubmit = "https://app.getform.io/f/bjjmkjnb";
  return (
    <main className={styles.contactPage}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Reach out using the form or any of our social platforms.</p>
      </div>

      <div className={styles.contactWrapper}>
        {/* Contact Form */}
        <form
          action="https://getform.io/f/bjjmkjnb"
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

          <button type="submit">Tell us your idea ...</button>
        </form>

        {/* Social Media Section */}
        <div className={styles.socialSection}>
          <h3>Connect With Us</h3>
          <p>Follow us on social media or send us a message directly.</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/people/GMTDevs/61571406335662/" target="_blank"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
            <a href="https://wa.me/2347011927970" target="_blank"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </main>
  );
}
