import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../../utils/services/auth';
import IMG01 from '../../../assets/images/patient.jpg';
// import useAuth from '../../../hooks/useAuth';

const links = [
  {
    title: 'Dashboard',
    path: '/patient/dashboard',
    icon: 'fas fa-columns'
  },
  {
    title: 'Favourites',
    path: '/patient/favourites',
    icon: 'fas fa-bookmark'
  },
  {
    title: 'Message',
    path: '/doctor/chat-doctor',
    icon: 'fas fa-comments',
    count: 23,
    messageicon: 'unread-msg'
  },
  {
    title: 'Profile Settings',
    path: '/patient/profile',
    icon: 'fas fa-user-cog'
  },
  {
    title: 'Change Password',
    path: '/patient/change-password',
    icon: 'fas fa-lock'
  }
];
export const DashboardSidebar = () => {
  const location = useLocation();
  console.log(location);
  const data = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
  // const { auth } = useAuth();
  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <a href="#0" className="booking-doc-img">
            <img src={IMG01} alt="User" />
          </a>
          <div className="profile-det-info">
            {data?.name ? <h3>{data.name}</h3> : 'unknown user'}
            <div className="patient-details">
              <h5>
                <i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years
              </h5>
              <h5 className="mb-0">
                <i className="fas fa-map-marker-alt"></i> Newyork, USA
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            {links.map((item, index) => {
              return (
                <li key={index} className={location.pathname === item.path ? 'active' : null}>
                  <Link to={item.path}>
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                    {item.count ? <small className={item.messageicon}>{item.count}</small> : null}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="/">
                <i className="fas fa-sign-out-alt"></i>
                <span
                  onClick={() => {
                    logout();
                  }}>
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default DashboardSidebar;
