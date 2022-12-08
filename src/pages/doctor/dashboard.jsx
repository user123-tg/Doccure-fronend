import { useState } from 'react';
import DoctorSidebar from '../../components/doctor/doctorSlider';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import ProgressBar from 'react-customizable-progressbar';
import StickyBox from 'react-sticky-box';
import Layout from '../../layouts/layout';
import Table from '../../themes/Table/Table';
// SCSS
import './dashboard.scss';
const DoctorDashboard = () => {
  const theadData = ['Patient Name', 'Appt Date', 'Purpose', 'Type', 'Paid Amount', ''];
  const upcoming = [
    {
      patientName: 'Richard Wilson',
      patientId: '#PT0016',
      AppointmentDate: '11 Nov 2019',
      AppointmentTime: '10.00 AM',
      purpose: 'general',
      type: 'New Patient',
      AmountPaid: 150
    },
    {
      patientName: 'Richard Wilson',
      patientId: '#PT0016',
      AppointmentDate: '11 Nov 2019',
      AppointmentTime: '10.00 AM',
      purpose: 'general',
      type: 'New Patient',
      AmountPaid: 150
    },
    {
      patientName: 'Richard Wilson',
      patientId: '#PT0016',
      AppointmentDate: '11 Nov 2019',
      AppointmentTime: '10.00 AM',
      purpose: 'general',
      type: 'New Patient',
      AmountPaid: 150
    },
    {
      patientName: 'Richard Wilson',
      patientId: '#PT0016',
      AppointmentDate: '11 Nov 2019',
      AppointmentTime: '10.00 AM',
      purpose: 'general',
      type: 'New Patient',
      AmountPaid: 150
    }
  ];
  const today = [
    {
      patientName: 'Travis Trimble',
      patientId: '#PT0016',
      AppointmentDate: '11 Nov 2019',
      AppointmentTime: '10.00 AM',
      purpose: 'general',
      type: 'New Patient',
      AmountPaid: 150
    },
    {
      patientName: 'Richard Wilson',
      patientId: '#PT0016',
      AppointmentDate: '11 Nov 2019',
      AppointmentTime: '10.00 AM',
      purpose: 'general',
      type: 'New Patient',
      AmountPaid: 150
    },
    {
      patientName: 'Richard Wilson',
      patientId: '#PT0016',
      AppointmentDate: '11 Nov 2019',
      AppointmentTime: '10.00 AM',
      purpose: 'general',
      type: 'New Patient',
      AmountPaid: 150
    },
    {
      patientName: 'Richard Wilson',
      patientId: '#PT0016',
      AppointmentDate: '11 Nov 2019',
      AppointmentTime: '10:00 AM',
      purpose: 'general',
      type: 'New Patient',
      AmountPaid: 150
    },
    {
      patientName: 'Richard Wilson',
      patientId: '#PT0016',
      AppointmentDate: '11 Nov 2019',
      AppointmentTime: '10:00 AM',
      purpose: 'general',
      type: 'New Patient',
      AmountPaid: 150
    }
  ];
  const [key, setKey] = useState(1);
  const handleSelect = (key) => {
    setKey(key);
  };
  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Dashboard</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <DoctorSidebar />
                </StickyBox>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card dash-card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <ProgressBar
                                width={20}
                                radius={100}
                                progress={50}
                                rotate={-210}
                                strokeWidth={16}
                                strokeColor="#da3f81"
                                strokeLinecap="square"
                                trackStrokeWidth={8}
                                trackStrokeColor="#e6e6e6"
                                trackStrokeLinecap="square"
                                pointerRadius={0}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease">
                                <div className="indicator-volume">
                                  <img
                                    src={require('../../assets/images/icon-01.png')}
                                    className="img-fluid"
                                    alt="Patient"
                                  />
                                </div>
                              </ProgressBar>
                              <div className="dash-widget-info">
                                <h6>Total Patient</h6>
                                <h3>1500</h3>
                                <p className="text-muted">Till Today</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <ProgressBar
                                width={20}
                                radius={100}
                                progress={60}
                                rotate={-210}
                                strokeWidth={16}
                                strokeColor="#68dda9"
                                strokeLinecap="square"
                                trackStrokeWidth={8}
                                trackStrokeColor="#e6e6e6"
                                trackStrokeLinecap="square"
                                pointerRadius={0}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease">
                                <div className="indicator-volume">
                                  <img
                                    src={require('../../assets/images/icon-02.png')}
                                    className="img-fluid"
                                    alt="Patient"
                                  />
                                </div>
                              </ProgressBar>
                              <div className="dash-widget-info">
                                <h6>Today Patient</h6>
                                <h3>160</h3>
                                <p className="text-muted">06, Nov 2019</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <ProgressBar
                                width={20}
                                radius={100}
                                progress={70}
                                rotate={-210}
                                strokeWidth={16}
                                strokeColor="#1b5a90"
                                strokeLinecap="square"
                                trackStrokeWidth={8}
                                trackStrokeColor="#e6e6e6"
                                trackStrokeLinecap="square"
                                pointerRadius={0}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease">
                                <div className="indicator-volume">
                                  <img
                                    src={require('../../assets/images/icon-03.png')}
                                    className="img-fluid"
                                    alt="Patient"
                                  />
                                </div>
                              </ProgressBar>
                              <div className="dash-widget-info">
                                <h6>Appoinments</h6>
                                <h3>85</h3>
                                <p className="text-muted">06, Apr 2019</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <h4 className="mb-4">Patient Appoinment</h4>
                    <div className="appointment-tab">
                      <Tabs
                        className="tab-view"
                        activeKey={key}
                        onSelect={handleSelect}
                        id="controlled-tab-example">
                        <Tab className="nav-item" eventKey={1} title="Upcoming">
                          <div className="tab-pane show active" id="upcoming-appointments">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <Table
                                    column={theadData}
                                    data={upcoming}
                                    className={'table table-hover table-center mb-0'}
                                    type="doctorDashboard"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab className="nav-item" eventKey={2} title="Today">
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <Table
                                  column={theadData}
                                  data={today}
                                  className={'table table-hover table-center mb-0'}
                                  type="doctorDashboard"
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
        </div>
      </div>
    </Layout>
  );
};

export default DoctorDashboard;
