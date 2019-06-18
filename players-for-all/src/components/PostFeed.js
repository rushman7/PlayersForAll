import React from 'react';
import Comments from './Comments';

const PostFeed = (props) => {
  return (
    <div className="post-container">
      {props.data.map((post, index) => (
        <div className="post" key={post.username + index}>
          <div className="post-header">
            <img className="user-icon" src={post.icon} alt="user-images"/>
            {post.username}
          </div>
          <div className="post-image">
            <img src={post.image} alt="post-images"/>
          </div>
          <div className="post-options">
            <button className="far fa-thumbs-up"></button>
            <button className="far fa-star"></button>
          </div>
          <div className="post-likes">
            {`${post.likes} likes`}
          </div>
          <Comments comments={post.comments}/>     
          <input className="add-comment" placeholder="Add a comment..." type="text"/>   
        </div>
      ))}
    </div>
  )
};

export default PostFeed;