import React from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';
import PatientAppointment from '../../components/Patient/dashboard/patientAppointment';
import TableHeadItem from './TableHead';
import PrescriptionsTable from '../../components/Patient/dashboard/PrescriptionsTable';
import MedicalRecordTable from '../../components/Patient/dashboard/medicalRecordTable';
import Billing from '../../components/Patient/dashboard/billing';
import './table.scss';
const Table = ({ column, data, className, type }) => {
  console.log('tbodayData', data);
  console.log('type', type);
  return (
    <div className="table-wrapper">
      <table className={className}>
        <thead>
          <tr>
            {column.map((h) => {
              return <TableHeadItem key={h} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            if (type === 'doctorDashboard') {
              // return <component key={index} data={item} />
              return <TableRow key={index} data={item} />;
            }
            if (type === 'patientAppointment') {
              return <PatientAppointment data={item} key={index} />;
            }
            if (type === 'prescriptions') {
              return <PrescriptionsTable data={item} key={index} />;
            }
            if (type === 'medicalRecords') {
              console.log('medical record called');
              return <MedicalRecordTable data={item} key={index} />;
            }
            if (type === 'billing') {
              return <Billing data={item} key={index} />;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};
Table.prototype = {
  column: PropTypes.array.isRequired,
  data: PropTypes.array
};
Table.defaultProps = {
  className: 'table table-hover table-center mb-0'
};

export default Table;
