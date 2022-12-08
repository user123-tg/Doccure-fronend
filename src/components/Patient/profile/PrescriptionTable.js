import React from 'react';
import { Link } from 'react-router-dom';
import PrescriptionsTable from '../dashboard/PrescriptionsTable';
import doctorPrescriptions from '../../../assets/jsons/doctorPrescriptions';

const PrescriptionTable = () => {
  return (
    <div>
      <div className="text-right">
        <Link to="/add-prescription" className="add-new-btn">
          Add Prescription
        </Link>
      </div>
      <div className="card card-table mb-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Date </th>
                  <th>Name</th>
                  <th>Created by </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {doctorPrescriptions.map((data, index) => {
                  return <PrescriptionsTable data={data} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionTable;
