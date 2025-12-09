'use client';

import Image from "next/image";
import styles from "./Portfolio.module.css";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section className={styles.section}>
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Portfolio
      </motion.h2>

      <div className={styles.grid}>
        {[1, 2, 3].map((num, index) => (
          <motion.div 
            key={num}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Image 
              src={`/images/pc${num}.jpg`}
              alt={`Project ${num}`}
              width={500} 
              height={330} 
              className={styles.image}
            />
          </motion.div>
        ))}
      </div>

      <motion.p 
        className={styles.caption}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        From Design to Production we care your Brand.
      </motion.p>
    </section>
  );
}
