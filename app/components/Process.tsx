'use client';

import Image from "next/image";
import styles from "./Process.module.css";
import { motion } from "framer-motion";

export default function WorkSection() {
  return (
    <section className={styles.section} id="about">
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        How we work?
      </motion.h2>

      <div className={styles.timeline}>
        {[
          { 
            num: "01", 
            title: "Discovery Call", 
            desc: "Understand your goals",
            details: "We dive deep into your business objectives, target audience, and project requirements to create a solid foundation.",
            iconPath: "/images/process/discovery.png"
          },
          { 
            num: "02", 
            title: "Strategy & Planning", 
            desc: "Blueprint the solution",
            details: "Detailed project roadmap, technology stack selection, and timeline planning with clear milestones.",
            iconPath: "/images/process/strategy.png"
          },
          { 
            num: "03", 
            title: "Design & Build", 
            desc: "UI/UX + development",
            details: "Iterative design process with regular feedback loops, followed by clean, scalable development.",
            iconPath: "/images/process/design.png"
          },
          { 
            num: "04", 
            title: "Launch & Optimize", 
            desc: "Test, deploy & refine",
            details: "Thorough testing, smooth deployment, and continuous optimization based on real user data.",
            iconPath: "/images/process/launch.png"
          }
        ].map((step, i) => (
          <motion.div 
            className={styles.step} 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.num}</div>
              <div className={styles.stepIcon}>
                <Image 
                  src={step.iconPath} 
                  alt={step.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              <p className={styles.stepDetails}>{step.details}</p>
            </div>
            {i < 3 && <div className={styles.connector}></div>}
          </motion.div>
        ))}
      </div>

      <div className={styles.cardGrid}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.cardHeader}>
            <Image src="/images/rocket.png" alt="Icon" width={26} height={26} />
            <h3>Growth Support & After Sales Services</h3>
          </div>

          <ul className={styles.list}>
            <li>Growth doesn't stop after delivery - that's where it starts.</li>
            <li>Ongoing support, free maintenance & improvement cycles.</li>
            <li>Ensures your system evolves and stays future-ready.</li>
          </ul>
        </motion.div>

        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.clientTitle}>Our Esteemed Clients</h3>
          <div className={styles.logos}>
            <Image src="/images/clients/mit-logo.png" width={150} height={45} alt="client" />
            <Image src="/images/clients/hustler-logo.png" width={150} height={45} alt="client" />
            <Image src="/images/clients/rivoox-logo.png" width={150} height={45} alt="client" />
            <Image src="/images/clients/gradebin-logo.png" width={150} height={45} alt="client" />
            <Image src="/images/clients/slipsub-logo.png" width={130} height={50} alt="client" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
