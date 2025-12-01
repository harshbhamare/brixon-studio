import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* Left Branding Section */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <Image 
              src="/images/footer/logo-white.png" 
              width={120} 
              height={40}
              alt="Company Logo" 
            />
          </div>

          <p className={styles.description}>
            More than a solution, we are the partnership that delivers enduring 
            growth and uncompromising quality.
          </p>

          <div className={styles.social}>
            <a href="#"><Image src="/images/footer/linkedin.png" width={22} height={22} alt="LinkedIn"/></a>
            <a href="#"><Image src="/images/footer/whatsapp.png" width={22} height={22} alt="Instagram"/></a>
            <a href="#"><Image src="/images/footer/instagram.png" width={22} height={22} alt="WhatsApp"/></a>
          </div>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>

          <div className={styles.linkColumn}>
            <h4>Quick Links</h4>
            <a href="#">Institute</a>
            <a href="#">Faculty</a>
            <a href="#">Student</a>
          </div>

          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <a href="#">About us</a>
            <a href="#">Support</a>
            <a href="#">Careers</a>
            <a href="#">Blogs</a>
          </div>

          <div className={styles.linkColumn}>
            <h4>Resources</h4>
            <a href="#">Privacy policy</a>
            <a href="#">Refund policy</a>
            <a href="#">Raise complain</a>
            <a href="#">Terms & Conditions</a>
          </div>

        </div>

      </div>

      {/* Bottom line */}
      <div className={styles.bottom}>
        © 2025 Brixon Tech. All rights reserved.
      </div>
    </footer>
  );
}
