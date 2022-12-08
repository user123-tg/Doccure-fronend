import React from 'react';
import { Link } from 'react-router-dom';
const MedicalRecordTable = ({ data }) => {
  return (
    <tr>
      <td>
        <a href="#0">{data.ID}</a>
      </td>
      <td>{data.date}</td>
      <td>{data.description}</td>
      <td>
        <a href="#0">{data.attachment}</a>
      </td>
      <td>
        <h2 className="table-avatar">
          <Link to="/patient/doctor-profile" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={require('../../../assets/images/doctor-thumb-01.jpg')}
              alt="User "
            />
          </Link>
          <Link to="/patient/doctor-profile">
            {data.doctor} <span>{data.speciality}</span>
          </Link>
        </h2>
      </td>
      <td className="text-right">
        <div className="table-action">
          <Link to="#0" className="btn btn-sm bg-primary-light">
            <i className="fas fa-print"></i> Print
          </Link>
          <Link to="#0" className="btn btn-sm bg-info-light">
            <i className="far fa-eye"></i> View
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default MedicalRecordTable;
