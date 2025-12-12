'use client';

import { useState, useEffect } from 'react';
import styles from './admin.module.css';

interface ProjectSubmission {
  _id: string;
  projectName: string;
  description: string;
  meetingTime: string;
  personName: string;
  email: string;
  contact: string;
  status: string;
  notes: string;
  createdAt: string;
}

interface Project {
  _id?: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  figmaLink?: string;
  liveLink?: string;
  duration: string;
  client: string;
  featured: boolean;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'submissions' | 'projects'>('submissions');
  const [submissions, setSubmissions] = useState<ProjectSubmission[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [projectForm, setProjectForm] = useState<Project>({
    title: '',
    category: 'Web Development',
    description: '',
    image: '',
    technologies: [],
    figmaLink: '',
    liveLink: '',
    duration: '',
    client: '',
    featured: false
  });

  useEffect(() => {
    if (activeTab === 'submissions') {
      fetchSubmissions();
    } else {
      fetchProjects();
    }
  }, [activeTab]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/submissions');
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateSubmissionStatus = async (id: string, status: string, notes: string) => {
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status, notes })
      });

      if (response.ok) {
        fetchSubmissions();
      }
    } catch (error) {
      console.error('Error updating submission:', error);
    }
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingProject ? `/api/projects/${editingProject._id}` : '/api/projects';
      const method = editingProject ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectForm)
      });

      if (response.ok) {
        setShowProjectForm(false);
        setEditingProject(null);
        setProjectForm({
          title: '',
          category: 'Web Development',
          description: '',
          image: '',
          technologies: [],
          figmaLink: '',
          liveLink: '',
          duration: '',
          client: '',
          featured: false
        });
        fetchProjects();
      }
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchProjects();
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const editProject = (project: Project) => {
    setEditingProject(project);
    setProjectForm(project);
    setShowProjectForm(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Admin Panel</h1>
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'submissions' ? styles.active : ''}`}
            onClick={() => setActiveTab('submissions')}
          >
            Project Submissions ({submissions.length})
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'projects' ? styles.active : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Portfolio Projects ({projects.length})
          </button>
        </div>
      </div>

      {activeTab === 'submissions' && (
        <div className={styles.content}>
          <h2>Project Submissions</h2>
          {loading ? (
            <div className={styles.loading}>Loading submissions...</div>
          ) : submissions.length === 0 ? (
            <div className={styles.empty}>No submissions found.</div>
          ) : (
            <div className={styles.submissionsGrid}>
              {submissions.map((submission) => (
                <div key={submission._id} className={styles.submissionCard}>
                  <div className={styles.submissionHeader}>
                    <h3>{submission.projectName}</h3>
                    <select 
                      value={submission.status}
                      onChange={(e) => updateSubmissionStatus(submission._id, e.target.value, submission.notes)}
                      className={styles.statusSelect}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  
                  <div className={styles.submissionDetails}>
                    <p><strong>Client:</strong> {submission.personName}</p>
                    <p><strong>Email:</strong> {submission.email}</p>
                    <p><strong>Contact:</strong> {submission.contact}</p>
                    <p><strong>Meeting Time:</strong> {new Date(submission.meetingTime).toLocaleString()}</p>
                    <p><strong>Description:</strong> {submission.description}</p>
                    <p><strong>Submitted:</strong> {new Date(submission.createdAt).toLocaleDateString()}</p>
                  </div>

                  <textarea
                    placeholder="Add notes..."
                    value={submission.notes}
                    onChange={(e) => {
                      const updatedSubmissions = submissions.map(s => 
                        s._id === submission._id ? { ...s, notes: e.target.value } : s
                      );
                      setSubmissions(updatedSubmissions);
                    }}
                    onBlur={(e) => updateSubmissionStatus(submission._id, submission.status, e.target.value)}
                    className={styles.notesTextarea}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'projects' && (
        <div className={styles.content}>
          <div className={styles.projectsHeader}>
            <h2>Portfolio Projects</h2>
            <button 
              className={styles.addBtn}
              onClick={() => setShowProjectForm(true)}
            >
              Add New Project
            </button>
          </div>

          {loading ? (
            <div className={styles.loading}>Loading projects...</div>
          ) : (
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <div key={project._id} className={styles.projectCard}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p className={styles.category}>{project.category}</p>
                    <p className={styles.client}>Client: {project.client}</p>
                    <p className={styles.duration}>Duration: {project.duration}</p>
                    {project.featured && <span className={styles.featured}>Featured</span>}
                  </div>
                  <div className={styles.projectActions}>
                    <button onClick={() => editProject(project)} className={styles.editBtn}>
                      Edit
                    </button>
                    <button onClick={() => deleteProject(project._id!)} className={styles.deleteBtn}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {showProjectForm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
              <button onClick={() => {
                setShowProjectForm(false);
                setEditingProject(null);
              }} className={styles.closeBtn}>×</button>
            </div>

            <form onSubmit={handleProjectSubmit} className={styles.projectForm}>
              <div className={styles.formGroup}>
                <label>Title *</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Category *</label>
                <select
                  value={projectForm.category}
                  onChange={(e) => setProjectForm({...projectForm, category: e.target.value})}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Description *</label>
                <textarea
                  required
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                  rows={4}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Image URL *</label>
                <input
                  type="text"
                  required
                  value={projectForm.image}
                  onChange={(e) => setProjectForm({...projectForm, image: e.target.value})}
                  placeholder="https://example.com/image.jpg or /images/project.jpg"
                />
              </div>

              <div className={styles.formGroup}>
                <label>Technologies (comma separated) *</label>
                <input
                  type="text"
                  required
                  value={projectForm.technologies.join(', ')}
                  onChange={(e) => setProjectForm({
                    ...projectForm, 
                    technologies: e.target.value.split(',').map(t => t.trim())
                  })}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Figma Link</label>
                  <input
                    type="text"
                    value={projectForm.figmaLink}
                    onChange={(e) => setProjectForm({...projectForm, figmaLink: e.target.value})}
                    placeholder="https://figma.com/..."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Live Link</label>
                  <input
                    type="text"
                    value={projectForm.liveLink}
                    onChange={(e) => setProjectForm({...projectForm, liveLink: e.target.value})}
                    placeholder="https://project-url.com"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Duration *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.duration}
                    onChange={(e) => setProjectForm({...projectForm, duration: e.target.value})}
                    placeholder="e.g., 6 weeks"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Client *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.client}
                    onChange={(e) => setProjectForm({...projectForm, client: e.target.value})}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={projectForm.featured}
                    onChange={(e) => setProjectForm({...projectForm, featured: e.target.checked})}
                  />
                  Featured Project (show on homepage)
                </label>
              </div>

              <div className={styles.formActions}>
                <button type="button" onClick={() => setShowProjectForm(false)} className={styles.cancelBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.saveBtn}>
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}