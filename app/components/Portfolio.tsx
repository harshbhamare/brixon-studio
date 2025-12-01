import Image from "next/image";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <section className={styles.section}>
      
      <h2 className={styles.heading}>Portfolio</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Image 
            src="/images/pc1.jpg" 
            alt="Project 1" 
            width={500} 
            height={330} 
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <Image 
            src="/images/pc2.jpg" 
            alt="Project 2" 
            width={500} 
            height={330} 
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <Image 
            src="/images/pc3.jpg" 
            alt="Project 3" 
            width={500} 
            height={330} 
            className={styles.image}
          />
        </div>
      </div>

      <p className={styles.caption}>
        From Design to Production we care your Brand.
      </p>
    </section>
  );
}
