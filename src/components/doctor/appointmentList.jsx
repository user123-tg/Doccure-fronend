import React from 'react';
import { Link } from 'react-router-dom';
import './appointmentList.scss';
import PropTypes from 'prop-types';
const AppointmentList = ({ deleteUser, handleShow, data }) => {
  console.log(data);
  return (
    <div className="appointment-list-wrapper">
      <div className="appointments">
        {data ? (
          <div className="appointment-list">
            <div className="profile-info-widget">
              <Link to="/doctor/patient-profile" className="booking-doc-img">
                <img src={require('../../assets/images/patient.jpg')} alt="User" />
              </Link>
              <div className="profile-det-info">
                <h3>
                  <Link to="/doctor/patient-profile">{data.firstname}</Link>
                </h3>
                <div className="patient-details">
                  <h5>
                    <i className="far fa-clock"></i> {data.date}, {data.time}
                  </h5>
                  <h5>
                    <i className="fas fa-map-marker-alt"></i> {data.address}
                  </h5>
                  <h5>
                    <i className="fas fa-envelope"></i> {data.email}
                  </h5>
                  <h5 className="mb-0">
                    <i className="fas fa-phone"></i> +{data.phone}
                  </h5>
                </div>
              </div>
            </div>
            <div className="appointment-action">
              <Link to="#0" className="btn btn-sm bg-info-light" onClick={handleShow}>
                <i className="far fa-eye"></i> View
              </Link>
              <Link to="#0" className="btn btn-sm bg-success-light">
                <i className="fas fa-check"></i> Accept
              </Link>
              <Link
                to="#0"
                className="btn btn-sm bg-danger-light"
                onClick={() => deleteUser(data.patientid._id)}>
                <i className="fas fa-times"></i> Cancel
              </Link>
            </div>
          </div>
        ) : (
          console.log('err')
        )}
      </div>
    </div>
  );
};

export default AppointmentList;

AppointmentList.prototype = {
  data: PropTypes.object.isRequired,
  handleShow: PropTypes.func.isRequired
};
