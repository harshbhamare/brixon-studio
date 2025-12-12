import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ProjectSubmission from '@/models/ProjectSubmission';

export async function GET() {
  try {
    await dbConnect();
    
    const submissions = await ProjectSubmission.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Submissions fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await dbConnect();
    
    const { id, status, notes } = await request.json();
    
    const submission = await ProjectSubmission.findByIdAndUpdate(
      id,
      { status, notes },
      { new: true }
    );
    
    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error('Submission update error:', error);
    return NextResponse.json({ error: 'Failed to update submission' }, { status: 500 });
  }
}