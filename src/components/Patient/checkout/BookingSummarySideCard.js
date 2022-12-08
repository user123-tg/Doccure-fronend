import React from 'react';
import { Link } from 'react-router-dom';
import IMG01 from '../../../assets/images/doctor-thumb-02.jpg';

const data = {
  name: 'Dr. Darren Elder',
  rating: 4,
  numOfReviews: 35,
  location: 'New York USA',
  date: '16 Nov 2019',
  time: '10:00 AM',
  consultingFee: 100,
  bookingFee: 10,
  videoConf: 50
};

export const BookingSummarySideCard = () => {
  return (
    <div className="col-md-5 col-lg-4">
      <div className="card booking-card">
        <div className="card-header">
          <h4 className="card-title">Booking Summary</h4>
        </div>
        <div className="card-body">
          <div className="booking-doc-info">
            <Link to="/patient/doctor-profile" className="booking-doc-img">
              <img src={IMG01} alt="User" />
            </Link>
            <div className="booking-info">
              <h4>
                <Link to="/patient/doctor-profile">{data.name}</Link>
              </h4>
              <div className="rating">
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star"></i>
                <span className="d-inline-block average-rating">{data.numOfReviews}</span>
              </div>
              <div className="clinic-details">
                <p className="doc-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {data.location}
                </p>
              </div>
            </div>
          </div>

          <div className="booking-summary">
            <div className="booking-item-wrap">
              <ul className="booking-date">
                <li>
                  Date <span>{data.date}</span>
                </li>
                <li>
                  Time <span>{data.time}</span>
                </li>
              </ul>
              <ul className="booking-fee">
                <li>
                  Consulting Fee <span>${data.consultingFee}</span>
                </li>
                <li>
                  Booking Fee <span>${data.bookingFee}</span>
                </li>
                <li>
                  Video Call <span>${data.videoConf}</span>
                </li>
              </ul>
              <div className="booking-total">
                <ul className="booking-total-list">
                  <li>
                    <span>Total</span>
                    <span className="total-cost">
                      ${data.videoConf + data.bookingFee + data.consultingFee}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
