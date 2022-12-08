import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { appointment_deleteuser, appointment_Getbyid } from '../../store/actions/user';
const TableRow = ({ data }) => {
  const dispatch = useDispatch();
  const update = async () => {
    try {
      const response = await fetch(
        'http://54.159.116.108:8001/patientupdate/63172eb6c6ffe6c2abf73900',
        {
          method: 'PATCH',
          body: JSON.stringify({
            firstname: 'sreeni',
            lastname: 'rathika',
            phone: '9908765432'
          })
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log('patient detail updated');
      }
    } catch (err) {
      console.log('error');
      throw err;
    }
  };
  // const patientpost = async () => {
  //   try {
  //     const response = await fetch('http://54.159.116.108:8001/patient', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         firstname: 'sreeni',
  //         lastname: 'rathika',
  //         phone: '9908765432',
  //         age: '21',
  //         gender: 'female',
  //         address: 'abudhabi',
  //         bloodgroup: 'A'
  //       }),
  //       headers: { 'Content-Type': 'application/json' }
  //     });
  //     if (response.status === 200 || response.status === 201) {
  //       console.log('post patient updated');
  //     }
  //   } catch (err) {
  //     console.log('error');
  //     throw err;
  //   }
  // };
  const getById = async () => {
    try {
      dispatch(appointment_Getbyid());
    } catch (err) {
      console.log('error');
      throw err;
    }
  };
  const deletePatient = async () => {
    try {
      dispatch(appointment_deleteuser());
    } catch (err) {
      console.log('error');
      throw err;
    }
  };
  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <Link to="/doctor/patient-profile" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={require('../../assets/images/patient6.jpg')}
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
      {console.log('data=====', data)}
      <td className="text-center"> ${data.AmountPaid}</td>
      <td className="text-right">
        <div className="table-action">
          <Link to="#0" onClick={getById} className="btn btn-sm bg-info-light">
            <i className="far fa-eye"></i> View
          </Link>

          <Link to="#0" onClick={update} className="btn btn-sm bg-success-light">
            <i className="fas fa-check"></i> Accept
          </Link>
          <Link to="#0" onClick={deletePatient} className="btn btn-sm bg-danger-light">
            <i className="fas fa-times"></i> Cancel
          </Link>
        </div>
      </td>
    </tr>
  );
};
TableRow.prototype = {
  data: PropTypes.object.isRequired
};
export default TableRow;
