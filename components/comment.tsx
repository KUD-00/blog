'use client'
import { useRef } from 'react'

import "@/styles/mdx.css"


export default function Comment() {
  const nameRef = useRef<HTMLInputElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)

  const onComment = async () => {
    const payload = {
        name: nameRef.current?.value,
        comment: commentRef.current?.value,
        //blog: props.blog,
    }
    const response = await fetch('/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
  
      const notes = await response.json();
  }


  return (
    <>
        <div className="flex flex-col">
          <input ref={nameRef} type="text" placeholder="your name" className="input-bordered input mb-8 w-full max-w-xs" />
          <textarea ref={commentRef} placeholder='input here' className="textarea-bordered textarea textarea-lg w-full max-w-xs flex-initial" ></textarea>
          <button className="btn-outline btn mt-4 w-1/4 shrink" onClick={onComment}>SUBMIT</button>
        </div>

        <div className="flex w-full flex-col">
          <div className="divider"></div>
          <div>
            <span className="badge">Name</span>
            <span className="badge text-left">7/16 13:00</span>
            <div className="card rounded-box grid h-20 place-items-center bg-base-300">content</div>
            <div className="divider"></div>
          </div>
          <div>
            <span className="badge">Name</span>
            <span className="badge text-left">7/16 13:00</span>
            <div className="card rounded-box grid h-20 place-items-center bg-base-300">content</div>
            <div className="divider"></div>
          </div>

        </div>


 
      
    </>
  )
}