import styles from '../privacy-policy/policy.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Brixon Tech',
  description: 'Terms and Conditions for Brixon Tech services',
};

export default function TermsConditions() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
        
        <h1 className={styles.title}>Terms & Conditions</h1>
        <p className={styles.updated}>Last Updated: December 7, 2025</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Brixon Tech services, you accept and agree to be bound by these Terms and Conditions.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Services</h2>
          <p>Brixon Tech provides:</p>
          <ul>
            <li>UI/UX Design Services</li>
            <li>Web and Mobile App Development</li>
            <li>Branding and Identity Design</li>
            <li>Social Media Management</li>
            <li>Digital Marketing Solutions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Project Scope and Timeline</h2>
          <ul>
            <li>Project scope will be defined in a separate agreement</li>
            <li>Timelines are estimates and may vary based on project complexity</li>
            <li>Client cooperation is required for timely delivery</li>
            <li>Delays caused by client feedback or approvals may extend timelines</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Payment Terms</h2>
          <ul>
            <li>Payment schedules will be outlined in project agreements</li>
            <li>Advance payment may be required for project initiation</li>
            <li>Late payments may result in project suspension</li>
            <li>All prices are in INR unless otherwise stated</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Intellectual Property</h2>
          <ul>
            <li>Upon full payment, clients receive ownership of final deliverables</li>
            <li>Brixon Tech retains the right to showcase work in portfolios</li>
            <li>Pre-existing materials and tools remain our property</li>
            <li>Source code and design files transfer upon project completion</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Client Responsibilities</h2>
          <p>Clients are responsible for:</p>
          <ul>
            <li>Providing accurate project requirements</li>
            <li>Timely feedback and approvals</li>
            <li>Providing necessary content and materials</li>
            <li>Maintaining confidentiality of login credentials</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Revisions and Changes</h2>
          <ul>
            <li>Number of revisions will be specified in project agreement</li>
            <li>Additional revisions may incur extra charges</li>
            <li>Major scope changes require new agreements</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Confidentiality</h2>
          <p>We maintain strict confidentiality of all client information and project details unless authorized to share.</p>
        </section>

        <section className={styles.section}>
          <h2>9. Limitation of Liability</h2>
          <p>Brixon Tech is not liable for indirect, incidental, or consequential damages arising from our services.</p>
        </section>

        <section className={styles.section}>
          <h2>10. Termination</h2>
          <p>Either party may terminate the agreement with written notice. Fees for completed work remain due.</p>
        </section>

        <section className={styles.section}>
          <h2>11. Governing Law</h2>
          <p>These terms are governed by the laws of India. Disputes will be resolved in courts of jurisdiction.</p>
        </section>

        <section className={styles.section}>
          <h2>12. Contact Information</h2>
          <p>For questions about these Terms & Conditions:</p>
          <p>Email: legal@brixontech.com</p>
          <p>Phone: +91 XXXXXXXXXX</p>
        </section>
      </div>
    </div>
  );
}
