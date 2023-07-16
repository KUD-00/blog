import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const comments = await getAllComments();
  return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
  const { content, blog, name } = await request.json();

  await prisma.comments.create({
    data: {
      content: content,
      blog: blog,
      name: name,
    },
  });

  const comments = await getAllComments();
  return NextResponse.json(comments);
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get('id')!);

  await prisma.comments.delete({
    where: {
      id: id,
    },
  });

  const comments = await getAllComments();
  return NextResponse.json(comments);
}

async function getAllComments() {
  const comments = await prisma.comments.findMany();
  return comments;
}