import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyToken } from './../../../store/actions/user';
const PatientAppointment = ({ data }) => {
  const dispatch = useDispatch();
  const getById = async (values) => {
    const { token } = values;
    dispatch(verifyToken(token));
    try {
      const response = await fetch(
        'http://54.159.116.108:8001/finduserbyid/6343ffbf14299815e7a0fb0b',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }
      );
      if (response.status === 200) {
        console.log('login successfully');
      }
    } catch (err) {
      console.log('error');
      throw err;
    }
  };
  // const update = async (values) => {
  //   const { token } = values;
  //   dispatch(verifyToken(token));
  //   try {
  //     const response = await fetch(
  //       'http://54.159.116.108:8001/userupdate/633153757805f4a38c513b7c',
  //       {
  //         method: 'PATCH',
  //         body: JSON.stringify({
  //           firstname: 'sreeni',
  //           lastname: 'rathika',
  //           email: 'bharathisri17@gmail.com'
  //         }),
  //         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  //       }
  //     );
  //     if (response.status === 200) {
  //       console.log('login successfully');
  //     }
  //   } catch (err) {
  //     console.log('error');
  //     throw err;
  //   }
  // };
  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <Link to="/patient/doctor-profile" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={require('../../../assets/images/doctor-thumb-01.jpg')}
              alt="User"
            />
          </Link>
          <Link to="/patient/doctor-profile">
            {data.doctorName} <span>{data.doctorCategory}</span>
          </Link>
        </h2>
      </td>
      <td>
        {data.appointmentDate} <span className="d-block text-info">{data.appointmentTime}</span>
      </td>
      <td>{data.bookingDate}</td>
      <td>${data.amount}</td>
      <td>{data.followUp}</td>
      <td>
        <span
          className={
            data.status === 'Confirm'
              ? 'badge badge-pill bg-success-light'
              : 'badge badge-pill bg-danger-light'
          }>
          {data.status}
        </span>
      </td>
      <td className="text-right">
        <div className="table-action">
          <Link to="#0" onClick={() => window.print()} className="btn btn-sm bg-primary-light">
            <i className="fas fa-print"></i> Print
          </Link>
          <Link to="#0" onClick={getById} className="btn btn-sm bg-info-light">
            <i className="far fa-eye"></i> View
          </Link>
        </div>
      </td>
    </tr>
  );
};
export default PatientAppointment;
