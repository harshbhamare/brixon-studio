import styles from '../privacy-policy/policy.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy - Brixon Tech',
  description: 'Refund Policy for Brixon Tech services',
};

export default function RefundPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
        
        <h1 className={styles.title}>Refund Policy</h1>
        <p className={styles.updated}>Last Updated: December 7, 2025</p>

        <section className={styles.section}>
          <h2>1. General Policy</h2>
          <p>At Brixon Tech, we strive to deliver high-quality services. Our refund policy is designed to be fair to both our clients and our team.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Eligibility for Refunds</h2>
          <p>Refunds may be considered in the following circumstances:</p>
          <ul>
            <li>Project cancellation within 48 hours of initial payment</li>
            <li>Failure to deliver agreed-upon services</li>
            <li>Significant deviation from project scope without client approval</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Non-Refundable Items</h2>
          <p>The following are not eligible for refunds:</p>
          <ul>
            <li>Completed work and delivered projects</li>
            <li>Custom design work that has been approved</li>
            <li>Third-party services or licenses purchased on your behalf</li>
            <li>Projects in progress beyond 50% completion</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Refund Process</h2>
          <p>To request a refund:</p>
          <ul>
            <li>Contact us at refunds@brixontech.com with your project details</li>
            <li>Provide a clear explanation of the reason for the refund request</li>
            <li>Allow 5-7 business days for review</li>
            <li>Approved refunds will be processed within 10-14 business days</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Partial Refunds</h2>
          <p>In some cases, partial refunds may be offered based on:</p>
          <ul>
            <li>Percentage of work completed</li>
            <li>Resources already allocated</li>
            <li>Time invested in the project</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Dispute Resolution</h2>
          <p>If you disagree with our refund decision, we encourage open communication to reach a mutually acceptable solution.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Contact Us</h2>
          <p>For refund inquiries, please contact:</p>
          <p>Email: refunds@brixontech.com</p>
          <p>Phone: +91 XXXXXXXXXX</p>
        </section>
      </div>
    </div>
  );
}
