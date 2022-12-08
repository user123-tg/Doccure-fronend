import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './blogCard.scss';
const BlogCard = (blog) => {
  return (
    <>
      {blog.blog.map((element, index) => {
        return (
          <div key={index} className="col-md-6 col-lg-3 col-sm-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to="/blog/blog-details">
                  <img className="img-fluid" src={element.img1} alt="Post" />
                </Link>
              </div>
              <div className="blog-content">
                <ul className="entry-meta meta-item">
                  <li>
                    <div className="post-author">
                      <Link to="/patient/doctor-profile">
                        <img src={element.img2} alt="Post Author" />
                        <span>{element.docName}</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <i className="far fa-clock"></i> {element.dateAvailable}
                  </li>
                </ul>
                <h3 className="blog-title">
                  <Link to="/blog/blog-details">{element.blog}</Link>
                </h3>
                <p className="mb-0">{element.blogcontainer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.array
};

export default BlogCard;
