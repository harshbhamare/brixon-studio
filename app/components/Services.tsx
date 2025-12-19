'use client';

import Image from "next/image";
import styles from "./Services.module.css";
import { motion } from "framer-motion";

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={styles.wrapper} id="services">
      <section className={styles.section}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            The complete platform for modern digital solutions
          </h2>
          <p className={styles.subtitle}>
            We provide end-to-end design, development, and digital growth services
            that help businesses launch, scale, and stand out in today's competitive online world.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/images/card1.jpg"
              alt="Website Design & Development"
              width={450}
              height={280}
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Website Design & Development</h3>
            <p className={styles.cardDesc}>
              Websites built for performance, SEO, and conversion - not just aesthetics.
            </p>
          </motion.div>

          <motion.div 
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/card2.jpg"
              alt="Mobile App Development"
              width={450}
              height={280}
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Mobile App Development</h3>
            <p className={styles.cardDesc}>
              Custom apps to enhance customer experience, loyalty, and automation.
            </p>
          </motion.div>

          <motion.div 
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="/images/card3.jpg"
              alt="UI/UX Design"
              width={450}
              height={280}
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>UI/UX Design</h3>
            <p className={styles.cardDesc}>
              User-centered design that feels intuitive, premium, and effortless.
            </p>
          </motion.div>

          <motion.div 
            className={`${styles.card} ${styles.full} ${styles.horizontal}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/images/card4.jpg"
              alt="Social Media Management & Influencer Marketing"
              width={450}
              height={300}
              className={styles.image}
            />

            <div className={styles.textBlock}>
              <h3 className={styles.cardTitle}>
                Social Media Management & Influencer Marketing
              </h3>

              <p className={styles.cardDesc}>
                Consistent, strategic content builds recognition - not random posts.
                Paired with authentic creator collaborations, it drives measurable growth.
              </p>

              <ul className={styles.bullets}>
                <li>Content built to attract and qualify the right audience</li>
                <li>Lead-focused campaigns, not vanity engagement</li>
                <li>Organic content that feeds paid performance</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
