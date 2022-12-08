// import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Home1 from '../pages/home/home1';
import Home2 from '../pages/home/home2';
import Homeslider1 from '../pages/home/homeslider1';
import Homeslider2 from '../pages/home/homeslider2';
import Login from '../pages/login';
import DoctorDashboard from '../pages/doctor/dashboard';
import PatientDashboard from '../pages/patients/dashboard/patientsDashboard';
import Register from '../pages/Register';
//import ProtectedRoute from './ProtectedRoute';
import DoctorRegisteration from '../pages/DoctorRegisteration';
import Appointments from '../pages/doctor/Appointments';
import MyPatient from '../pages/doctor/MyPatient';
import ScheduleTiming from '../pages/doctor/ScheduleTiming';
import Invoices from '../pages/doctor/Invoice';
import InvoiceView from '../pages/doctor/InvoiceView';
import Review from '../pages/doctor/Reviews';
import DoctorChat from '../pages/doctor/Chat';
import Password from '../pages/doctor/Password';
import ProfileSetting from '../pages/doctor/ProfileSetting';
import SocialMedia from '../pages/doctor/SocialMedia';
import PatientFavourites from '../pages/patients/favourites/PatientFavourites';
import PatientProfile from '../pages/doctor/PatientProfile';
import AddPrescription from '../pages/doctor/AddPrescription';
import AddBilling from '../pages/doctor/AddBilling';
import Checkout from '../pages/patients/checkout';
//import BookingSucc from '../pages/patients/booking-success';
import Booking from '../pages/patients/Booking';
import ForgotPassword from '../pages/forgetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerifyToken from '../verifyToken';
//import { useSelector } from 'react-redux';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { TailSpin } from 'react-loader-spinner';
import RegisterRedirect from '../pages/Pharmacy/RegisterRedirect';

const Routing = () => {
  // const isLoading = useSelector((state) => state.user.isLoading);
  //const isLogged = useSelector((state) => state.user);
  // console.log(isLoading, 'loading');
  // const ROLES = {
  //   doctor: '61e8eff6808beaa8291fd4e2',
  //   patient: '61ea587929e90b4b961335dd'
  // };
  const data = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
  console.log(data.length, 'dataaaa');
  return (
    <>
      <ToastContainer />
      <Routes>
        (
        {data.length ? (
          <>
            <Route path="/doctor/doctor-register" element={<DoctorRegisteration />} />
            <Route path="/patient/change-password" element={<Password />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/favourites" element={<PatientFavourites />} />
            <Route path="/patient/checkout" element={<Checkout />} />
            <Route path="/patient/profile" element={<PatientProfile />} />
            <Route path="/RegisterRedirect" element={<RegisterRedirect />} />
            <Route path="/patient/booking" element={<Booking />} />
            <Route path="/add-prescription" element={<AddPrescription />} />
            <Route path="/doctor/add-billing" element={<AddBilling />} />
            <Route path="/doctor/appointments" element={<Appointments />} />
            <Route path="/doctor/my-patients" element={<MyPatient />} />
            <Route path="/doctor/profile-setting" element={<ProfileSetting />} />
            <Route path="/doctor/schedule-timing" element={<ScheduleTiming />} />
            <Route path="/doctor/invoice" element={<Invoices />} />
            <Route path="/pages/invoice-view" element={<InvoiceView />} />
            <Route path="/doctor/review" element={<Review />} />
            <Route path="/doctor/chat-doctor" element={<DoctorChat />} />
            <Route path="/doctor-change-passwword" element={<Password />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/doctor/patient-profile" element={<PatientProfile />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/verifytoken" element={<VerifyToken />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home1" element={<Home1 />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/homeslider1" element={<Homeslider1 />} />
            <Route path="/homeslider2" element={<Homeslider2 />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        )
      </Routes>

      {/* <Route element={<ProtectedRoute allowedRoles={ROLES.doctor} />}>
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={ROLES.patient} />}>
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
        </Route> */}
    </>
  );
};
export default Routing;
