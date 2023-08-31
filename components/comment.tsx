'use client'

import { useRef, useEffect, useState } from 'react'
import { Marktion, MarktionRef } from 'marktion';
import 'marktion/dist/style.css';
// import { trpc } from '@/client/index'

import "@/styles/mdx.css"

interface CommentPageProps {
  postId: string
}

interface Comment {
  id: number;
  blog: string;
  user_name: string;
  content: string;
  created_at: string;
}

export default function Comment(props: CommentPageProps) {
  const nameRef = useRef<HTMLInputElement>(null)
  const commentRef = useRef<MarktionRef>(null)
  const [comments, setComments] = useState<Comment[] | null>([])

  const onComment = async () => {
    const payload = {
        user_name: "nobody",
        content: commentRef.current?.getMarkdown(),
        blog: props.postId,
    }
    console.log(payload)
    const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  }

  useEffect(() => {

    const fetchData = async () => {
      // const comments = await trpc.commentBySlug.query(props.postId)
       const response = await fetch(`/api/comments?blog=${props.postId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const comments = await response.json();
      setComments(comments)
    };

    fetchData();
  }, [])

  return (
    <>
        <div className="relative">
        <Marktion markdown={`write your comments here`} ref={commentRef} />
        <button className="btn-outline btn absolute right-0 mt-4 w-1/4" onClick={onComment}>SUBMIT</button>
        </div>

        <div className="mt-8 flex w-full flex-col">
        {comments?.map((comment) => {
          return (
            <>
              <div className="grid w-full grid-cols-1 justify-items-center">
                <span className="probe">{comment.created_at.toString()}</span>
                <div className="card rounded-box grid h-20 w-1/2 place-items-center bg-base-300">{comment.content}</div>
                <div className="divider"></div>
              </div>
            </>
          )
        })}
        </div>
    </>
  )
}
