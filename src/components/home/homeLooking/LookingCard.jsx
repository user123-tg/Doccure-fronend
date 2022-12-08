import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import LinkButton from '../../../themes/linkButton';
import { Link } from 'react-router-dom';
import './LookingCard.scss';
const LookingCard = (detail) => {
  return (
    <>
      {detail.detail.map((element, index) => {
        return (
          <div key={index} className="col-lg-4 mb-3">
            <div className="card text-center doctor-book-card">
              <img
                src={require('../../../assets/images/doctors/doctor-07.jpg')}
                alt=""
                className="img-fluid"
              />
              <div className="doctor-book-card-content tile-card-content-1">
                <div>
                  <h3 className="card-title mb-0">{element.cardTitle}</h3>
                  <Link to="/patient/search-doctor" className="btn book-btn1 px-3 py-2 mt-3">
                    {element.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
LookingCard.prototype = {
  detail: PropTypes.array.isRequired
};
export default LookingCard;
