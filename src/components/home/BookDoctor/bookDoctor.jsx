import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import BookDocCard from './bookDocCard.jsx';
import PropTypes from 'prop-types';
import './bookDoctor.scss';
export const BookDoctor = (props) => {
  const settings = {
    width: 400,
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '10px',
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };
  const books = [
    {
      img: require('../../../assets/images/doctors/doctor-03.jpg'),
      doctor: 'Sofia Brient',
      qualification: 'BDS, MDS - Oral & Maxillofacial Surgery',
      country: ' Georgia, USA',
      available: ' Available on Fri, 22 Mar',
      price: ' $100 - $400'
    },
    {
      img: require('../../../assets/images/doctors/doctor-03.jpg'),
      doctor: 'Ruby Perrin',
      qualification: 'MDS - Periodontology and Oral Implantology, BDS',
      country: '  Florida, USA',
      available: '  Available on Fri, 22 Marr',
      price: '  $300 - $1000'
    },
    {
      img: require('../../../assets/images/doctors/doctor-03.jpg'),
      doctor: 'Sofia Brient ',
      qualification: 'MBBS, MS - General Surgery, MCh - Urology',
      country: '   Louisiana, USA',
      available: '   Available on Fri, 22 Mar',
      price: '   $150 - $250'
    },
    {
      img: require('../../../assets/images/doctors/doctor-03.jpg'),
      doctor: 'Sofia Brient ',
      qualification: 'MBBS, MS - General Surgery, MCh - Urology',
      country: '   Louisiana, USA',
      available: '   Available on Fri, 22 Mar',
      price: '   $150 - $250'
    }
  ];
  return (
    <section className="section section-doctor">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-header ">
              <h2>Book Our Doctor</h2>
              <p>Lorem Ipsum is simply dummy text </p>
            </div>
            <div className="about-content">
              <p>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum.
              </p>
              <p>
                web page editors now use Lorem Ipsum as their default model text, and a search for
                lorem ipsum will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes
              </p>
              <Link to="">Read More..</Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="doctor-slider slider">
              <Slider {...settings}>
                {books.map((element, index) => {
                  return <BookDocCard key={index} book={element} {...props} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookDoctor;

BookDoctor.prototypes = {
  props: PropTypes.any
};
