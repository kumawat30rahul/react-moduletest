import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { FetchUsers } from '../Redux/postsActions.js'
import './style.css'
import { useNavigate } from 'react-router-dom'

function Home({postsData,FetchUsers}:any) {
    useEffect(() => {
      FetchUsers();
      }, [])
    
    const navigate = useNavigate();
    const navigation=(post:any) => {
      navigate(`/item/${post.id}`,{ state: { post } })
    }


  return postsData.loading ? (
    <h1>Loading...</h1>
  ) : postsData.error ? (
    <h1>Data Not Found</h1>
  ) : (
    <div className="Home">
      <h1 className='Page_title' > Social Media App</h1>
      <div className="posts_div">
      
      {postsData && postsData.map((post:any,index:any)=>(
          <div className='posts_card' key={index} onClick={()=>navigation(post)}>
              <div className="post">
                  <img src={`https://picsum.photos/200?random=${post.id}`} alt="" className="post_image" />
              </div>
              <div className="post_info">
                  <h3 className="post_title">Title: {post.title.slice(0,13) + "..."}</h3>
                  <p className="post_id">User ID: {post.userId}</p>
                  <p className="post_description">Body: {post.body.slice(0,50)}</p>
                  <p className='read_more'>Read More...</p>
          </div>
          </div>
      ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state:any) =>{
  return {
    postsData: state.post.posts
  }
}
const mapDispatchToProps = (dispatch:any) => {
  return {
    FetchUsers: () => dispatch(FetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home) 