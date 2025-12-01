import Image from "next/image";
import styles from "./Process.module.css";

export default function WorkSection() {
  return (
    <section className={styles.section}>

      {/* --- Heading --- */}
      <h2 className={styles.heading}>How we work?</h2>

      {/* --- Timeline --- */}
      <div className={styles.timeline}>
        {[
          { num: "1", title: "Discovery Call", desc: "Understand your goals" },
          { num: "2", title: "Strategy & Planning", desc: "Blueprint the solution" },
          { num: "3", title: "Design & Build", desc: "UI/UX + development" },
          { num: "4", title: "Launch & Optimize", desc: "Test, deploy & refine" }
        ].map((step, i) => (
          <div className={styles.step} key={i}>
            <div className={styles.circle}>{step.num}</div>
            <p className={styles.stepTitle}>{step.title}</p>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* --- Cards Section --- */}
      <div className={styles.cardGrid}>

        {/* Left Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Image src="/images/rocket.png" alt="Icon" width={26} height={26} />
            <h3>Growth Support & After Sales Services</h3>
          </div>

          <ul className={styles.list}>
            <li>Growth doesn’t stop after delivery - that’s where it starts.</li>
            <li>Ongoing support, free maintenance & improvement cycles.</li>
            <li>Ensures your system evolves and stays future-ready.</li>
          </ul>
        </div>

        {/* Right Card */}
        <div className={styles.card}>
          <h3 className={styles.clientTitle}>Our Esteemed Clients</h3>
          <div className={styles.logos}>
            <Image src="/images/clients/mit-logo.png" width={150} height={45} alt="client" />
            <Image src="/images/clients/hustler-logo.png" width={150} height={45} alt="client" />
            <Image src="/images/clients/rivoox-logo.png" width={150} height={45} alt="client" />
            <Image src="/images/clients/gradebin-logo.png" width={150} height={45} alt="client" />
            <Image src="/images/clients/slipsub-logo.png" width={130} height={50} alt="client" />
          </div>
        </div>

      </div>
    </section>

    
  );
}
