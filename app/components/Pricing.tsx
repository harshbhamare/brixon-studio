'use client';

import Image from "next/image";
import styles from "./Pricing.module.css";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.section}>
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Unleash your brand
        </motion.h2>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Whether you're establishing your brand, upgrading your digital functionality, or aiming
          for a fully automated ecosystem, these packages give you a clear roadmap.<br />
          Start where you are, scale when you're ready, and grow without friction.
        </motion.p>

        <div className={styles.grid}>
          {[
            {
              title: "Advanced",
              subtitle: "For brands that need a solid online presence with clean design and essential functionality. Learn More:",
              price: "6,999/-",
              items: [
                "Modern, responsive website (up to 5 core pages)",
                "Custom UI aligned with your brand identity",
                "Mobile-first design",
                "Basic SEO setup for search visibility",
                "Contact form + inquiries to email",
                "Clickable CTA buttons",
                "1 improvement cycle + free maintenance*"
              ],
              featured: false
            },
            {
              title: "Professional",
              subtitle: "Built for businesses that want conversions - bookings, engagement, and smarter user experience.",
              price: "14,999/-",
              items: [
                "Smart booking system (appointments, events, or inquiries)",
                "Lead forms with automated responses",
                "Payment Gateway",
                "Analytics Dashboard",
                "Social Media Setup + Influencer Marketing*",
                "2 improvement cycle + free maintenance*",
              ],
              featured: true
            },
            {
              title: "Enterprise",
              subtitle: "Full-scale automation, integrations, and marketing systems designed for growth at speed.",
              price: "Custom",
              items: [
                "Role-based access or internal dashboards*",
                "Priority support and dedicated communication channel",
                "Continuous improvement cycles + extended maintenance*",
                "Structured Digital Marketing",
                "Influencer Marketing",
              ],
              featured: false
            }
          ].map((card, index) => (
            <motion.div 
              key={index}
              className={`${styles.card} ${card.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardSubtitle}>
                {card.subtitle}<br /><br />
                <span className={styles.small}>Starting from</span>
                <span className={styles.price}>{card.price}</span>
              </p>

              <h4 className={styles.sectionLabel}>
                {index === 0 ? "Everything :" : `Everything in ${index === 1 ? "Advanced" : "Professional"}, plus:`}
              </h4>
           
              <ul className={styles.list}>
                {card.items.map((item, i) => (
                  <li key={i}>
                    <Image src="/images/tick.png" width={18} height={18} alt="tick" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
