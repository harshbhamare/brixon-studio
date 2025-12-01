import Image from "next/image";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.section}>
        {/* Top Text Block */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            The complete platform for modern digital solutions
          </h2>
          <p className={styles.subtitle}>
            We provide end-to-end design, development, and digital growth services
            that help businesses launch, scale, and stand out in today’s competitive online world.
          </p>
        </div>

        {/* Service Cards */}
        <div className={styles.grid}>

          {/* Card 1 */}
          <div className={styles.card}>
            <Image
              src="/images/card1.jpg"
              alt="Website Design & Development"
              width={450}
              height={280}
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Website Design & Development</h3>
            <p className={styles.cardDesc}>
              Websites built for performance, SEO, and conversion — not just aesthetics.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
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
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
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
          </div>

          {/* Full Width Card */}
          <div className={`${styles.card} ${styles.full} ${styles.horizontal}`}>
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
                <li>Built for conversions</li>
                <li>Designed for real business growth</li>
                <li>Managed with measurable performance</li>
              </ul>
            </div>
          </div>


        </div>
      </section>
    </section>
  );
}
