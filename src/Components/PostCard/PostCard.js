import React from "react"
import { Link } from "react-router-dom"

export default function PostCard({ post, img }) {
  return (
    <>
      <div className='home__blog--item'>
        <div
          className='img bg'
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className='info'>
          <p className='date'>{post.date}</p>

          <Link to={`/blog/${post.id}`}>
            <h3>{post.title}</h3>
            <button className='btn '>Continue</button>
          </Link>
        </div>
      </div>
    </>
  )
}
