'use client';

import Image from "next/image";
import styles from "./Portfolio.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";

interface Project {
  _id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  figmaLink?: string;
  liveLink?: string;
  duration: string;
  client: string;
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    try {
      const response = await fetch('/api/projects?featured=true&limit=3');
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to static data if API fails
      setProjects([
        {
          _id: '1',
          title: "E-Commerce Platform",
          category: "Web Development",
          image: "/images/pc1.jpg",
          description: "A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, user authentication, and admin dashboard.",
          technologies: ["Next.js", "React", "Stripe", "MongoDB", "Tailwind CSS"],
          figmaLink: "https://figma.com/project1",
          liveLink: "https://project1.com",
          duration: "6 weeks",
          client: "Fashion Retailer"
        },
        {
          _id: '2',
          title: "SaaS Dashboard",
          category: "UI/UX Design",
          image: "/images/pc2.jpg",
          description: "Comprehensive dashboard design for a SaaS analytics platform. Focused on data visualization, user experience, and responsive design across all devices.",
          technologies: ["Figma", "React", "Chart.js", "Material-UI", "TypeScript"],
          figmaLink: "https://figma.com/project2",
          liveLink: "https://project2.com",
          duration: "4 weeks",
          client: "Tech Startup"
        },
        {
          _id: '3',
          title: "Mobile Banking App",
          category: "Mobile App",
          image: "/images/pc3.jpg",
          description: "Secure mobile banking application with biometric authentication, transaction history, bill payments, and real-time notifications.",
          technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Biometric API"],
          figmaLink: "https://figma.com/project3",
          liveLink: "https://project3.com",
          duration: "8 weeks",
          client: "Financial Institution"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Portfolio
      </motion.h2>

      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Explore our recent projects and see how we transform ideas into digital reality
      </motion.p>

      {loading ? (
        <div className={styles.loading}>Loading projects...</div>
      ) : (
        <>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <motion.div 
                key={project._id}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => setSelectedProject(project)}
              >
            <div className={styles.imageWrapper}>
              <SafeImage 
                src={project.image}
                alt={project.title}
                width={500} 
                height={330} 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.viewProject}>View Project</span>
                  <span className={styles.category}>{project.category}</span>
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description.substring(0, 80)}...</p>
              <div className={styles.techStack}>
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className={styles.techTag}>+{project.technologies.length - 3}</span>
                )}
              </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={styles.viewMoreContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/portfolio" className={styles.viewMoreBtn}>
              View All Projects
            </Link>
          </motion.div>
        </>
      )}

      <motion.p 
        className={styles.caption}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        From Design to Production we care for your Brand.
      </motion.p>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className={styles.modalImage}>
                <SafeImage 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  className={styles.modalImg}
                />
              </div>

              <div className={styles.modalDetails}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalCategory}>{selectedProject.category}</span>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                </div>

                <p className={styles.modalDescription}>{selectedProject.description}</p>

                <div className={styles.projectInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Client:</span>
                    <span className={styles.infoValue}>{selectedProject.client}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Duration:</span>
                    <span className={styles.infoValue}>{selectedProject.duration}</span>
                  </div>
                </div>

                <div className={styles.technologies}>
                  <h4 className={styles.techTitle}>Technologies Used:</h4>
                  <div className={styles.techList}>
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.projectLinks}>
                  <a 
                    href={selectedProject.figmaLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    View Design
                  </a>
                  <a 
                    href={selectedProject.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${styles.linkBtn} ${styles.primary}`}
                  >
                    Live Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
