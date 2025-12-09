'use client';

import { useState } from 'react';
import styles from './ProjectModal.module.css';
import toast from 'react-hot-toast';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    meetingTime: '',
    personName: '',
    email: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Project submitted successfully! Check your email for confirmation.');
        setFormData({
          projectName: '',
          description: '',
          meetingTime: '',
          personName: '',
          email: '',
          contact: ''
        });
        setTimeout(() => onClose(), 2000);
      } else {
        toast.error('Failed to submit. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        
        <h2 className={styles.title}>Start Your Project</h2>
        <p className={styles.subtitle}>Tell us about your project and we'll get back to you soon</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Project Name *</label>
            <input
              type="text"
              required
              value={formData.projectName}
              onChange={(e) => setFormData({...formData, projectName: e.target.value})}
              placeholder="Enter your project name"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Short Description *</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Brief description of your project"
              rows={4}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Preferred Meeting Time *</label>
            <input
              type="datetime-local"
              required
              value={formData.meetingTime}
              onChange={(e) => setFormData({...formData, meetingTime: e.target.value})}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Your Name *</label>
            <input
              type="text"
              required
              value={formData.personName}
              onChange={(e) => setFormData({...formData, personName: e.target.value})}
              placeholder="Enter your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email Address *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="your@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Contact Number *</label>
            <input
              type="tel"
              required
              value={formData.contact}
              onChange={(e) => setFormData({...formData, contact: e.target.value})}
              placeholder="+91 XXXXXXXXXX"
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Project'}
          </button>
        </form>
      </div>
    </div>
  );
}
