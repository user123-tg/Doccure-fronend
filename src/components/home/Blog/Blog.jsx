import React from 'react';
import PropTypes from 'prop-types';
import BlogCard from './BlogCard.jsx';
import './blog.scss';
const Blog = (props) => {
  const blogCard = [
    {
      img1: require('../../../assets/images/blog-01.jpg'),
      img2: require('../../../assets/images/doctors/doctor-thumb-01.jpg'),
      docName: 'Dr. Ruby Perrin',
      dateAvailable: '4 Dec 2019',
      blog: 'Doccure – Making your clinic painless visit?:',
      blogcontainer:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.'
    },
    {
      img1: require('../../../assets/images/blog-02.jpg'),
      img2: require('../../../assets/images/doctors/doctor-thumb-02.jpg'),
      dateAvailable: '3 Dec 2019',
      blog: 'What are the benefits of Online Doctor Booking?',
      blogcontainer:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.'
    },
    {
      img1: require('../../../assets/images/blog-03.jpg'),
      img2: require('../../../assets/images/doctors/doctor-thumb-03.jpg'),
      docName: 'Dr. Deborah Angel',
      dateAvailable: '4 Dec 2019',
      blog: 'Benefits of consulting with an Online Doctor',
      blogcontainer:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.'
    },
    {
      img1: require('../../../assets/images/blog-04.jpg'),
      img2: require('../../../assets/images/doctors/doctor-thumb-04.jpg'),
      docName: 'Dr. Sofia Brient',
      dateAvailable: '2 Dec 2019',
      blog: '5 Great reasons to use an Online Doctor',
      blogcontainer:
        'Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.'
    }
  ];

  return (
    <section className="section section-blogs">
      <div className="container-fluid">
        <div className="section-header text-center">
          <h2>Blogs and News</h2>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row blog-grid-row">
          <BlogCard blog={blogCard} {...props} />
        </div>
        <div className="view-all text-center">
          <a href="#0" className="btn btn-primary">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  props: PropTypes.any
};

export default Blog;
