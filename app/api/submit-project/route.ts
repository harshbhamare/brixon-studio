import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import ProjectSubmission from '@/models/ProjectSubmission';

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const data = await request.json();
    const { projectName, description, meetingTime, personName, email, contact } = data;

    if (!projectName || !description || !meetingTime || !personName || !email || !contact) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Save to database
    const submission = new ProjectSubmission({
      projectName,
      description,
      meetingTime: new Date(meetingTime),
      personName,
      email,
      contact
    });

    await submission.save();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Project Submission Confirmation - Brixon Tech',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #101A29;">Thank You for Your Submission!</h2>
          <p>Dear ${personName},</p>
          <p>We have received your project submission and our team will review it shortly.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Project Details:</h3>
            <p><strong>Project Name:</strong> ${projectName}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Preferred Meeting Time:</strong> ${new Date(meetingTime).toLocaleString()}</p>
            <p><strong>Contact:</strong> ${contact}</p>
          </div>
          
          <p>We'll get back to you within 24-48 hours.</p>
          <p>Best regards,<br/>Brixon Tech Team</p>
        </div>
      `
    };

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Project Submission: ${projectName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #101A29;">New Project Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Project Information:</h3>
            <p><strong>Project Name:</strong> ${projectName}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Preferred Meeting Time:</strong> ${new Date(meetingTime).toLocaleString()}</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Client Information:</h3>
            <p><strong>Name:</strong> ${personName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
