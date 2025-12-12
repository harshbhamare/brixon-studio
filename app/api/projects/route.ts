import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';

export async function GET(request: Request) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({ projects: [] });
    }

    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');

    let query: any = { status: 'active' };
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (featured === 'true') {
      query.featured = true;
    }

    let projectsQuery = Project.find(query).sort({ createdAt: -1 });
    
    if (limit) {
      projectsQuery = projectsQuery.limit(parseInt(limit));
    }

    const projects = await projectsQuery;
    
    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Projects fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    await dbConnect();
    
    const data = await request.json();
    const { title, category, description, image, technologies, figmaLink, liveLink, duration, client, featured } = data;

    if (!title || !category || !description || !image || !technologies || !duration || !client) {
      return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 });
    }

    const project = new Project({
      title,
      category,
      description,
      image,
      technologies,
      figmaLink,
      liveLink,
      duration,
      client,
      featured: featured || false
    });

    await project.save();
    
    return NextResponse.json({ success: true, project });
  } catch (error) {
    console.error('Project creation error:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}