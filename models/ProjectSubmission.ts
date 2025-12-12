import mongoose from 'mongoose';

const ProjectSubmissionSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  meetingTime: {
    type: Date,
    required: true,
  },
  personName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed', 'cancelled'],
    default: 'new'
  },
  notes: {
    type: String,
    default: ''
  }
}, {
  timestamps: true,
});

export default mongoose.models.ProjectSubmission || mongoose.model('ProjectSubmission', ProjectSubmissionSchema);