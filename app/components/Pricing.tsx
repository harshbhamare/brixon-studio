import Image from "next/image";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.section}>

        {/* Heading */}
        <h2 className={styles.heading}>Unleash your brand</h2>
        <p className={styles.description}>
          Whether you're establishing your brand, upgrading your digital functionality, or aiming
          for a fully automated ecosystem, these packages give you a clear roadmap.<br />
          Start where you are, scale when you're ready, and grow without friction.
        </p>

        {/* Pricing Cards */}
        <div className={styles.grid}>

          {/* Card 1 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Advanced</h3>
            <p className={styles.cardSubtitle}>
              For brands that need a solid online presence with clean design and essential functionality. Learn More:<br /><br />
              <span className={styles.small}>Starting from</span>
              <span className={styles.price}>6,999/-</span>
            </p>

            <h4 className={styles.sectionLabel}>Everything :</h4>
         
            <ul className={styles.list}>
              {[
                "Modern, responsive website (up to 5 core pages)",
                "Custom UI aligned with your brand identity",
                "Mobile-first design",
                "Basic SEO setup for search visibility",
                "Contact form + inquiries to email",
                "Clickable CTA buttons",
                "1 improvement cycle + free maintenance*"
              ].map((item, i) => (
                <li key={i}>
                  <Image src="/images/tick.png" width={18} height={18} alt="tick" />
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* Card 2 (Highlighted) */}
          <div className={`${styles.card} ${styles.featured}`}>
            <h3 className={styles.cardTitle}>Professional</h3>
            <p className={styles.cardSubtitle}>
              Built for businesses that want conversions - bookings, engagement, and smarter user experience.<br /><br />
              <span className={styles.small}>Starting from</span>
              <span className={styles.price}>14,999/-</span>
            </p>

            <h4 className={styles.sectionLabel}>Everything in Advanced, plus:</h4>

            <ul className={styles.list}>
              {[
                "Smart booking system (appointments, events, or inquiries)",
                "Lead forms with automated responses",
                "Payment Gateway",
                "Analytics Dashboard",
                "Social Media Setup + Influencer Marketing*",
                "2 improvement cycle + free maintenance*",
              ].map((item, i) => (
                <li key={i}>
                  <Image src="/images/tick.png" width={18} height={18} alt="tick" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Enterprise</h3>
            <p className={styles.cardSubtitle}>
              Full-scale automation, integrations, and marketing systems designed for growth at speed.<br /><br />
              <span className={styles.small}>Starting from</span>
              <span className={styles.price}>Custom</span>
            </p>

            <h4 className={styles.sectionLabel}>Everything in Professional, plus:</h4>

            <ul className={styles.list}>
              {[
                "Role-based access or internal dashboards*",
                "Priority support and dedicated communication channel",
                "Continuous improvement cycles + extended maintenance*",
                "Structured Digital Marketing",
                "Influencer Marketing",
              ].map((item, i) => (
                <li key={i}>
                  <Image src="/images/tick.png" width={18} height={18} alt="tick" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </section>
  );
}
