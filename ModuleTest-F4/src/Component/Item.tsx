import React from 'react'
import { useParams ,useLocation} from 'react-router-dom'

function Item() {
  const {id} = useParams();
  const {post} = useLocation().state
  return (
    <div className='item'>
     <h1 className='Page_title' > Social Media App</h1>
      <div className="item_div">
        <h1 className='title_item'>Detail Page For Post With ID: <span className='span'>{post.id}</span></h1>
        <img src={`https://picsum.photos/200?random=${id}`} alt='' className='item_image' />
        <h1 className='title'>Title: <span className='span'>{post.title}</span></h1>
        <p className='userId'>UserId: <span className='span'>{post.userId}</span></p>
        <p className='body'>Body: <span className='span'>{post.body}</span></p>
      </div>
    </div>
  )
}

export default Item
