import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const TableData = ({ data }) => {
  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <Link to="/doctor/patient-profile" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={require('../../../assets/images/patient6.jpg')}
              alt="User"
            />
          </Link>
          <Link to="/doctor/patient-profile">
            {data.patientName}
            <span>{data.patientId}</span>
          </Link>
        </h2>
      </td>
      <td>
        {data.AppointmentDate} <span className="d-block text-info">{data.AppointmentTime}</span>
      </td>
      <td>{data.purpose}</td>
      <td>{data.type}</td>
      <td className="text-center"> ${data.AmountPayed}</td>
      <td className="text-right">
        <div className="table-action">
          <Link to="#0" className="btn btn-sm bg-info-light">
            <i className="far fa-eye"></i> View
          </Link>

          <Link to="#0" className="btn btn-sm bg-success-light">
            <i className="fas fa-check"></i> Accept
          </Link>
          <Link to="#0" className="btn btn-sm bg-danger-light">
            <i className="fas fa-times"></i> Cancel
          </Link>
        </div>
      </td>
    </tr>
  );
};
TableData.prototype = {
  data: PropTypes.object.isRequired
};
export default TableData;
