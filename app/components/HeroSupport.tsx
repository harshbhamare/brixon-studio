'use client';

import Image from "next/image";
import styles from "./HeroSupport.module.css";
import { motion } from "framer-motion";

export default function HeroSupport() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>
          Digital presence isn't optional anymore, <br />
          it's your <span className={styles.highlight}><i>competitive edge.</i></span>
        </h2>

        <p className={styles.subtitle}>
          We help brands move beyond basic websites and inconsistent marketing.
          With strategy-driven design, development, and growth services, we build
          digital assets that work - even when you aren't.
        </p>

        <ul className={styles.list}>
          <li>Built to convert traffic into qualified leads</li>
          <li>Engineered for speed, clarity, and user intent</li>
          <li>Optimized for search, performance, and scalability</li>
          <li>Designed for real business growth</li>
          <li>Managed with measurable performance</li>
        </ul>
      </motion.div>

      <motion.div 
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image 
          src="/images/heroSupport.png"
          alt="Team working"
          width={440}
          height={200}
          className={styles.image}
        />
      </motion.div>
    </section>
  );
}
