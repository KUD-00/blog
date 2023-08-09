import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams
  const blog = searchParams.get("blog")

  if (blog != null) {
    const comments = await prisma.comments.findMany({
      where: {
        blog: blog,
      },
    })
    return NextResponse.json(comments)
  }
}

export async function POST(request: NextRequest) {
  const { content, blog, user_name } = await request.json()

  await prisma.comments.create({
    data: {
      content: content,
      blog: blog,
      user_name: user_name,
    },
  })

  const comments = await getAllComments()
  return NextResponse.json(comments)
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!)

  await prisma.comments.delete({
    where: {
      id: id,
    },
  })

  const comments = await getAllComments()
  return NextResponse.json(comments)
}

async function getAllComments() {
  const comments = await prisma.comments.findMany()
  return comments
}