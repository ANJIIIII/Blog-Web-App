import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px] w-11/12 '>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold text-lg'>{post.title}</span>
      </NavLink>
      <p>
        By
        <span className='italic'>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm'> Posted on {post.date} </p>
      <p className='text-sm mt-[10px]'> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-500 underline font-bold  '>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
