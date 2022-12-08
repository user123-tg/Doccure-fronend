import { useState } from 'react';
import { DashboardSidebar } from './sidebar';
import { Tab, Tabs } from 'react-bootstrap';
import Table from '../../../themes/Table/Table';
// import TableData from './TableData';
import Layout from '../../../layouts/layout';
import StickyBox from 'react-sticky-box';
const PatientDashboard = (...props) => {
  const theadData = ['Doctor', 'Appt Date', 'Booking Date', 'Amount', 'Follow Up', 'Status'];
  const theadData_Pres = ['Date', 'Name', 'Created by'];
  const theadData_Medical = ['ID', 'Date', 'Description', 'Attachment', 'Created'];
  const theadData_billing = ['Invoice No', 'Doctor', 'Amount', 'Paid On'];
  const appointments = [
    {
      doctorName: 'Dr. Ruby Perrin',
      doctorCategory: 'Dental',
      appointmentDate: '14 Nov 2019',
      appointmentTime: '10.00 AM',
      bookingDate: '12 Nov 2019',
      amount: 450,
      followUp: '16 Nov 2019',
      status: 'Confirm'
    },
    {
      doctorName: 'Dr. Ruby Perrin',
      doctorCategoty: 'Dental',
      appointmentDate: '14 Nov 2019',
      appointmentTime: '10.00 AM',
      bookingDate: '12 Nov 2019',
      amount: 450,
      followUp: '16 Nov 2019',
      status: 'Confirm'
    },
    {
      doctorName: 'Dr. Ruby Perrin',
      doctorCategoty: 'Dental',
      appointmentDate: '14 Nov 2019',
      appointmentTime: '10.00 AM',
      bookingDate: '12 Nov 2019',
      amount: 450,
      followUp: '16 Nov 2019',
      status: 'Confirm'
    }
  ];
  const prescriptions = [
    {
      date: '14 Nov 2019',
      name: 'Prescription 1',
      doctor: 'Dr. Ruby Perrin',
      speciality: 'dental'
    },
    {
      date: '14 Nov 2019',
      name: 'Prescription 1',
      doctor: 'Dr. Ruby Perrin',
      speciality: 'dental'
    },
    {
      date: '14 Nov 2019',
      name: 'Prescription 1',
      doctor: 'Dr. Ruby Perrin',
      speciality: 'dental'
    }
  ];
  const medicalRecords = [
    {
      ID: '#MR-0010',
      date: '14 Nov 2019',
      description: 'Dental Filling',
      attachment: 'dental-test.pdf',
      doctor: 'Dr. Ruby Perrin',
      speciality: 'Dental'
    },
    {
      ID: '#MR-0010',
      date: '14 Nov 2019',
      description: 'Dental Filling',
      attachment: 'dental-test.pdf',
      doctor: 'Dr. Ruby Perrin',
      speciality: 'Dental'
    },
    {
      ID: '#MR-0010',
      date: '14 Nov 2019',
      description: 'Dental Filling',
      attachment: 'dental-test.pdf',
      doctor: 'Dr. Ruby Perrin',
      speciality: 'Dental'
    },
    {
      ID: '#MR-0010',
      date: '14 Nov 2019',
      description: 'Dental Filling',
      attachment: 'dental-test.pdf',
      doctor: 'Dr. Ruby Perrin',
      speciality: 'Dental'
    }
  ];
  const bills = [
    {
      invoice_No: '#INV-0010',
      doctor: 'Ruby Perrin',
      speciality: 'dental',
      amount: 450,
      paid_On: '14 Nov 2019'
    },
    {
      invoice_No: '#INV-0010',
      doctor: 'Ruby Perrin',
      speciality: 'dental',
      amount: 450,
      paid_On: '14 Nov 2019'
    },
    {
      invoice_No: '#INV-0010',
      doctor: 'Ruby Perrin',
      speciality: 'dental',
      amount: 450,
      paid_On: '14 Nov 2019'
    },
    {
      invoice_No: '#INV-0010',
      doctor: 'Ruby Perrin',
      speciality: 'dental',
      amount: 450,
      paid_On: '14 Nov 2019'
    }
  ];
  const [key, SetKey] = useState(1);
  const handleSelect = (key) => {
    SetKey(key);
  };

  console.log(props);

  return (
    <Layout>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body pt-0">
                  <Tabs
                    className="tab-view"
                    activeKey={key}
                    onSelect={handleSelect}
                    id="controlled-tab-example">
                    <Tab className="nav-item" eventKey={1} title="Appointments">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <Table
                              column={theadData}
                              data={appointments}
                              className="table table-hover table-center mb-0"
                              type="patientAppointment"
                            />
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab className="nav-item" eventKey={2} title="Prescriptions">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <Table
                              column={theadData_Pres}
                              data={prescriptions}
                              className="table table-hover table-center mb-0"
                              type="prescriptions"
                            />
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab className="nav-item" eventKey={3} title="Medical Records">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <Table
                            column={theadData_Medical}
                            data={medicalRecords}
                            className="table table-hover table-center mb-0"
                            type="medicalRecords"
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab className="nav-item" eventKey={4} title="Billing">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <Table
                              column={theadData_billing}
                              data={bills}
                              className="table table-hover table-center mb-0"
                              type="billing"
                            />
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PatientDashboard;
