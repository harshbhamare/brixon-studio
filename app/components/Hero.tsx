import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          We help businesses look better and work smarter online
        </h1>

        <p className={styles.desc}>
          Our team designs intuitive UI/UX, builds high-performing websites & apps,
          and manages your social media so your brand stays ahead.
        </p>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.primaryBtn}>
            Start a Project
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className={styles.secondaryBtn}
          >
            <span>Book a Call</span>
            <Image
              src="/images/arrow2.png"
              alt="arrow"
              width={22}
              height={22}
            />
          </a>
        </div>

      </div>
    </section>
  );
}
