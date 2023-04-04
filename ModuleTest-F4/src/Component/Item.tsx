import React from 'react'
import { useParams ,useLocation} from 'react-router-dom'

function Item(){
  const location = useLocation();
  const {post} = location.state
  const {id} = useParams();


  return (
    <div className='item'>
     <h1 className='Page_title' >Social Media App</h1>
      <div className="item_div">
        <h1 className='title_item'>Details For the Post which has the ID: {post.id}</h1>
        <img src={`https://picsum.photos/200?${post.id}`} alt='' className='item_image' />
        <h1 className='title'>Title: {post.title}</h1>
        <p className='userId'>UserId: {post.userId}</p>
        <p className='body'>Body: {post.body}</p>
      </div>
    </div>
  )
}

export default Item
