import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image 
          src="/images/logo.png" 
          alt="Brixon Tech Logo" 
          width={140} 
          height={50} 
          priority
        />
      </div>

      <div className={styles.links}>
        <a href="#about">About us</a>
        <a href="#services">Our work</a>
      </div>

      <div className={styles.mobileMenu}>☰</div>
    </nav>
  );
}

