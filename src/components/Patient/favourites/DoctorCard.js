import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG01 } from './img';

const DoctorCard = (props) => {
  const { name, speciality, location, availibility, rates, rating, numOfReviews } = props.data;
  return (
    <div className="profile-widget">
      <div className="doc-img">
        <Link to="/patient/doctor-profile">
          <img className="img-fluid" alt="User" src={IMG01} />
        </Link>
        <a href="#0" className="fav-btn">
          <i className="far fa-bookmark"></i>
        </a>
      </div>
      <div className="pro-content">
        <h3 className="title">
          <Link to="/patient/doctor-profile">{name}</Link>
          <i className="fas fa-check-circle verified"></i>
        </h3>
        <p className="speciality">{speciality}</p>
        <div className="rating">
          {rating.map((r, i) => {
            return <i className={r === 1 ? 'fas fa-star filled' : 'fas fa-star'} key={i}></i>;
          })}
          <span className="d-inline-block average-rating">({numOfReviews})</span>
        </div>
        <ul className="available-info">
          <li>
            <i className="fas fa-map-marker-alt"></i> {location}
          </li>
          <li>
            <i className="far fa-clock"></i> {availibility}
          </li>
          <li>
            <i className="far fa-money-bill-alt"></i> ${rates.lowerlimit} - ${rates.upperlimit}
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
            <Link to="/patient/booking" className="btn book-btn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  data: PropTypes.object
};

export default DoctorCard;
