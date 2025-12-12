'use client';

import styles from "./Cta.module.css";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

export default function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookCall = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss a project with Brixon Tech. Can we schedule a call?");
    window.open(`https://wa.me/917387883221?text=${message}`, '_blank');
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.section}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.textBlock}>
            <h2 className={styles.title}>Ready to transform your digital presence?</h2>
            <p className={styles.subtitle}>
              From concept to launch, we build digital solutions that drive real business growth. 
              Let's discuss how we can help your brand stand out and succeed online.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>•</span>
                <span>Fast delivery & quality results</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>•</span>
                <span>Strategic design & development</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>•</span>
                <span>Measurable business growth</span>
              </div>
            </div>

            <div className={styles.actions}>
              <button onClick={() => setIsModalOpen(true)} className={styles.primaryBtn}>
                Start Your Project
              </button>
              <button onClick={handleBookCall} className={styles.secondaryBtn}>
                Book a Free Consultation
              </button>
            </div>

            <p className={styles.note}>
              No commitment required • Free consultation • Quick response within 24 hours
            </p>
          </div>
        </motion.div>
      </section>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
