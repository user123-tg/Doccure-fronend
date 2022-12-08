import React from 'react';
import { Link } from 'react-router-dom';
import doctorBillings from '../../../assets/jsons/doctorBillings';
import Billing from '../dashboard/billing';

const BillingTable = () => {
  return (
    <div>
      <div className="text-right">
        <Link to="/doctor/add-billing" className="add-new-btn">
          Add Billing
        </Link>
      </div>

      <div className="card card-table mb-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Invoice No</th>
                  <th>Doctor</th>
                  <th>Amount</th>
                  <th>Paid On</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {doctorBillings.map((data, index) => {
                  return <Billing data={data} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingTable;
