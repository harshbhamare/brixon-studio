'use client';

import styles from "./Cta.module.css";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

export default function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookCall = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss a project with Brixon Tech. Can we schedule a call?");
    window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank');
  };

  return (
    <section className={styles.wrapper}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Let's Build Something Amazing Together</h2>
          <p className={styles.subtitle}>
            Bring your ideas to life with expert UI/UX, development, branding & automation.
          </p>

          <div className={styles.actions}>
            <button onClick={() => setIsModalOpen(true)} className={styles.primaryBtn}>Get Started</button>
            <button onClick={handleBookCall} className={styles.secondaryBtn}>
              Book a Call
            </button>
          </div>
        </div>
      </motion.div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
