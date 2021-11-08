import React, { useState } from "react";


const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <li className="card-container" key={post.id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img src="" alt="" />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>{post.username}</h3>
          
              </div>
              {/* <span>datedepost</span> */}
              <span>30/11/1988</span>
            </div>
            <p>{post.title}</p>
            <img src={post.attachment} alt="funny GIF" width="" />
            <div className="card-footer">
              <div className="comment-icon">
                <img src="./img/icons/message1.svg" alt="comment" />
                <span></span>
              </div>
              <h6>like button</h6>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
