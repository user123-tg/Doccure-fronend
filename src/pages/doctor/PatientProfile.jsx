import React, { useState } from 'react';
import Layout from '../../layouts/layout';
import PatientNavbar from '../../components/Patient/favourites/PatientNavbar';
import PatientSidebar from '../../components/Patient/PatientSidebar';
import { Tab, Tabs } from 'react-bootstrap';
import AppointmentTable from '../../components/Patient/profile/AppointmentTable';
import PrescriptionTable from '../../components/Patient/profile/PrescriptionTable';
import MedicalRecordsTable from '../../components/Patient/profile/MedicalRecordsTable';
import BillingTable from '../../components/Patient/profile/BillingTable';

const navbarLinks = [
  {
    link: '/home',
    name: 'Home'
  },
  {
    name: 'Profile'
  }
];

const PatientProfile = () => {
  const [key, setKey] = useState(1);
  const handleSelect = (key) => {
    setKey(key);
  };

  return (
    <Layout>
      <PatientNavbar items={navbarLinks} title="Profile" />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
              <PatientSidebar />
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
              <div className="card">
                <div className="card-body pt-0">
                  <Tabs
                    className="tab-view"
                    activeKey={key}
                    onSelect={handleSelect}
                    id="controlled-tab-example">
                    <Tab className="nav-item test" eventKey={1} title="Appointments">
                      <AppointmentTable />
                    </Tab>
                    <Tab className="nav-item" eventKey={2} title="Prescription">
                      <PrescriptionTable />
                    </Tab>
                    <Tab className="nav-item" eventKey={3} title="Medical Records">
                      <MedicalRecordsTable />
                    </Tab>
                    <Tab className="nav-item" eventKey={4} title="Billing">
                      <BillingTable />
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

export default PatientProfile;
