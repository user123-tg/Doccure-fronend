import React from 'react';
import doctorAppointments from '../../../assets/jsons/doctorAppointments';
import PatientAppointment from '../dashboard/patientAppointment';
const AppointmentTable = () => {
  return (
    <div className="card card-table mb-0">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover table-center mb-0">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Appt Date</th>
                <th>Booking Date</th>
                <th>Amount</th>
                <th>Follow Up</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {doctorAppointments.map((doctorData, index) => {
                return <PatientAppointment data={doctorData} key={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
