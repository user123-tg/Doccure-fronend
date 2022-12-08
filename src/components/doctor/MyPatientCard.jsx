import React from 'react';
import { Link } from 'react-router-dom';
const MyPatientCard = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card widget-profile pat-widget-profile">
        <div className="card-body">
          <div className="pro-widget-content">
            <div className="profile-info-widget">
              <Link to="/doctor/patient-profile" className="booking-doc-img">
                <img src={require('../../assets/images/patient.jpg')} alt="User" />
              </Link>
              <div className="profile-det-info">
                <h3>
                  <Link to="/doctor/patient-profile">{data.patientName}</Link>
                </h3>

                <div className="patient-details">
                  <h5>
                    <b>Patient ID :</b>
                    {data.patientId}
                  </h5>
                  <h5 className="mb-0">
                    <i className="fas fa-map-marker-alt"></i>
                    {data.address}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="patient-info">
            <ul>
              <li>
                Phone <span>{data.p_number}</span>
              </li>
              <li>
                Age{' '}
                <span>
                  {data.age},{data.gender}
                </span>
              </li>
              <li>
                Blood Group <span>{data.bloodGroup}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPatientCard;
