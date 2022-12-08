import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './bookDocCard.scss';
const BookDocCard = (props) => {
  console.log('props', props);
  const element = props.book;
  return (
    <>
      <div>
        <div className="profile-widget">
          <div className="doc-img">
            <Link to="/patient/doctor-profile">
              <img className="img-fluid" alt="User" src={element.img} />
            </Link>
            <Link to="" className="fav-btn">
              <i className="far fa-bookmark"></i>
            </Link>
          </div>
          <div className="pro-content">
            <h3 className="title">
              <Link to="/patient/doctor-profile">{element.doctor}</Link>
              <i className="fas fa-check-circle verified"></i>
            </h3>
            <p className="speciality">{element.qualification}</p>
            <div className="rating">
              <i className="fas fa-star filled"></i>
              <i className="fas fa-star filled"></i>
              <i className="fas fa-star filled"></i>
              <i className="fas fa-star filled"></i>
              <i className="fas fa-star"></i>
              <span className="d-inline-block average-rating">(27)</span>
            </div>
            <ul className="available-info">
              <li>
                <i className="fas fa-map-marker-alt"></i> {element.country}
              </li>
              <li>
                <i className="far fa-clock"></i> {element.available}
              </li>
              <li>
                <i className="far fa-money-bill-alt"></i>
                {element.price}
                <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
              </li>
            </ul>
            <div className="row row-sm">
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="btn view-btn">
                  View Profile
                </Link>
              </div>
              <div className="col-6">
                {/* <a href="/patient/booking">
                  <button className="btn book-btn">Book Now </button>
                </a> */}
                <Link to="/patient/booking" className="btn book-btn">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BookDocCard.propTypes = {
  props: PropTypes.object.isRequired
};
export default BookDocCard;
