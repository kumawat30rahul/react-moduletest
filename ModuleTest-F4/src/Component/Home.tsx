import React, { useEffect } from "react";
import "./style.css";
import { FetchPosts } from "../Redux/postsActions.js";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home({ Data, fetchingUsers }: any) {
  const navigate = useNavigate();

  const navigation = (post: any) => {
    navigate(`/item/${post.id}`, { state: { post } });
  };

  useEffect(() => {
    fetchingUsers();
  }, []);

  return (
    <div className="Home">
      <h1 className="Page_title">Social Media App</h1>
      <div className="posts_div">
        {Data &&
          Data.map((post: any, index: any) => (
            <div
              className="posts_card"
              key={index + 1}
              onClick={() => navigation(post)}
            >
              <div className="post">
                <img
                  src={`https://picsum.photos/200?${post.id}`}
                  alt=""
                  className="post_image"
                />
              </div>
              <div className="post_info">
                <h3 className="post_title">
                  Title: {post.title.slice(0, 13) + "...."}
                </h3>
                <p className="post_id">User ID: {post.userId}</p>
                <p className="post_description">
                  Body: {post.body.slice(0, 50)}
                </p>
                <p className="read_more">Read More....</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchingUsers: () => dispatch(FetchPosts()),
  };
};
const mapStateToProps = (state: any) => {
  return {
    Data: state.post.postsData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
