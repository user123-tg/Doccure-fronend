import React from 'react';
import Layout from '../../../layouts/layout';
import PatientNavbar from '../../../components/Patient/favourites/PatientNavbar';
import DashboardSidebar from '../dashboard/sidebar';
import StickyBox from 'react-sticky-box';
import DoctorCard from '../../../components/Patient/favourites/DoctorCard';
import doctors from '../../../assets/jsons/doctors';
const navbarLinks = [
  {
    link: '/home',
    name: 'Home'
  },
  {
    name: 'Favourites'
  }
];

const PatientFavourites = () => {
  return (
    <Layout>
      <PatientNavbar items={navbarLinks} title="Favourites" />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row row-grid">
                {doctors.map((doctor, index) => {
                  return (
                    <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                      <DoctorCard data={doctor} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PatientFavourites;
