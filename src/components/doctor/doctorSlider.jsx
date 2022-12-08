import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import IMG01 from '../../assets/images/doctor-thumb-02.jpg';
//import { logout } from '../../utils/services/auth';
import './doctorSlider.scss';
const DoctorSidebar = ({ fetchdata }) => {
  // const data = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
  //need this in future
  return (
    <div className="doctor-slider">
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="#" className="booking-doc-img">
              <img src={IMG01} alt="User" />
            </Link>
            <div className="profile-det-info  ">
              {/* {data?.name ? <h3>{data.name}</h3> : ''} */}
              {/* need this in future */}
              <h3>Dr. Darren Elder</h3>
              <div className="patient-details">
                <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <Nav className="dashboard-menu">
            {/* <Nav.Item>
              <NavLink to="/doctor/dashboard">
                <i className="fas fa-columns"></i>
                <span>Dashboard</span>
              </NavLink>
            </Nav.Item> */}

            <Nav.Item>
              <NavLink onClick={fetchdata} to="/doctor/appointments">
                <i className="fas fa-calendar-check"></i>
                <span>Appointments</span>
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/doctor/my-patients">
                <i className="fas fa-user-injured"></i>
                <span>My Patients</span>
              </NavLink>
            </Nav.Item>
            {/* <Nav.Item>
              <NavLink to="/doctor/schedule-timing">
                <i className="fas fa-hourglass-start"></i>
                <span>Schedule Timings</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/invoice">
                <i className="fas fa-file-invoice"></i>
                <span>Invoices</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/review">
                <i className="fas fa-star"></i>
                <span>Reviews</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/chat-doctor">
                <i className="fas fa-comments"></i>
                <span>Message</span>
                <small className="unread-msg">23</small>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor/profile-setting">
                <i className="fas fa-user-cog"></i>
                <span>Profile Settings</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/social-media">
                <i className="fas fa-share-alt"></i>
                <span>Social Media</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/doctor-change-passwword">
                <i className="fas fa-lock"></i>
                <span>Change Password</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/home">
                <i className="fas fa-sign-out-alt"></i>
                <span
                  onClick={() => {
                    logout();
                  }}>
                  Logout
                </span>
              </NavLink>
            </Nav.Item> */}
          </Nav>
        </div>
      </div>
    </div>
  );
};
export default DoctorSidebar;
