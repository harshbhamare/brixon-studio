import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Let’s Build Something Amazing Together</h2>
          <p className={styles.subtitle}>
            Bring your ideas to life with expert UI/UX, development, branding & automation.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryBtn}>Get Started</a>
            <a href="https://wa.me/91XXXXXXXXXX" className={styles.secondaryBtn}>
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
