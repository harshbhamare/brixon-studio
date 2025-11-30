import Image from "next/image";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section className={styles.wrapper}>
      
      {/* --- Title --- */}
      <h2 className={styles.heading}>How we work?</h2>

      {/* --- Step Progress Row --- */}
      <div className={styles.steps}>
        <div className={styles.step}>
          <span className={styles.number}>1</span>
          <p className={styles.stepTitle}>Discovery Call</p>
          <p className={styles.stepDesc}>Understand your goals</p>
        </div>

        <div className={styles.step}>
          <span className={styles.number}>2</span>
          <p className={styles.stepTitle}>Strategy & Planning</p>
          <p className={styles.stepDesc}>Blueprint the solution</p>
        </div>

        <div className={styles.step}>
          <span className={styles.number}>3</span>
          <p className={styles.stepTitle}>Design & Build</p>
          <p className={styles.stepDesc}>UI/UX + development</p>
        </div>

        <div className={styles.step}>
          <span className={styles.number}>4</span>
          <p className={styles.stepTitle}>Launch & Optimize</p>
          <p className={styles.stepDesc}>Test, deploy & refine</p>
        </div>
      </div>

      {/* --- Cards Row --- */}
      <div className={styles.cards}>
        
        {/* Left card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Image
              src="/images/rocket.png"
              width={28}
              height={28}
              alt="Support Icon"
            />
            <h3>Growth Support & After Sales Services</h3>
          </div>

          <ul className={styles.list}>
            <li>Growth doesn’t stop after delivery — that’s where it actually starts.</li>
            <li>We offer ongoing support, free maintenance, and improvement cycles.</li>
            <li>Your system evolves, performs, and stays future-ready.</li>
          </ul>
        </div>

        {/* Right Card - Client Logos */}
        <div className={styles.card}>
          <h3 className={styles.cardTitleRight}>Our Esteemed Clients</h3>

          <div className={styles.logoGrid}>
            <Image src="/images/clients/mit-logo.png" width={150} height={50} alt="Client" />
            <Image src="/images/clients/hustler-logo.png" width={150} height={50} alt="Client" />
            <Image src="/images/clients/rivoox-logo.png" width={150} height={50} alt="Client" />
            <Image src="/images/clients/slipsub-logo.png" width={150} height={50} alt="Client" />
            <Image src="/images/clients/gradebin-logo.png" width={150} height={50} alt="Client" />
          </div>
        </div>
      </div>

    </section>
  );
}
