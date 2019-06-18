import React from 'react';

const PostFeed = (props) => {
  return (
    <div className="post-container">
      {props.data.map((post, index) => (
        <div className="post" key={post.username + index}>
          <div>
            <img className="user-icon" src={post.icon}/>
            {post.username}
          </div>
          <div className="post-image">
            <img src={post.image}/>
          </div>
          <div className="post-options">
            <button className="far fa-thumbs-up"></button>
            <button className="far fa-star"></button>
            <button className="far fa-comment-alt"></button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default PostFeed;