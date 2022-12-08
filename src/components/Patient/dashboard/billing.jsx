import React from 'react';
import { Link } from 'react-router-dom';
const Billing = ({ data }) => {
  const getInvoice = async () => {
    try {
      const response = await fetch('http://54.159.116.108:8001/getinvoice', {
        method: 'GET'
      });
      if (response.status === 200 || response.status === 201) {
        console.log('get Invoice successfully');
      }
    } catch (err) {
      console.log('error');
      throw err;
    }
  };
  return (
    <tr>
      <td>
        <Link to="/pages/invoice-view">{data.invoice_no}</Link>
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
            {data.doctor} <span>Dental</span>
          </Link>
          <Link to="/patient/doctor-profile">
            {data.patient} <span>{data.patientId}</span>
          </Link>
        </h2>
      </td>
      <td>${data.amount}</td>
      <td>{data.paid_on}</td>
      <td className="text-right">
        <div className="table-action">
          <Link to="#0" className="btn btn-sm bg-primary-light">
            <i className="fas fa-print"></i> Print
          </Link>
          <Link to="/pages/invoice-view" onClick={getInvoice} className="btn btn-sm bg-info-light">
            <i className="far fa-eye"></i> View
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default Billing;
