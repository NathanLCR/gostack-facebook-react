import React from 'react';

import './Comment.css';

function Comment({ data }) {
  return (
    <div className="comment-content">
      <img src={data.author.avatar} alt="" />
      <div>
        <span>{data.author.name} </span>
        {data.content}
      </div>
    </div>
  );
}

export default Comment;
