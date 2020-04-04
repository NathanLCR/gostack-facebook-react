import React from 'react';

import Comment from './Comment.js';
import './PostItem.css';

function PostItem({ data }) {
  const comments = data.comments;
  return (
    <>
      <div className="post-container">
        <div>
          <img src={data.author.avatar} className="profile-avatar" />
          <h3>{data.author.name}</h3>
          <p>{data.date}</p>
        </div>
        <p>{data.content}</p>
        <hr />
        {comments.map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </>
  );
}

export default PostItem;
