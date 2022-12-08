import React from 'react';

const ReviewComments = ({ data }) => {
  return (
    <li>
      <div className="comment">
        <img
          className="avatar rounded-circle"
          alt="User"
          src={require('../../assets/images/patient1.jpg')}
        />
        <div className="comment-body">
          <div className="meta-data">
            <span className="comment-author">{data.patientName}</span>
            <span className="comment-date">Reviewed 4 Days ago</span>
            <div className="review-count rating">
              <i className="fas fa-star filled"></i>
              <i className="fas fa-star filled"></i>
              <i className="fas fa-star filled"></i>
              <i className="fas fa-star filled"></i>
              <i className="fas fa-star filled"></i>
            </div>
          </div>
          <p className="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation. Curabitur non nulla sit amet nisl tempus
          </p>
          <div className="comment-reply">
            <a className="comment-btn" href="#0">
              <i className="fas fa-reply"></i> Reply
            </a>
            <p className="recommend-btn">
              <span>Recommend?</span>
              <a href="#0" className="like-btn">
                <i className="far fa-thumbs-up"></i> Yes
              </a>
              <a href="#0" className="dislike-btn">
                <i className="far fa-thumbs-down"></i> No
              </a>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReviewComments;
