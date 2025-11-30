import Image from "next/image";
import styles from "./HeroSupport.module.css";

export default function HeroSupport() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Digital presence isn’t optional anymore, <br />
          it’s your <span className={styles.highlight}><i>competitive edge.</i></span>
        </h2>

        <p className={styles.subtitle}>
          We help brands move beyond basic websites and inconsistent marketing.
          With strategy-driven design, development, and growth services, we build
          digital assets that work — even when you aren’t.
        </p>

        <ul className={styles.list}>
          <li>Built for conversions</li>
          <li>Designed for real business growth</li>
          <li>Managed with measurable performance</li>
          <li>Designed for real business growth</li>
          <li>Managed with measurable performance</li>
        </ul>
      </div>

      <div className={styles.imageWrapper}>
        <Image 
          src="/images/heroSupport.png"
          alt="Team working"
          width={440}
          height={200}
          className={styles.image}
        />
      </div>
    </section>
  );
}
