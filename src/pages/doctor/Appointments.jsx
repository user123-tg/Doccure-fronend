import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import StickyBox from 'react-sticky-box';
import DoctorSidebar from '../../components/doctor/doctorSlider';
import Layout from '../../layouts/layout';
import AppointmentList from '../../components/doctor/appointmentList';
import { useDispatch, useSelector } from 'react-redux';
import { appointment_user, appointment_deleteuser } from '../../store/actions/user';

const Appointments = () => {
  const dispatch = useDispatch();
  const [appointmenttData, setAppointmenttData] = useState([]);
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    //  postuserdata();
  }, []);
  //      GET Method
  const getdata = async () => {
    try {
      dispatch(appointment_user());
      setAppointmenttData;
    } catch (err) {
      console.log('error');
    }
  };

  //        POST Method..
  const postuserdata = async () => {
    try {
      const response = await fetch('http://54.159.116.108:8001/appointment', {
        method: 'POST',
        body: JSON.stringify({
          firstname: 'Bharathi',
          lastname: 'sree',
          date: '17/08/1996',
          time: '09:30',
          day: 'monday',
          email: 'Bharathi@gmail.com',
          phone: '9281762536',
          address: 'Villa 1',
          gender: 'female',
          bookingfee: '150',
          consultingfee: '1000',
          patientid: 'patient',
          doctorid: 'doctor'
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      response.length ? response.json() : {};
    } catch (err) {
      console.log('error');
      throw err;
    }
  };

  //       DELETE Method

  const deleteUser = async (id) => {
    try {
      dispatch(appointment_deleteuser(id));
    } catch (err) {
      console.log('error');
      throw err;
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  //        UPDATE Method
  const [updatedetail, setUpdatedetail] = useState();
  const handleShow = async (id) => {
    setShow(true);
    try {
      const response = await fetch(`http://54.159.116.108:8001/appointmentUpdate/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstname: 'sree',
          lastname: 'rathi',
          email: 'sree@gmail.com'
        })
      });
      console.log(response);
      const update = response.length ? response.json() : {};
      setUpdatedetail(update);
    } catch (err) {
      console.log('error');
    }
  };
  return (
    <Layout>
      <div>
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Appointments
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Appointments</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div className="appointments">
                  <StickyBox offsetTop={50} offsetBottom={20}>
                    <DoctorSidebar fetchdata={getdata} />
                  </StickyBox>
                </div>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="appointments">
                  {appointmenttData || updatedetail || isLoading
                    ? appointmenttData.map((element, index) => {
                        return (
                          <AppointmentList
                            key={index}
                            handleShow={handleShow}
                            postuserdata={postuserdata}
                            deleteUser={deleteUser}
                            data={element}
                          />
                        );
                      })
                    : console.log('err')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*view modal*/}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <h5 className="modal-title">Appointment Details</h5>
          </Modal.Header>
          <Modal.Body>
            <ul className="info-details">
              <li>
                <div className="details-header">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="title">#APT0001</span>
                      <span className="text">21 Oct 2019 10:00 AM</span>
                    </div>
                    <div className="col-md-6">
                      <div className="text-right">
                        <button
                          type="button"
                          className="btn bg-success-light btn-sm"
                          id="topup_status">
                          Completed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="title">Status:</span>
                <span className="text">Completed</span>
              </li>
              <li>
                <span className="title">Confirm Date:</span>
                <span className="text">29 Jun 2019</span>
              </li>
              <li>
                <span className="title">Paid Amount</span>
                <span className="text">$450</span>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    </Layout>
  );
};

export default Appointments;
