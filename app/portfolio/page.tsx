'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './portfolio.module.css';
import SafeImage from '../components/SafeImage';

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

const categories = [
  'All',
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'E-commerce',
  'SaaS'
];

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data.projects || []);
      setFilteredProjects(data.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback data
      const fallbackProjects = [
        {
          _id: '1',
          title: "E-Commerce Platform",
          category: "Web Development",
          image: "/images/pc1.jpg",
          description: "A modern e-commerce platform built with Next.js and Stripe integration.",
          technologies: ["Next.js", "React", "Stripe", "MongoDB"],
          duration: "6 weeks",
          client: "Fashion Retailer"
        },
        {
          _id: '2',
          title: "SaaS Dashboard",
          category: "UI/UX Design",
          image: "/images/pc2.jpg",
          description: "Comprehensive dashboard design for a SaaS analytics platform.",
          technologies: ["Figma", "React", "Chart.js"],
          duration: "4 weeks",
          client: "Tech Startup"
        },
        {
          _id: '3',
          title: "Mobile Banking App",
          category: "Mobile App",
          image: "/images/pc3.jpg",
          description: "Secure mobile banking application with biometric authentication.",
          technologies: ["React Native", "Node.js"],
          duration: "8 weeks",
          client: "Financial Institution"
        }
      ];
      setProjects(fallbackProjects);
      setFilteredProjects(fallbackProjects);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Our Portfolio</h1>
          <p className={styles.subtitle}>
            Explore our complete collection of projects across different categories
          </p>
        </motion.div>

        <motion.div 
          className={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {loading ? (
          <div className={styles.loading}>Loading projects...</div>
        ) : (
          <motion.div 
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  className={styles.card}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={styles.imageWrapper}>
                    <SafeImage
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className={styles.image}
                    />
                    <div className={styles.overlay}>
                      <span className={styles.viewProject}>View Details</span>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>
                      {project.description.length > 100 
                        ? `${project.description.substring(0, 100)}...` 
                        : project.description
                      }
                    </p>
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
            </AnimatePresence>
          </motion.div>
        )}

        {filteredProjects.length === 0 && !loading && (
          <div className={styles.noProjects}>
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Project Modal */}
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

                {(selectedProject.figmaLink || selectedProject.liveLink) && (
                  <div className={styles.projectLinks}>
                    {selectedProject.figmaLink && (
                      <a 
                        href={selectedProject.figmaLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.linkBtn}
                      >
                        View Design
                      </a>
                    )}
                    {selectedProject.liveLink && (
                      <a 
                        href={selectedProject.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${styles.linkBtn} ${styles.primary}`}
                      >
                        Live Project
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}