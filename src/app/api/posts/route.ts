import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.partyPost.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { content, author } = await request.json();

    // Check for spam
    const spamCheck = await fetch(`${process.env.BASE_URL}/api/check-spam`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    const { isSpam } = await spamCheck.json();

    if (isSpam) {
      return NextResponse.json(
        { error: 'Message detected as spam' },
        { status: 400 }
      );
    }

    const post = await prisma.partyPost.create({
      data: {
        content,
        author,
        isSpam: false,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
