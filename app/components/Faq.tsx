"use client";
import { useState } from "react";
import styles from "./Faq.module.css";

const faqData = [
  { q: "How long does a project take?", a: "Most websites take 2–4 weeks depending on features and content delivery. Apps and full systems may take longer based on complexity." },
  { q: "Do you provide hosting and domain?", a: "We guide you in selecting the best hosting and domain provider. Hosting/domain costs are separate unless included in a custom plan." },
  { q: "Do you offer support after the project is complete?", a: "Yes. Each plan includes post-launch support. You can also choose optional monthly maintenance if required." },
  { q: "Do you work with only cafés and restaurants?", a: "No — we work with startups, service businesses, creators, and companies across industries." },

  { q: "What do you need from us before starting?", a: "Brand assets (logo, colors, photos), basic content, and business information. If you don’t have these, we help you create them." },
  { q: "Can we request revisions?", a: "Yes. Each plan includes a defined revision cycle to ensure balance between creativity and timelines." },
  { q: "What are the payment terms?", a: "50% advance to start, 50% after completion before deployment. Negotiable" },
  { q: "Can we upgrade later?", a: "Absolutely. You can start small and scale when ready." }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>FAQ’s</h2>
      <p className={styles.subtext}>
        Clear your doubts before, so that we can directly jump to build and grow your business.
      </p>

      <div className={styles.grid}>
        {faqData.map((faq, i) => (
          <div key={i} className={styles.item}>
            <button className={styles.question} onClick={() => toggle(i)}>
              {faq.q}
              <span className={`${styles.arrow} ${openIndex === i ? styles.open : ""}`}>⌄</span>
            </button>

            <div
              className={`${styles.answerWrapper} ${openIndex === i ? styles.show : ""}`}
            >
              <p className={styles.answer}>{faq.a}</p>
            </div>

            <div className={styles.line}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
