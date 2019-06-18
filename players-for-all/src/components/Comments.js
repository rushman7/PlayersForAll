import React from 'react';

const Comments = (props) => {
  return (
    <div>
      {props.comments.map((comment, index) => (
        <div key={comment.username + index} className="comment">
          <div className="user-comment">
            {comment.username}
          </div>
          <div className="text-comment">
            {comment.text}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comments;