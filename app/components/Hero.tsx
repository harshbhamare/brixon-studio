'use client';

import styles from "./Hero.module.css";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookCall = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss a project with Brixon Tech. Can we schedule a call?");
    window.open(`https://wa.me/917387883221?text=${message}`, '_blank');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We help businesses look better and work smarter online
        </motion.h1>

        <motion.p 
          className={styles.desc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our team designs intuitive UI/UX, builds high-performing websites & apps,
          and manages your social media so your brand stays ahead.
        </motion.p>

        <motion.div 
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button onClick={() => setIsModalOpen(true)} className={styles.primaryBtn}>
            Start a Project
          </button>

          <button onClick={handleBookCall} className={styles.secondaryBtn}>
            <span>Book a Call</span>
            <Image
              src="/images/arrow2.png"
              alt="arrow"
              width={22}
              height={22}
            />
          </button>
        </motion.div>
      </motion.div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
