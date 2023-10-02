'use client'

import { useRef, useEffect, useState } from 'react'
import { Marktion, MarktionRef } from 'marktion';
import 'marktion/dist/style.css';
import { Mdx } from './mdx-components';
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
  const [showModel, setShowModel] = useState(false)
  const modelRef = useRef<HTMLDialogElement>(null)

  const onComment = async () => {
    const payload = {
      user_name: "nobody",
      content: commentRef.current?.getMarkdown(),
      blog: props.postId,
    }
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
  }, [props.postId])

  return (
    <>
      <div className="relative">
        <Marktion markdown={`write your comments here`} ref={commentRef} />
        <button className="btn btn-outline absolute right-0 mt-4 w-1/4" onClick={() => { modelRef.current?.showModal(); onComment() }}>Submit</button>
        <dialog id="my_modal_2" className="modal" ref={modelRef}>
          <form method="dialog" className="modal-box">
            <h3 className="text-lg font-bold">Success!</h3>
            <p className="py-4">Your comments has sent successfully(or not), reload this page to see it</p>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>

      <div className="mt-24 flex w-full flex-col">
        {comments?.map((comment) => {
          return (
              <div key={comment.id} className="grid w-full grid-cols-1 justify-items-center">
                <span className="probe">{comment.created_at.toString()}</span>
                <div className="card rounded-box grid h-20 w-1/2 place-items-center bg-base-300">{comment.content}</div>
                <hr className='my-4 w-full bg-base-300 md:my-8' />
              </div>
          )
        })}
      </div>
    </>
  )
}
